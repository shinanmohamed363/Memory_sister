import React, { useState, useEffect } from 'react';

const ScrollProgress = ({ user }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!user) return null;

  const gradientClass = user === 'nuha' ? 'nuha-gradient' : 'tharu-gradient';

  return (
    <div className={`scroll-progress ${gradientClass}`} style={{ width: `${progress}%` }} />
  );
};

export default ScrollProgress;
