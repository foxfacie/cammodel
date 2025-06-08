import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Lock, Eye, Video, ChevronLeft, ChevronRight } from 'lucide-react';
import { videoItems } from '../data/modelData';
import { VideoItem } from '../types';

const VideoCard: React.FC<{ video: VideoItem; onClick: () => void }> = ({ video, onClick }) => {
  return (
            <motion.div
              className="group cursor-pointer"
      whileHover={{ y: -5 }}
      onClick={onClick}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                {/* Thumbnail */}
                <div className="aspect-video overflow-hidden">
          <motion.img 
                    src={video.thumbnailUrl} 
                    alt={video.title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
                  />
                
                {/* Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                    <Play className="h-8 w-8 text-white" fill="white" />
              </motion.div>
                  </div>
          </motion.div>
                </div>
                
                {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-secondary-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
                  {video.duration}
                </div>
                
                {/* Premium badge */}
                {video.isPremium && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <Lock className="h-3 w-3" />
                    Premium
                  </div>
                )}
              </div>
              
              {/* Video info */}
      <div className="mt-4">
        <h3 className="font-playfair font-bold text-white group-hover:text-accent-400 transition-colors duration-300">
          {video.title}
        </h3>
        <p className="text-sm text-gray-300 mt-1 line-clamp-2">{video.description}</p>
        <div className="flex items-center mt-2 text-gray-400 text-sm">
                  <Eye className="h-4 w-4 mr-1" />
                  {video.views.toLocaleString()} views
                </div>
              </div>
            </motion.div>
  );
};

const VideosSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 8;

  const totalPages = Math.ceil(videoItems.length / videosPerPage);
  const currentVideos = videoItems.slice(
    currentPage * videosPerPage,
    (currentPage + 1) * videosPerPage
  );

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section className="relative py-32 overflow-hidden bg-secondary-900" id="videos">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundImage: [
            'radial-gradient(circle at 20% 20%, rgba(255, 105, 180, 0.15) 0%, transparent 70%)',
            'radial-gradient(circle at 80% 80%, rgba(147, 112, 219, 0.15) 0%, transparent 70%)',
            'radial-gradient(circle at 20% 20%, rgba(255, 105, 180, 0.15) 0%, transparent 70%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Elements */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <motion.div
            className="inline-flex items-center justify-center gap-4 mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Video className="h-8 w-8 text-accent-400" />
            <Play className="h-12 w-12 text-accent-400" fill="currentColor" />
            <Video className="h-8 w-8 text-accent-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-accent-400 to-purple-400 bg-clip-text text-transparent">
              Featured
            </span>
            <span className="text-white"> Videos</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Watch my latest videos and exclusive behind-the-scenes content.
          </p>
        </motion.div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={() => setSelectedVideo(video)}
            />
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4">
          <motion.button
            className="p-2 rounded-full bg-white/10 hover:bg-accent-400/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevPage}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </motion.button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage ? 'bg-accent-400' : 'bg-white/20'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>

          <motion.button
            className="p-2 rounded-full bg-white/10 hover:bg-accent-400/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextPage}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-secondary-900/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              className="relative max-w-4xl w-full bg-secondary-800 rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="aspect-video bg-secondary-900 flex items-center justify-center">
                {selectedVideo.isPremium ? (
                  <div className="text-center p-8">
                    <Lock className="h-16 w-16 text-accent-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">Premium Content</h3>
                    <p className="text-gray-300 mb-6">This video is exclusive to premium subscribers.</p>
                    <motion.button 
                      className="relative px-8 py-3 overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                        <Lock className="h-5 w-5" />
                        <span>Unlock Premium</span>
                      </span>
                    </motion.button>
                  </div>
                ) : (
                  <motion.div
                    className="text-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="h-20 w-20 text-white opacity-80" fill="white" />
                  </motion.div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-300 mb-4">{selectedVideo.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400">
                    <Eye className="h-5 w-5 mr-1" />
                    <span>{selectedVideo.views.toLocaleString()} views</span>
                  </div>
                  <div className="text-gray-400">
                    Duration: {selectedVideo.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideosSection;