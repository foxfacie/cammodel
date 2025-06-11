import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../data/modelData';
import { Star, Heart, Quote, Crown, Sparkles, MessageCircle, Gift, Flame, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCard: React.FC<{ testimonial: any; isActive: boolean; onClick: () => void }> = ({ testimonial, isActive, onClick }) => {
  return (
    <motion.div
      className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
        isActive ? 'bg-gradient-to-br from-accent-400/20 to-purple-600/20 border border-accent-400/30' : 'bg-white/5 border border-white/10'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -5 }}
      layout
    >
      <motion.div 
        className="absolute -inset-[1px] bg-gradient-to-r from-pink-600/50 to-purple-600/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity"
        animate={isActive ? {
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        } : {}}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full blur-lg"
              animate={isActive ? {
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className="w-12 h-12 rounded-full object-cover border-2 border-accent-400/50"
            />
          </div>
          <div>
            <h4 className="font-medium text-white">{testimonial.name}</h4>
            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-accent-400 fill-accent-400" />
              ))}
            </div>
          </div>
          {isActive && (
            <motion.div
              className="absolute -top-3 -right-3 bg-accent-400 rounded-full p-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Crown className="h-4 w-4 text-white" />
            </motion.div>
          )}
        </div>
        <p className="text-gray-300 leading-relaxed">{testimonial.comment}</p>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section 
      className="relative py-32 overflow-hidden bg-secondary-900"
      id="testimonials"
      ref={ref}
    >
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
        >
          <motion.div
            className="inline-flex items-center justify-center gap-4 mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="h-8 w-8 text-accent-400" />
              <Heart className="h-12 w-12 text-accent-400" fill="currentColor" />
            <Sparkles className="h-8 w-8 text-accent-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-accent-400 to-purple-400 bg-clip-text text-transparent">
              Love Letters
            </span>
            <span className="text-white"> from Admirers</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Real stories from real fans who've experienced the magic of premium intimacy.
          </p>
                </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === activeIndex}
              onClick={() => {
                setActiveIndex(index);
                setAutoplay(false);
              }}
                          />
                      ))}
                    </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4">
          <motion.button
            className="p-2 rounded-full bg-white/10 hover:bg-accent-400/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
              setAutoplay(false);
            }}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </motion.button>

          <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-accent-400' : 'bg-white/20'
                    }`}
                    whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                  />
                ))}
            </div>

          <motion.button
            className="p-2 rounded-full bg-white/10 hover:bg-accent-400/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setActiveIndex((prev) => (prev + 1) % testimonials.length);
              setAutoplay(false);
            }}
          >
            <ChevronRight className="h-6 w-6 text-white" />
                  </motion.button>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative p-8 rounded-2xl overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-400/20 via-purple-600/20 to-accent-400/20"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Flame className="h-8 w-8 text-orange-400" />
              <h3 className="text-2xl font-playfair font-bold text-white">
                  Join Our Premium Community
              </h3>
                <Flame className="h-8 w-8 text-orange-400" />
            </div>
            
              <p className="text-gray-300 text-center mb-8">
                Experience the same intimate connection they rave about. 
                <span className="text-accent-400"> Your fantasy awaits.</span>
            </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    <Gift className="h-5 w-5" />
                    <span>Get Access</span>
                  </span>
              </motion.button>

              <motion.button
                  className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                  <MessageCircle className="h-5 w-5" />
                  <span>Start Chat</span>
              </motion.button>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;