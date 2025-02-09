import { useEffect } from 'react';

const useHighlightText = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll('.highlight-text');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.5 }
    );

    textElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

export default useHighlightText;
