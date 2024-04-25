"use client";

import React, { useState } from "react";
import styles from "./container8.module.css";
import { container8 } from "@/app/Contents/Data";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import Image from "next/image";
import ArrowButtons from "../ArrowButtons";
import { useWindowSize } from "@/app/utils.js/windowSize";

const Container8 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const { windowSize, isSmallScreen } = useWindowSize();

  const cardData = container8.cardData;
  const totalData = container8.cardData.length;
  const clicks = isSmallScreen ? totalData - 1 : totalData - 6;
  const dynamicValue = isSmallScreen ? 62 : 10.079365079;

  const nextImage = () => {
    if (currentIndex < clicks) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      console.log("clicked1");
      console.log(currentIndex);
    } else {
      setCurrentIndex(0);
      console.log("clicked2");
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(clicks);
    }
  };

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  console.log(activeIndex);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container8.sectionName} />
        <SectionTitle
          sectionText={container8.sectionTitle}
          padding="0.6613756613756614vw 0 4.62962962962963vw 0"
        />
      </div>

      <div className={styles.cards}>
        {cardData.map((data, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              activeIndex === index ? styles.hoverCard : ""
            }`}
            onClick={() => handleCardClick(index)}
            style={{
              transform: `translateX(-${currentIndex * dynamicValue}vw)`,
              transition: `transform 0.8s ease, ${
                !isSmallScreen ? "width" : "height"
              } 0.8s ease`,
            }}
          >
            <Image
              src={data.img}
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
              alt={index}
            />
            <div className={styles.cardContent}>
              <CardHeading
                sectionText={data.cardHeading}
                padding="0 0 0.992063492063492vw 0"
                color="#fff"
              />
              <SectionDescription
                sectionText={data.description}
                color="#58595B"
              />
            </div>
          </div>
        ))}
      </div>
      {!isSmallScreen && (
        <ArrowButtons
          // currentIndex={currentIndex}
          prevImage={prevImage}
          nextImage={nextImage}
          margin="4.62962962962963vw 0 0 0"
        />
      )}
    </div>
  );
};

export default Container8;
