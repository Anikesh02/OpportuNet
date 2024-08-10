import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animation - 1723052021372.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <div className="w-full max-w-xl md:max-w-sm lg:max-w-3xl xl:max-w-3xl 2xl:max-w-3xl mx-auto">
  <Lottie options={defaultOptions} height="100%" width="100%"/>
</div>
};

export default LottieAnimation;
