import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PasswordModal from './PasswordModal';
import Lightbox from './Lightbox';
import VideoCard from './VideoCard';

const LockedGallery = ({ folderName, title, password, isPrincess = false, scrollingMode = false }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMedia();
  }, [folderName]);

  const loadMedia = () => {
    try {
      // Load images
      const imageContext = require.context('../../public', true, /\.(png|jpe?g|svg|gif)$/);
      const folderImages = imageContext.keys()
        .filter(key => key.includes(`/${folderName}/`))
        .map((key, index) => ({
          id: index,
          src: imageContext(key),
          name: key.split('/').pop(),
          path: key
        }));

      // Load videos
      const videoContext = require.context('../../public', true, /\.(mp4|webm|mov|avi)$/);
      const folderVideos = videoContext.keys()
        .filter(key => key.includes(`/${folderName}/`))
        .map((key, index) => ({
          id: index,
          src: videoContext(key),
          name: key.split('/').pop(),
          path: key
        }));

      setImages(folderImages);
      setVideos(folderVideos);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading media:', error);
      setIsLoading(false);
    }
  };

  const handleUnlock = (enteredPassword) => {
    if (enteredPassword === password) {
      setIsUnlocked(true);
      return true;
    }
    return false;
  };

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        <div className="loading-spinner mx-auto"></div>
        <p className="mt-4 text-gray-300">Loading memories...</p>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 gradient-text">
            {title}
          </h2>
        )}

        {!isUnlocked ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6 animate-float">
              {isPrincess ? '👑' : '🔒'}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
              Protected Memories
            </h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              {isPrincess
                ? "These precious memories are protected. Enter the password to unlock the princess's gallery."
                : "These special memories are password protected. Enter the password to view them."}
            </p>
            <button
              onClick={() => setShowPasswordModal(true)}
              className="btn-primary nuha-gradient px-8 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-transform"
            >
              Unlock Gallery ✨
            </button>
            <div className="mt-6 text-gray-500 text-sm">
              {images.length + videos.length} {images.length + videos.length === 1 ? 'memory' : 'memories'} waiting to be unlocked
            </div>
          </div>
        ) : (
          <>
            {/* Images Section */}
            {images.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-pink-300">
                  Photo Memories 📸
                </h3>

                {scrollingMode ? (
                  /* Scrolling Animation Mode */
                  <div className="relative h-[600px] overflow-hidden">
                    <div className="flex gap-4 h-full">
                      {/* Left Column - Scrolling Up */}
                      <motion.div
                        className="flex flex-col gap-4 flex-1"
                        animate={{ y: [0, -2000] }}
                        transition={{ y: { duration: 40, repeat: Infinity, ease: "linear" }}}
                      >
                        {[...images, ...images, ...images].map((image, index) => (
                          <div
                            key={`scroll-left-${index}`}
                            className="gallery-item aspect-square bg-white/5 rounded-lg overflow-hidden cursor-pointer group relative flex-shrink-0"
                            onClick={() => setSelectedImage(index % images.length)}
                          >
                            <img
                              src={image.src}
                              alt={image.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                              <p className="text-white text-sm font-medium truncate">
                                {image.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </motion.div>

                      {/* Right Column - Scrolling Down */}
                      <motion.div
                        className="flex flex-col gap-4 flex-1"
                        animate={{ y: [-2000, 0] }}
                        transition={{ y: { duration: 40, repeat: Infinity, ease: "linear" }}}
                      >
                        {[...images, ...images, ...images].map((image, index) => (
                          <div
                            key={`scroll-right-${index}`}
                            className="gallery-item aspect-square bg-white/5 rounded-lg overflow-hidden cursor-pointer group relative flex-shrink-0"
                            onClick={() => setSelectedImage(index % images.length)}
                          >
                            <img
                              src={image.src}
                              alt={image.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                              <p className="text-white text-sm font-medium truncate">
                                {image.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  /* Regular Grid Mode */
                  <div className="gallery-grid">
                    {images.map((image, index) => (
                      <motion.div
                        key={`image-${image.id}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="gallery-item aspect-square bg-white/5 rounded-lg overflow-hidden cursor-pointer group relative"
                        onClick={() => setSelectedImage(index)}
                      >
                        <img
                          src={image.src}
                          alt={image.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <p className="text-white text-sm font-medium truncate">
                            {image.name}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Videos Section */}
            {videos.length > 0 && (
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-purple-300">
                  Video Memories 🎥
                </h3>
                <div className="gallery-grid">
                  {videos.map((video, index) => (
                    <motion.div
                      key={`video-${video.id}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (images.length + index) * 0.05 }}
                      className="gallery-item aspect-square bg-white/5 rounded-lg overflow-hidden cursor-pointer group relative"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVideo(video.src);
                      }}
                    >
                      {/* Video Thumbnail */}
                      <video
                        src={video.src}
                        className="w-full h-full object-cover"
                        preload="metadata"
                      />

                      {/* Play Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/50"
                        >
                          <svg
                            className="w-8 h-8 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Video Name */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white text-sm font-medium truncate">
                          🎬 {video.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center mt-8 text-gray-400">
              {images.length} {images.length === 1 ? 'photo' : 'photos'}
              {videos.length > 0 && ` • ${videos.length} ${videos.length === 1 ? 'video' : 'videos'}`}
            </div>
          </>
        )}
      </div>

      {showPasswordModal && (
        <PasswordModal
          onClose={() => setShowPasswordModal(false)}
          onUnlock={handleUnlock}
          isPrincess={isPrincess}
        />
      )}

      {selectedImage !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNavigate={setSelectedImage}
        />
      )}

      {selectedVideo && (
        <VideoCard
          src={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default LockedGallery;
