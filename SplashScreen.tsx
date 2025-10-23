import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/signup');
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="mb-8"
      >
        <img
          src="https://c.animaapp.com/mh36bs1mvk1mPg/img/user_1.png"
          alt="undefined"
          width={200}
          height={200}
          className="w-48 h-48 object-contain"
          loading="eager"
        />
      </motion.div>

      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
        className="font-heading font-bold text-4xl text-foreground text-center"
      >
        Bienvenido...
      </motion.h1>
    </div>
  );
};

export default SplashScreen;


