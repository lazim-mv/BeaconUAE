import React, { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";
import Image from "next/image";

function Brands({ imageSources, initialAnimateValue, hoverDuration, duration }) {
  const [isHovered, setIsHovered] = useState(false);
  const [animateValue, setAnimateValue] = useState(initialAnimateValue);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Set the animate value based on screen width
      const newAnimateValue = screenWidth < 600 ? initialAnimateValue : "-200%";

      // Update the animate value only if it has changed
      if (newAnimateValue !== animateValue) {
        setAnimateValue(newAnimateValue);
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set the initial animate value
    handleResize();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [animateValue, initialAnimateValue]);

  useEffect(() => {
    const handleHoverStart = () => {
      setIsHovered(true);
      controls.start({
        x: animateValue,
        transition: {
          repeat: Infinity,
          duration: hoverDuration, // Adjust the duration when hovering
          ease: "linear",
        },
      });
    };

    const handleHoverEnd = () => {
      setIsHovered(false);
      controls.start({
        x: animateValue,
        transition: {
          repeat: Infinity,
          duration: duration, // Original duration
          ease: "linear",
        },
      });
    };

    const restartAnimation = () => {
      setTimeout(() => {
        controls.start({
          x: animateValue,
          transition: {
            repeat: Infinity,
            duration: duration,
            ease: "linear",
          },
        });
      }, duration * 1000); // Convert duration from seconds to milliseconds
    };

    handleHoverEnd();
    restartAnimation();

    return () => {
      clearTimeout();
    };
  }, [controls, animateValue, duration, hoverDuration]);

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      x: animateValue,
      transition: {
        repeat: Infinity,
        duration: hoverDuration, // Adjust the duration when hovering
        ease: "linear",
      },
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="scrolling-logos"
        initial={{ x: "0%" }}
        animate={controls}
        onMouseEnter={handleHoverStart}
      >
        {imageSources.map((src, index) => (
          <Image
            key={index}
            quality={100}
            priority={true}
            unoptimized
            src={src}
            width={100}
            height={0}
            layout="responsive"
            alt="ImageClients"
            className="logoClients"
          />
        ))}
      </m.div>
    </LazyMotion>
  );
}

export default Brands;
