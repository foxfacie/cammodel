import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, Star, Crown, Gift, Diamond, Clock, Users } from 'lucide-react';
import { platformData } from '../data/modelData';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 20, 0)', 'rgba(10, 10, 20, 0.95)']
  );

  const navItems = [
    { label: 'Home', icon: Heart },
    { label: 'Gallery', icon: Star },
    { label: 'Live Shows', icon: Clock },
    { label: 'Premium', icon: Crown },
    { label: 'Gifts', icon: Gift },
    { label: 'Community', icon: Users }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
        style={{ backgroundColor: headerBackground }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={`#${item.label.toLowerCase().replace(' ', '-')}`}
                    className="group relative flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId={`nav-bg-${index}`}
                    />
                    <Icon className="h-4 w-4 text-accent-400 group-hover:text-white transition-colors duration-300" />
                    <span className="relative z-10">{item.label}</span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                className="relative px-6 py-2 overflow-hidden group rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600/50 to-purple-600/50 blur-[6px] rounded-full" />
                <span className="relative flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full">
                  <Diamond className="h-4 w-4" />
                  <span>Go Premium</span>
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative z-50 text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>

          {/* Platform Status Bar */}
          <motion.div 
            className="hidden md:flex items-center justify-center py-2 space-x-6 border-t border-white/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {platformData.map((platform, index) => (
              <motion.a
                key={platform.id}
                href={platform.url}
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {platform.isLive && (
                  <motion.span 
                    className="h-2 w-2 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
                <span style={{ color: platform.color }}>{platform.name}</span>
                <span className="text-xs text-gray-500">
                  {(platform.followers / 1000).toFixed(1)}k
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={`#${item.label.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center space-x-3 text-2xl text-gray-300 hover:text-white transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.1, x: 10 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="h-6 w-6 text-accent-400" />
                    <span>{item.label}</span>
                  </motion.a>
                );
              })}
              <motion.button
                className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Go Premium
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;