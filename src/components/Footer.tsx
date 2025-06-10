import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  ArrowUp, 
  Lock,
  Star,
  ChevronRight,
  Gift,
  Camera,
  MessageCircle,
  Crown,
  Sparkles,
  Users
} from 'lucide-react';
import type { PlatformData } from '../types';

interface IconComponent {
  className?: string;
}

interface SocialLink {
  icon: React.ComponentType<IconComponent>;
  label: string;
  url: string;
  color: string;
}

interface QuickLink {
  label: string;
  icon: React.ComponentType<IconComponent>;
  description: string;
  color: string;
}

interface Platform {
  name: string;
  icon: React.ComponentType<IconComponent>;
  color: string;
  followers: string;
  price: string;
}

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks: SocialLink[] = [
    { 
      icon: Instagram, 
      label: 'Instagram',
      url: '#',
      color: 'from-pink-500 to-purple-500'
    },
    { 
      icon: Twitter, 
      label: 'Twitter',
      url: '#',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      icon: Youtube, 
      label: 'YouTube',
      url: '#',
      color: 'from-red-500 to-red-700'
    }
  ];

  const quickLinks: QuickLink[] = [
    { 
      label: 'Premium Content',
      icon: Crown,
      description: 'Exclusive photos and videos',
      color: 'from-pink-600 to-purple-600'
    },
    { 
      label: 'Brand Messages',
      icon: MessageCircle,
      description: 'Direct chat access',
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      label: 'Colab Content',
      icon: Camera,
      description: 'Personalized requests',
      color: 'from-green-500 to-teal-600'
    },
    { 
      label: 'VIP Benefits',
      icon: Star,
      description: 'Exclusive perks and rewards',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const platforms: Platform[] = [
    {
      name: 'Instagram',
      icon: Users,
      color: 'from-blue-500 to-blue-700',
      followers: '100K+',
      price: ' '
    },
    {
      name: 'Twitter',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      followers: '50K+',
      price: ' '
    },
    {
      name: 'ManyVids',
      icon: Camera,
      color: 'from-pink-500 to-red-500',
      followers: '75K+',
      price: 'From $19.99'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-secondary-900 via-secondary-800 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <Heart className="h-10 w-10 text-accent-400" />
                <motion.div
                  className="absolute inset-0 bg-accent-400 rounded-full opacity-30"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <h3 className="ml-3 text-3xl font-playfair font-bold">
                Camelia<span className="text-accent-400">Rose</span>
              </h3>
            </motion.div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Experience premium intimate content and exclusive personalized experiences. 
              Join me on your favorite platform for special perks and private access.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ icon: Icon, label, color }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="group relative p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-accent-400/50 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`}
                  />
                  <Icon className="h-6 w-6 text-white group-hover:text-accent-400 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-bold mb-6 text-white flex items-center">
              <Gift className="h-5 w-5 mr-2 text-accent-400" />
              Premium Features
            </h4>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="group block p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-accent-400/50 transition-all duration-300"
                  whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                  />
                  <div className="flex items-center mb-2">
                    <link.icon className="h-5 w-5 text-accent-400 mr-2" />
                    <span className="text-white font-medium">{link.label}</span>
                  </div>
                  <p className="text-sm text-gray-300">{link.description}</p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-xl font-playfair font-bold mb-6 text-white flex items-center">
              <Crown className="h-5 w-5 mr-2 text-accent-400" />
              Find Me On
            </h4>
            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="group block p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-accent-400/50 transition-all duration-300"
                  whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                  />
                  <div className="flex items-center justify-between">
                  <div className="flex items-center">
                      <platform.icon className="h-5 w-5 text-accent-400 mr-2" />
                      <span className="text-white font-medium">{platform.name}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-accent-400 transition-colors duration-300" />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-gray-300">{platform.followers} followers</span>
                    <span className="text-accent-400">{platform.price}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-accent-400 to-purple-500 rounded-full shadow-lg backdrop-blur-sm border border-white/20"
        onClick={scrollToTop}
        whileHover={{ 
          scale: 1.1, 
          boxShadow: '0 0 30px rgba(255, 105, 180, 0.6)',
          rotate: 360 
        }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </motion.button>

      {/* Bottom Copyright Bar */}
      <div className="relative z-10 border-t border-accent-400/20 bg-black/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CameliaRose. All rights reserved.
              </p>
            
            <div className="flex items-center space-x-6">
              <motion.a 
                href="#privacy" 
                className="text-gray-400 hover:text-accent-400 text-sm transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#terms" 
                className="text-gray-400 hover:text-accent-400 text-sm transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#contact" 
                className="flex items-center text-gray-400 hover:text-accent-400 text-sm transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-4 w-4 mr-1" />
                Contact
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;