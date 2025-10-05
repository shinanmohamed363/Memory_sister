import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedImageCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Load all images from the nuhathari_login_image folder
    const imageContext = require.context('../../public/nuhathari_login_image', false, /\.(jpg|jpeg|png)$/);
    const imagePaths = imageContext.keys().map(key => `/nuhathari_login_image/${key.replace('./', '')}`);
    setImages(imagePaths);
  }, []);

  // Duplicate images for seamless loop
  const leftColumnImages = [...images, ...images, ...images];
  const rightColumnImages = [...images, ...images, ...images];

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-pink-500/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-400 rounded-lg rotate-12 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400 rounded-lg -rotate-12 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300 rounded-full blur-lg"></div>
      </div>

      <div className="flex gap-4 h-full">
        {/* Left Column - Scrolling Up */}
        <div className="flex-1 relative overflow-hidden">
          <motion.div
            className="flex flex-col gap-4 py-4"
            animate={{
              y: [0, -1000],
            }}
            transition={{
              y: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {leftColumnImages.map((image, index) => (
              <motion.div
                key={`left-${index}`}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={image}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Instagram-style decorations */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-xl">💖</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom decorations */}
                  <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl"
                    >
                      ❤️
                    </motion.div>
                    <div className="text-xl">🎵</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Scrolling Down */}
        <div className="flex-1 relative overflow-hidden">
          <motion.div
            className="flex flex-col gap-4 py-4"
            animate={{
              y: [-1000, 0],
            }}
            transition={{
              y: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {rightColumnImages.map((image, index) => (
              <motion.div
                key={`right-${index}`}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={image}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Instagram-style decorations */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-xl">💜</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom decorations */}
                  <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="text-2xl"
                    >
                      💕
                    </motion.div>
                    <div className="text-xl">✨</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedImageCarousel;
