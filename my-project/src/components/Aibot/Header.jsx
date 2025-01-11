import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Header = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Handle the button click to scroll to ChatBooth
  const handleButtonClick = () => {
    const chatBoothElement = document.getElementById('chatbooth-section');
    if (chatBoothElement) {
      chatBoothElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 relative bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2024/03/11/19/15/ai-generated-8627457_1280.png')`,
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 50, 0.7)',
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="relative min-h-[80vh] flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/80" />
              <div className="container mx-auto px-6 relative z-10">
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={textVariants}
                  className="max-w-2xl text-white backdrop-blur-sm bg-navy-900/20 p-8 rounded-2xl border border-white/10"
                >
                  <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full">
                    <span className="text-blue-400 font-medium">AI-Powered Healthcare</span>
                  </div>

                  <motion.h1
                    variants={textVariants}
                    className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                  >
                    Meet Jivika: The AI doc that's always on call!
                  </motion.h1>

                  <motion.div variants={textVariants} className="space-y-4">
                    <p className="text-base leading-relaxed text-gray-300">
                      Jivaka Komarabhacca was a renowned ancient Indian physician during the time of Buddha, celebrated for his exceptional skills in medicine and surgery.
                    </p>

                    <p className="text-base leading-relaxed text-gray-300">
                      Jivaka is mentioned in Buddhist texts as the personal physician to Buddha and the Sangha (the Buddhist monastic community). He was also a royal physician serving King Bimbisara and King Ajatashatru of Magadha.
                    </p>

                    <p className="text-base leading-relaxed text-gray-300">
                      Known for his compassion and dedication, Jivaka treated patients without expecting material rewards, embodying selfless service.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={buttonVariants}
                    className="mt-8 flex flex-wrap gap-4"
                  >
                    {/* <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                      Learn More
                    </button> */}
                    <button
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                      onClick={handleButtonClick}
                    >
                      Say Hi to Jivika!
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;