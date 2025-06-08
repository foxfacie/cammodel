import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="relative w-8 h-8"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-pink-600 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
          <svg 
          viewBox="0 0 40 40"
          className="relative z-10 w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#FF1493"/>
          <path
            d="M20 10 C20 10, 30 15, 30 20 C30 25, 20 30, 20 30 C20 30, 10 25, 10 20 C10 15, 20 10, 20 10"
            fill="white"
            opacity="0.9"
            />
          </svg>
        </motion.div>
      <motion.div
        className="text-xl font-bold"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: 'linear-gradient(90deg, #FF1493, #FF69B4, #FF1493)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Camelia<span className="text-pink-400">Rose</span>
      </motion.div>
    </motion.div>
  );
};

export default Logo; 