import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Check,
  Star,
  Heart,
  Crown,
  Sparkles,
  Lock,
  Camera,
  Shield,
  Gem,
  Rocket,
  Award
} from 'lucide-react';
import { tierOptions } from '../data/modelData';
import type { TierOption } from '../types';

interface PricingCardProps {
  tier: TierOption;
  index: number;
}

const PricingCard = ({ tier, index }: PricingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [sparkleCount, setSparkleCount] = useState(0);

  const generateSparkles = () => {
    setSparkleCount((prev: number) => prev + 6);
    setTimeout(() => setSparkleCount((prev: number) => Math.max(0, prev - 6)), 2000);
  };

  const handleCardClick = () => {
    generateSparkles();
    window.open('#', '_blank'); // Replace with actual platform URL
  };

  const getTierIcon = () => {
    switch (tier.name) {
      case 'OnlyFans': return <Star className="h-8 w-8" />;
      case 'Fansly': return <Heart className="h-8 w-8" />;
      case 'ManyVids': return <Camera className="h-8 w-8" />;
      default: return <Star className="h-8 w-8" />;
    }
  };

  const getTierColor = () => {
    switch (tier.name) {
      case 'OnlyFans': return '#00AFF0';
      case 'Fansly': return '#9333EA';
      case 'ManyVids': return '#FF69B4';
      default: return '#FF69B4';
    }
  };

  const tierColor = getTierColor();

  return (
    <motion.div
      className={`group relative ${tier.isPopular ? 'md:-translate-y-8' : ''}`}
      initial={{ opacity: 0, y: 100, rotateX: 45, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      transition={{ 
        duration: 1,
        delay: index * 0.2,
        type: "spring",
        stiffness: 80
      }}
      whileHover={{ 
        y: -20, 
        scale: 1.05,
        rotateY: tier.isPopular ? 0 : 5,
        transition: { duration: 0.4 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Floating Sparkles */}
      <AnimatePresence>
        {Array.from({ length: sparkleCount }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}-${Date.now()}`}
            className="absolute pointer-events-none z-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 1, rotate: 0 }}
            animate={{ 
              scale: [0, 1.2, 0], 
              opacity: [1, 1, 0],
              rotate: [0, 360],
              y: -100
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Sparkles className="h-5 w-5 text-yellow-400" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Card Container */}
      <motion.div
        className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden h-full"
        style={{
          boxShadow: `0 0 40px ${tierColor}30, inset 0 2px 0 rgba(255,255,255,0.1)`,
        }}
        whileHover={{
          boxShadow: `0 0 60px ${tierColor}60, inset 0 2px 0 rgba(255,255,255,0.2)`,
          borderColor: `${tierColor}50`,
        }}
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, ${tierColor}20 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, ${tierColor}20 0%, transparent 50%),
              linear-gradient(45deg, transparent 30%, ${tierColor}10 50%, transparent 70%)
            `,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Most Popular Badge */}
      {tier.isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
        >
          <motion.div
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center shadow-lg"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              boxShadow: [
                  '0 0 20px rgba(236, 72, 153, 0.5)',
                  '0 0 40px rgba(236, 72, 153, 0.8)',
                  '0 0 20px rgba(236, 72, 153, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: '200% 200%' }}
          >
            <motion.div
              animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Crown className="h-4 w-4 mr-2" />
            </motion.div>
              Most Popular
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
            >
              <Sparkles className="h-4 w-4 ml-2" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}

        {/* Card Content */}
        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: tierColor }}
                  animate={{ 
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                  {getTierIcon()}
              </motion.div>
              <h3 className="text-2xl font-bold ml-3 text-white">{tier.name}</h3>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-400 line-through mr-2">
                ${(tier.price * 1.5).toFixed(2)}
              </span>
              <span className="text-2xl font-bold text-pink-500">
                  ${tier.price}
              </span>
              <span className="text-sm text-gray-400 ml-1">/mo</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6">{tier.description}</p>

          {/* Features */}
          <div className="space-y-4">
            {tier.features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + i * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <motion.div
                  className="flex-shrink-0 w-5 h-5 mr-3"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
              <motion.div
                    className="w-5 h-5 rounded-full bg-pink-500/20 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  >
                    <Check className="h-3 w-3 text-pink-500" />
                </motion.div>
                </motion.div>
                {feature}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="w-full mt-8 py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg flex items-center justify-center group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="mr-2">Subscribe Now</span>
            <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PricingSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-24 bg-black overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Subscribe to your preferred platform for exclusive content and personalized experiences
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tierOptions.map((tier, index) => (
            <PricingCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Shield, label: 'Secure Payments', color: '#EC4899' },
            { icon: Lock, label: 'Private Access', color: '#9333EA' },
            { icon: Award, label: 'Premium Quality', color: '#EC4899' },
            { icon: Gem, label: 'Exclusive Content', color: '#9333EA' }
          ].map(({ icon: Icon, label, color }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: `${color}20` }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="h-8 w-8" style={{ color }} />
        </motion.div>
              <span className="text-gray-300 font-medium">{label}</span>
        </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;