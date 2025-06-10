import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { platformData } from '../data/modelData';
import { 
  ExternalLink, 
  Users, 
  Heart, 
  Eye, 
  Zap, 
  Crown, 
  Star, 
  Flame, 
  Camera, 
  Video, 
  MessageCircle, 
  Gift,
  Sparkles,
  Lock,
  Play,
  Wifi,
  Radio,
  Monitor,
  Headphones
} from 'lucide-react';
import { PlatformData } from '../types';

const PlatformCard: React.FC<{ platform: PlatformData; index: number }> = ({ platform, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [sparkleCount, setSparkleCount] = useState(0);
  const [viewerCount, setViewerCount] = useState(platform.followers + Math.floor(Math.random() * 100));

  useEffect(() => {
    if (platform.isLive) {
      const interval = setInterval(() => {
        setViewerCount(prev => prev + Math.floor(Math.random() * 10 - 5));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [platform.isLive]);

  const generateHearts = () => {
    setHeartCount(prev => prev + 3);
    setTimeout(() => setHeartCount(prev => Math.max(0, prev - 3)), 2000);
  };

  const generateSparkles = () => {
    setSparkleCount(prev => prev + 5);
    setTimeout(() => setSparkleCount(prev => Math.max(0, prev - 5)), 1500);
  };

  const handleCardClick = () => {
    generateHearts();
    generateSparkles();
  };

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -15, 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Floating Hearts */}
      <AnimatePresence>
        {Array.from({ length: heartCount }).map((_, i) => (
          <motion.div
            key={`heart-${i}-${Date.now()}`}
            className="absolute text-accent-400 text-xl pointer-events-none z-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, y: 0, opacity: 1 }}
            animate={{ 
              scale: [0, 1.2, 0], 
              y: -100, 
              opacity: [1, 1, 0],
              rotate: [0, 360]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            💕
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating Sparkles */}
      <AnimatePresence>
        {Array.from({ length: sparkleCount }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}-${Date.now()}`}
            className="absolute pointer-events-none z-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ 
              scale: [0, 1, 0], 
              opacity: [1, 1, 0],
              rotate: [0, 180]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Sparkles className="h-4 w-4 text-yellow-400" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${platform.color}40 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
        animate={isHovered ? {
          scale: [1, 1.1, 1],
        } : {}}
        transition={{ duration: 2, repeat: 1000 }}
      />

      {/* Main Card */}
      <motion.div
        className="relative bg-gradient-to-br from-secondary-800/90 via-secondary-700/80 to-secondary-900/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
        style={{
          boxShadow: `0 0 30px ${platform.color}30, inset 0 1px 0 rgba(255,255,255,0.1)`,
        }}
        whileHover={{
          boxShadow: `0 0 50px ${platform.color}60, inset 0 1px 0 rgba(255,255,255,0.2)`,
        }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, ${platform.color} 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${platform.color} 0%, transparent 50%)`,
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 8, repeat: 1000, ease: "linear" }}
          />
        </div>

        {/* Scanning Line Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
          animate={isHovered ? {
            x: ['-100%', '100%'],
          } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Top Color Bar with Animation */}
        <motion.div 
          className="h-1 relative overflow-hidden"
          style={{ backgroundColor: platform.color }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{ duration: 2, repeat: 1000, ease: "linear" }}
          />
        </motion.div>

        <div className="p-6 relative z-10">
          {/* Header with Live Status */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <motion.div
                className="relative mr-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: platform.color }}
                />
                {platform.isLive && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: platform.color }}
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: 1000 }}
                  />
                )}
              </motion.div>
              
              <motion.h3 
                className="text-xl font-playfair font-bold text-white group-hover:text-accent-400 transition-colors duration-300"
                animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                {platform.name}
              </motion.h3>
            </div>
            
            <AnimatePresence>
              {platform.isLive && (
                <motion.div
                  className="flex items-center space-x-2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <motion.div
                    className="bg-gradient-to-r from-red-500 to-accent-400 text-white text-xs px-3 py-1 rounded-full flex items-center font-bold"
                    animate={{ 
                      boxShadow: [
                        '0 0 10px rgba(255, 0, 0, 0.5)',
                        '0 0 20px rgba(255, 0, 0, 0.8)',
                        '0 0 10px rgba(255, 0, 0, 0.5)'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: 1000 }}
                  >
                    <Radio className="h-3 w-3 mr-1 animate-pulse" />
                    LIVE
                  </motion.div>
                  
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: 1000 }}
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    {viewerCount.toLocaleString()}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Stats with Animated Icons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ x: 5 }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <Users className="h-4 w-4 text-platinum-300" />
              </motion.div>
              <div>
                <motion.span 
                  className="text-white font-bold text-lg"
                  animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {(platform.followers / 1000).toFixed(1)}K
                </motion.span>
                <p className="text-xs text-platinum-400">Followers</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ x: 5 }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: 1000 }}
              >
                <Heart className="h-4 w-4 text-accent-400" fill="currentColor" />
              </motion.div>
              <div>
                <motion.span 
                  className="text-white font-bold text-lg"
                  animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {(platform.likes / 1000).toFixed(1)}K
                </motion.span>
                <p className="text-xs text-platinum-400">Likes</p>
              </div>
            </motion.div>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            {[
              { icon: Camera, label: "Photos" },
              { icon: Video, label: "Videos" },
              { icon: MessageCircle, label: "Chat" },
              { icon: Gift, label: "Tips" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center group/icon"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover/icon:bg-accent-400/20 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="h-4 w-4 text-platinum-300 group-hover/icon:text-accent-400 transition-colors duration-300" />
                </motion.div>
                <span className="text-xs text-platinum-400 mt-1 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href={platform.url}
            className="block w-full relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-full py-3 px-4 rounded-xl font-poppins font-bold text-center transition-all duration-300 relative z-10"
              style={{
                background: `linear-gradient(135deg, ${platform.color}20, ${platform.color}40)`,
                border: `1px solid ${platform.color}60`,
                color: 'white'
              }}
              whileHover={{
                background: `linear-gradient(135deg, ${platform.color}40, ${platform.color}60)`,
                boxShadow: `0 0 25px ${platform.color}60`,
              }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(45deg, transparent, ${platform.color}30, transparent)`,
                }}
                animate={isHovered ? {
                  x: ['-100%', '100%'],
                } : {}}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              
              <div className="flex items-center justify-center relative z-10">
                <span className="mr-2">Enter My World</span>
                <motion.div
                  animate={isHovered ? { x: [0, 5, 0] } : {}}
                  transition={{ duration: 0.5, repeat: 1000 }}
                >
                  <ExternalLink className="h-4 w-4" />
                </motion.div>
              </div>
            </motion.div>
          </motion.a>

          {/* Premium Badge */}
          <motion.div
            className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-accent-400 text-black text-xs px-2 py-1 rounded-full flex items-center font-bold"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Crown className="h-3 w-3 mr-1" />
            Exclusive
          </motion.div>
        </div>

        {/* Morphing Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `linear-gradient(45deg, ${platform.color}30, transparent, ${platform.color}30)`,
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 4, repeat: 1000, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

const PlatformSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section 
      className="relative py-20 bg-gradient-to-br from-secondary-900 via-black to-secondary-800 overflow-hidden" 
      id="platforms"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: 1000,
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div 
                key={i} 
                className="border-r border-accent-400"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: 1000, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>

        {/* Cursor Trail Effect */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 105, 180, 0.1) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: 1000 }}
        />

        {/* Scanning Lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-400/10 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: 1000, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Seductive Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: 1000, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-accent-400 mr-3" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: 1000 }}
            >
              <Heart className="h-10 w-10 text-accent-400" fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: 1000, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-accent-400 ml-3" />
            </motion.div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-accent-400 via-purple-400 to-accent-400 bg-clip-text text-transparent">
              Exclusive Watchful
            </span>
            <br />
            <motion.span
              animate={{ 
                filter: [
                  'drop-shadow(0 0 20px rgba(255, 105, 180, 0.5))',
                  'drop-shadow(0 0 40px rgba(255, 105, 180, 0.8))',
                  'drop-shadow(0 0 20px rgba(255, 105, 180, 0.5))'
                ]
              }}
              transition={{ duration: 2, repeat: 1000 }}
            >
              Platforms
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-platinum-200 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Step into my digital boudoir across multiple platforms. Each offers a unique window into my world of 
            <span className="text-accent-400 font-medium"> exclusive experiences </span> 
            designed with love.
          </motion.p>

          {/* Tech Stats Bar */}
          <motion.div
            className="flex justify-center items-center space-x-8 mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-full border border-accent-400/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Monitor, label: "6 Platforms", value: "Active" },
              { icon: Wifi, label: "Live Status", value: "Online" },
              { icon: Headphones, label: "24/7 Support", value: "Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: 1000, ease: "linear" }}
                >
                  <stat.icon className="h-4 w-4 text-accent-400" />
                </motion.div>
                <div className="text-left">
                  <div className="text-white font-medium">{stat.label}</div>
                  <div className="text-platinum-400 text-xs">{stat.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Platform Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {platformData.map((platform, index) => (
            <PlatformCard key={platform.id} platform={platform} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-accent-400/10 via-purple-500/10 to-accent-400/10 backdrop-blur-lg rounded-2xl border border-accent-400/30">
            <motion.div
              className="flex items-center justify-center mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: 1000 }}
            >
              <Flame className="h-8 w-8 text-orange-400 mr-2" />
              <h3 className="text-2xl font-playfair font-bold text-white">
                Ready for an Unforgettable Experience?
              </h3>
              <Flame className="h-8 w-8 text-orange-400 ml-2" />
            </motion.div>
            
            <p className="text-platinum-200 text-lg mb-8 leading-relaxed">
              Choose your preferred platform and dive into a world of exclusive content, personal interactions, and intimate moments. 
              <span className="text-accent-400 font-medium"> Your fantasy is just one click away.</span>
            </p>

            <motion.button
              className="bg-gradient-to-r from-accent-400 to-purple-500 hover:from-accent-500 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center mx-auto"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 30px rgba(255, 105, 180, 0.6)',
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255, 105, 180, 0.3)',
                  '0 0 40px rgba(255, 105, 180, 0.6)',
                  '0 0 20px rgba(255, 105, 180, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: 1000 }}
            >
              <Lock className="h-5 w-5 mr-2" />
              Unlock All Platforms
              <Star className="h-5 w-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSection;