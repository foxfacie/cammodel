import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles, Camera, Play, Lock } from 'lucide-react';
import Logo from './Logo';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary-900 py-20" id="hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [-10, 10, -10],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [10, -10, 10],
            y: [10, -10, 10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated Stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            <Star 
              className="h-2 w-2 text-yellow-400" 
              fill="currentColor"
            />
          </motion.div>
        ))}

        {/* Floating Hearts */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            <Heart 
              className="h-3 w-3 text-accent-400/30" 
              fill="currentColor"
            />
          </motion.div>
        ))}

        {/* Sparkle Effects */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            <Sparkles 
              className="h-4 w-4 text-yellow-400/30" 
            />
          </motion.div>
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Logo */}
        <motion.div 
            className="mb-8 flex justify-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Logo variant="large" />
          </motion.div>

          {/* Hero Text */}
            <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-accent-400 via-purple-400 to-accent-400 bg-clip-text text-transparent">
              Experience the Magic
            </span>
            <br />
            <span className="text-white">of Premium Intimacy</span>
            </motion.h1>
            
            <motion.p 
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join me on an intimate journey of passion, beauty, and exclusive content crafted just for you.
            </motion.p>
            
          {/* CTA Buttons */}
            <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Premium Button */}
              <motion.button 
              className="relative px-8 py-4 overflow-hidden group"
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
              <span className="relative flex items-center justify-center gap-2 text-white font-medium text-lg">
                <Lock className="h-5 w-5" />
                <span>Get Premium Access</span>
              </span>
              </motion.button>
              
            {/* Watch Preview Button */}
              <motion.button 
              className="px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Play className="h-5 w-5" />
              <span>Watch Preview</span>
              </motion.button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: <Heart className="h-6 w-6 text-accent-400" />, value: '15K+', label: 'Happy Fans' },
              { icon: <Camera className="h-6 w-6 text-accent-400" />, value: '500+', label: 'Premium Photos' },
              { icon: <Play className="h-6 w-6 text-accent-400" />, value: '200+', label: 'Exclusive Videos' },
              { icon: <Star className="h-6 w-6 text-accent-400" />, value: '4.9', label: 'Rating' },
            ].map((stat, index) => (
            <motion.div 
                key={index}
                className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
              <motion.div 
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;