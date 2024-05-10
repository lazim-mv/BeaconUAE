"use client";
import Image from "next/image";
import { useState } from "react";

const WhatsAppChat = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const offices = [
    {
      img: "/office.png",
      name: "",
      number: "971568352250",
      location: "Dubai",
    },
    // Add more offices as needed
  ];

  const handleChatIconClick = () => {
    setIsCardVisible(!isCardVisible);
  };

  const handleOfficeClick = (number) => {
    window.open(`https://wa.me/${number}`, "_blank");
    setIsCardVisible(false);
  };

  return (
    <div>
      <div
        className={`chat-icon ${isCardVisible ? "active" : ""}`}
        onClick={handleChatIconClick}
      >
        <div className="blueborder">
          {
            isCardVisible ? (
              <Image
                src="/close.svg"
                width={70}
                height={70}
                alt="ImageService"
                quality={100}
                priority={true}
                unoptimized
              />
            ) : (
              <Image
                src="/whatsapp.svg"
                width={70}
                height={70}
                alt="ImageService"
                quality={100}
                priority={true}
                unoptimized
              />
            )
          }
        </div>
      </div>
      <div className="whatsapp-chat">
        <div
          className="office-card"
          style={{
            maxHeight: isCardVisible ? "100vh" : "0",
            transition: "max-height 0.4s ease",
          }}
        >
          {isCardVisible && (
            <div className="topCard">
              <button
                className="closeButton"
                onClick={() => setIsCardVisible(false)}
              >
                &times;
              </button>
              <h3>Hello...</h3>
              <p>
                Chat with us! Simply choose an office contact from the list
                below.
              </p>
            </div>
          )}
          {isCardVisible && (
            <div className="officeCards">
              {offices.map((office, index) => (
                <div
                  onClick={() => handleOfficeClick(office.number)}
                  className="officeCard"
                  key={index}
                >
                  <Image
                    src={office.img}
                    width={70}
                    height={70}
                    alt="ImageService"
                    quality={100}
                    priority={true}
                    unoptimized
                  />
                  <p>{office.name}</p>
                  <p>{office.location}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;
