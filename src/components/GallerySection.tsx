import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lock, Heart, Eye, Image as ImageIcon, Video, Tv, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '../data/modelData';
import { GalleryItem } from '../types';

const GalleryCard: React.FC<{ item: GalleryItem; onClick: () => void }> = ({ item, onClick }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <motion.img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      
      {/* Content Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.h3 
          className="text-white font-playfair font-bold text-xl mb-2"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {item.title}
        </motion.h3>
        <motion.p 
          className="text-gray-300 text-sm mb-3"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {item.description}
        </motion.p>
        <motion.div 
          className="flex items-center justify-between"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex items-center text-white">
            <Heart className="h-4 w-4 mr-1 text-accent-400" />
            <span className="text-sm">{item.likes.toLocaleString()}</span>
          </div>
          {item.isPremium && (
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <Lock className="h-3 w-3" />
              Premium
            </div>
          )}
        </motion.div>
      </motion.div>
      
      {/* Premium lock overlay */}
      {item.isPremium && (
        <motion.div 
          className="absolute inset-0 bg-secondary-900/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div 
            className="bg-white/20 backdrop-blur-sm rounded-full p-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Lock className="h-6 w-6 text-white" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', label: 'All', icon: <Eye className="h-4 w-4" /> },
    { id: 'photos', label: 'Photos', icon: <Camera className="h-4 w-4" /> },
    { id: 'videos', label: 'Videos', icon: <Video className="h-4 w-4" /> },
    { id: 'live', label: 'Live', icon: <Tv className="h-4 w-4" /> },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section className="relative py-32 overflow-hidden bg-secondary-900" id="gallery">
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
            <ImageIcon className="h-8 w-8 text-accent-400" />
            <Camera className="h-12 w-12 text-accent-400" />
            <ImageIcon className="h-8 w-8 text-accent-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-accent-400 to-purple-400 bg-clip-text text-transparent">
              Model
            </span>
            <span className="text-white"> Gallery</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Browse through my exclusive collection of photos and videos.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent-400 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-accent-400/20'
              }`}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentPage(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-secondary-900/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="relative max-w-4xl w-full bg-secondary-800 rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedItem(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              
              <div className="flex flex-col md:flex-row">
                <motion.div 
                  className="md:w-7/12"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {selectedItem.isPremium ? (
                    <div className="aspect-[3/4] bg-secondary-900 flex items-center justify-center">
                      <div className="text-center p-8">
                        <Lock className="h-16 w-16 text-accent-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-playfair font-bold text-white mb-2">Premium Content</h3>
                        <p className="text-gray-300 mb-6">This content is exclusive to premium subscribers.</p>
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
                    </div>
                  ) : (
                  <motion.img 
                    src={selectedItem.imageUrl} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover"
                    animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  )}
                </motion.div>
                
                <motion.div 
                  className="md:w-5/12 p-6"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-playfair font-bold text-white mb-2">{selectedItem.title}</h3>
                  <p className="text-gray-300 mb-4">{selectedItem.description}</p>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex items-center text-gray-400">
                      <Heart className="h-5 w-5 mr-1 text-accent-400" />
                      <span>{selectedItem.likes.toLocaleString()} likes</span>
                    </div>
                    {selectedItem.isPremium && (
                      <div className="ml-auto bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                        <Lock className="h-4 w-4" />
                        Premium
                      </div>
                    )}
                  </div>
                  
                  {!selectedItem.isPremium && (
                    <motion.button 
                      className="w-full border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2 py-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>Download</span>
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;