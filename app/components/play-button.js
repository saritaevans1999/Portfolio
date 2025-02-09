import { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieWithDelay = ({ onClick }) => {
  const [dotLottie, setDotLottie] = useState(null);
  const delay = 2000;

  useEffect(() => {
    const handleComplete = () => {
      if (dotLottie) {
        dotLottie.stop();
        setTimeout(() => {
          dotLottie.play();
        }, delay);
      }
    };

    if (dotLottie) {
      dotLottie.addEventListener('complete', handleComplete);
    }

    return () => {
      if (dotLottie) {
        dotLottie.removeEventListener('complete', handleComplete);
      }
    };
  }, [dotLottie]);

  return (
    <DotLottieReact
      src="/play-icon.lottie"
      autoplay
      className="absolute w-[200px] lg:w-[300px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer"
      dotLottieRefCallback={(dotLottie) => {
        setDotLottie(dotLottie);
      }}
      onClick={onClick}
    />
  );
};

export default LottieWithDelay;
