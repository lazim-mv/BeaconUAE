"use client";
import groovyWalkAnimation from "../../../public/circleGlobal.json";

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const LoadingCircle = ({onLoadedImages}) => {
  

  const DesktopAnimationStyle = {
    width: "50px", // Adjust the width as needed
    height: "50px",
  };

  const MobileAnimationStyle ={
    width: "25px", // Adjust the width as needed
    height: "25px",
  }

  return (
    <>
    <div className='DesktopLottieContainer'>
      <Lottie
      onLoadedImages={onLoadedImages}
        animationData={groovyWalkAnimation}
        loop={true}
        style={DesktopAnimationStyle}
      />
    </div>
    <div className='MobileLottieContainer'>
      <Lottie
        onLoadedImages={onLoadedImages}
        animationData={groovyWalkAnimation}
        loop={true}
        style={MobileAnimationStyle}
      />
    </div>
    </>
  );
};

export default LoadingCircle;
