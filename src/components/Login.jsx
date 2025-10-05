import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedImageCarousel from './AnimatedImageCarousel';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  // Load images on mount
  React.useEffect(() => {
    const loadImages = () => {
      try {
        const imageContext = require.context('../../public/nuhathari_login_image', false, /\.(jpg|jpeg|png)$/);
        const imagePaths = imageContext.keys().map(key => `/nuhathari_login_image/${key.replace('./', '')}`);
        setImages(imagePaths.length > 0 ? imagePaths : ['/nuhathari_login_image/WhatsApp Image 2025-09-28 at 00.14.21_cd07ab88.jpg']);
      } catch (error) {
        // Fallback to default image
        setImages(['/nuhathari_login_image/WhatsApp Image 2025-09-28 at 00.14.21_cd07ab88.jpg']);
      }
    };
    loadImages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    const result = onLogin(username, password);

    if (result.success) {
      if (result.user === 'nuha') {
        navigate('/nuha-story');
      } else if (result.user === 'tharu') {
        navigate('/tharu-story');
      }
    } else {
      setError(result.message);
      setPassword('');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Mobile View */}
      <div className="lg:hidden">
        {/* Mobile Horizontal Carousel */}
        <div className="h-[50vh] relative overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20">
          <div className="flex flex-col gap-4 h-full py-4">
            {/* Top Row - Scrolling Left */}
            <motion.div
              className="flex gap-4 flex-1"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {images.length > 0 && [...images, ...images, ...images, ...images].map((img, i) => (
                <div key={`mobile-left-${i}`} className="w-48 h-full flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt={`Memory ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/nuhathari_login_image/WhatsApp Image 2025-09-28 at 00.14.21_cd07ab88.jpg';
                    }}
                  />
                </div>
              ))}
            </motion.div>

            {/* Bottom Row - Scrolling Right */}
            <motion.div
              className="flex gap-4 flex-1"
              animate={{
                x: [-1000, 0],
              }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {images.length > 0 && [...images, ...images, ...images, ...images].map((img, i) => (
                <div key={`mobile-right-${i}`} className="w-48 h-full flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt={`Memory ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/nuhathari_login_image/WhatsApp Image 2025-09-28 at 00.14.21_cd07ab88.jpg';
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Title and Scroll Indicator */}
        <div className="text-center py-8 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-600">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">
              Memory Gallery
            </h1>
            <p className="text-lg text-white/90 font-display mb-2">
              A Story of Two Sisters 💕
            </p>
            <div className="px-6 mb-4">
              <p className="text-base text-white/95 font-medium mb-3 italic">
                "This is my mini world where I keep you. My sisters' story."
              </p>
              <p className="text-sm text-white/85 leading-relaxed">
                Not just memories - but pieces of my heart, wrapped in pixels and love.
                Every photo whispers a thousand words I couldn't say, every moment captured is proof that angels exist... and I'm blessed to call them my sisters.
                Through laughter and tears, fights and hugs - this is our forever story. 💖
              </p>
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/80"
            >
              <p className="text-sm mb-1">Scroll down to login</p>
              <p className="text-2xl">↓</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Login Form */}
        <div className="p-6 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-600 min-h-[50vh] flex items-center justify-center">
          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="glassmorphism bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/30"
            >
              <h2 className="text-xl font-bold text-white text-center mb-6">
                Welcome Back
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter username"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all backdrop-blur-sm"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all backdrop-blur-sm pr-12"
                    required
                  />
                  {password && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  )}
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-300 text-sm text-center bg-red-500/20 rounded-lg p-3 border border-red-400/30"
                  >
                    {error}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Loading...
                    </>
                  ) : (
                    <>
                      Enter Your Story ✨
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center text-white/80 text-sm mt-4"
            >
              Enter your credentials to view your personalized memory journey
            </motion.p>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block min-h-screen flex relative overflow-hidden">
        {/* Left Side - Login Form (40%) */}
        <div className="w-full lg:w-[40%] fixed left-0 top-0 bottom-0 z-10 flex items-center justify-center p-6 lg:p-12 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-600">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-60 h-60 bg-purple-300/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="w-full max-w-md relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Memory Gallery
              </h1>
              <p className="text-xl text-white/90 font-display mb-3">
                A Story of Two Sisters 💕
              </p>
              <div className="mt-4">
                <p className="text-lg text-white/95 font-medium mb-3 italic">
                  "This is my mini world where I keep you. My sisters' story."
                </p>
                <p className="text-sm text-white/85 leading-relaxed max-w-lg mx-auto">
                  Not just memories - but pieces of my heart, wrapped in pixels and love.
                  Every photo whispers a thousand words I couldn't say, every moment captured is proof that angels exist... and I'm blessed to call them my sisters.
                  Through laughter and tears, fights and hugs - this is our forever story. 💖
                </p>
              </div>
            </motion.div>

          {/* Login Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30"
          >
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              Welcome Back
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Input */}
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter username"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all backdrop-blur-sm"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all backdrop-blur-sm pr-12"
                  required
                />
                {password && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-300 text-sm text-center bg-red-500/20 rounded-lg p-3 border border-red-400/30"
                >
                  {error}
                </motion.div>
              )}

              {/* Login Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Loading...
                  </>
                ) : (
                  <>
                    Enter Your Story ✨
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

            {/* Footer Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center text-white/80 text-sm mt-6"
            >
              Enter your credentials to view your personalized memory journey
            </motion.p>
          </div>
        </div>

        {/* Right Side - Animated Image Carousel (60%) */}
        <div className="lg:w-[60%] lg:ml-[40%] relative h-screen overflow-hidden">
          <AnimatedImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default Login;
