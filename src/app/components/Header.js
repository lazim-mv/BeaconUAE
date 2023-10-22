"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
  const [isActive, setIsActive] = useState("Home");

  const menuList = [
    // "Our Presence ⮟"
    { text: "Home", href: "/" },
    // { text: "Our Presence", href: "/" },
    { text: "About Us", href: "/pages/About" },
    { text: "Services", href: "/pages/Services" },
    // { text: "Blogs", href: "/" },
    { text: "Contact Us", href: "/pages/Contact" },
  ];

  const handleClick = (text) => {
    setIsActive(text);
    localStorage.setItem("activeMenuItem", text);
  };

  useEffect(() => {
    const storedActiveMenuItem = localStorage.getItem("activeMenuItem");
    if (storedActiveMenuItem) {
      setIsActive(storedActiveMenuItem);
    }
  }, []);

  return (
    <>
      <div className="hContainer bg-white">
        <a href="/">
          <div className="logoContainer">
            <Image
              // src="/logo.svg"
              src="/NewSvgs/Logos/Beacon11.svg"
              width={180}
              height={60}
              alt="ImageHeader"
              // layout="responsive"
              quality={100}
              priority={true}
              unoptimized
            />
          </div>
        </a>
        <div className="hMenuContainer">
          <div className="hMenu">
            <ul className="hUlList">
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className={`huListTransitionWrapper ${
                    item.text === isActive ? "active" : ""
                  }`}
                  onClick={() => handleClick(item.text)}
                >
                  <a href={item.href}>
                    <div className="listHoverTop">{item.text}</div>
                    <div className="listHoverBottom">{item.text}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a href="tel:971 568 352 250">
          <div className="hButtonContainer headerContactButton">
            <div className="visibleWrapperContainer">
              <div className="topVisibleContainer btn">
                <Image
                  src="/telephone.svg"
                  width={18}
                  height={18}
                  alt="heroContact"
                />
               +971 568 352 250
              </div>
              <div className="bottomVisibleContainer btn">
                <Image
                  src="/telephone.svg"
                  width={18}
                  height={18}
                  alt="heroContact"
                />
               +971 568 352 250
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Header;
