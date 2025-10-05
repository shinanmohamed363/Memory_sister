import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PasswordModal = ({ onClose, onUnlock, title = "This memory is protected", isPrincess = false }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = onUnlock(password);
    if (result) {
      setPassword('');
      setError('');
      onClose();
    } else {
      setError('Incorrect password');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setPassword('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className={`glassmorphism bg-white/10 rounded-2xl p-8 max-w-md w-full mx-4 ${isShaking ? 'animate-shake' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            className="text-6xl mb-4"
          >
            {isPrincess ? '👑🔒' : '🔒'}
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
            {title}
          </h2>
          <p className="text-gray-300">
            {isPrincess
              ? "Enter password to view these special moments with my little princess"
              : "Enter password to view these special moments"
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              autoFocus
            />
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2"
              >
                {error}
              </motion.p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-lg nuha-gradient hover:opacity-90 transition-opacity font-semibold text-white"
            >
              Unlock ✨
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PasswordModal;
