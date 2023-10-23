"use client";
import React, { useState } from "react";
import styles from "../../Styles/contact.module.css";
import Header from "@/app/components/Header";
import MobileHeader from "@/app/components/MobileHeader";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import emailjs from "@emailjs/browser";
import emailjsConfig from "../../../../emailjs.config";

function Contact() {
  const [showUAECard, setShowUAECard] = useState(false);

  const toggleUAECard = (buttonName) => {
    if (
      (buttonName === "uae" && !showUAECard) ||
      (buttonName === "ksa" && showUAECard)
    ) {
      // Only toggle the card if the clicked button's state is different
      setShowUAECard(!showUAECard);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        e.target,
        emailjsConfig.userId
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        // Optionally, you can reset the form fields here
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
      });
  };

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.contactUsContainer}>
        <div className={styles.background}></div>

        <h2 className="businessDesc">Get In Touch With Us!</h2>
        <h2 className={`${styles.mBusinessDesc1} mBusinessDesc`}>
          Get In Touch With Us!
        </h2>

        <div className={styles.container2}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Full name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John David"
              />
            </div>
            <div>
              <label htmlFor="email">Your email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@yourmail.com"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="your number here"
              />
            </div>
            <div>
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help"
              />
            </div>
            <div className={styles.textBox}>
              <label htmlFor="message">How May We Assist You?</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className={styles.formSubmit}>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>

        <div className={styles.container3}>
          <h2 className="businessDesc">Get In Touch With Us!</h2>
          <h2 className={`${styles.mBusinessDesc1} mBusinessDesc`}>
            Get In Touch With Us!
          </h2>
          <div className={styles.container3Address}>
            <div
              className={`${styles.footerContactImgContainer} footerContactImgContainer`}
            >
              <div className="footerContactDetails">
                <Image
                  quality={100}
                  priority={true}
                  unoptimized
                  src="/NewSvgs/SVG3/hh/Icon.svg"
                  width={46}
                  height={46}
                  alt="ImageFooter2"
                />
                <div
                  className={`${styles.contactPageTextDetails} footerContactTextDetails`}
                  style={{ whiteSpace: "nowrap" }}
                >
                  <h1>Call us on:</h1>
                  <a href="tel:971568352250">
                    <p>+971 568 352 250</p>
                  </a>
                </div>
              </div>
              <div
                className={`${styles.contactPageContactDetails} footerContactDetails`}
              >
                <Image
                  quality={100}
                  priority={true}
                  unoptimized
                  src="/NewSvgs/SVG3/hh/Icon-1.svg"
                  width={46}
                  height={46}
                  alt="ImageFooter2"
                />
                <div
                  className={`${styles.contactPageTextDetails} footerContactTextDetails footerContactTextDetailsEmail`}
                >
                  <h1>Email us:</h1>
                  <a
                    href="mailto:admin@bmcglobal.co"
                    style={{ textTransform: "none" }}
                  >
                    admin@bmcglobal.co
                  </a>
                </div>
              </div>

              <div className="footerContactDetails">
                <Image
                  quality={100}
                  priority={true}
                  unoptimized
                  src="/NewSvgs/SVG3/hh/Icon-2.svg"
                  width={46}
                  height={46}
                  alt="ImageFooter2"
                />
                <a href="https://maps.app.goo.gl/UzvX5K7o9c3Cepmx9">
                  <div
                    className={`${styles.contactPageTextDetails} footerContactTextDetails `}
                  >
                    <h1>Office:</h1>
                    <p className="dAddress">
                      Office #39, 7th Floor, Dubai National Insurance
                      <br /> Building, Port Saeed Deira, Dubai, UAE
                    </p>
                    <p className="mAddress">
                      Office #39, 7th Floor, Dubai National Insurance Building,
                      Port Saeed Deira, Dubai, UAE
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.contactMapImg}>
              <Image
                quality={100}
                priority={true}
                unoptimized
                src="/NewSvgs/SVG3/hh/map.svg"
                width={46}
                height={46}
                layout="responsive"
                alt="ImageFooter2"
              />
            </div>
          </div>
        </div>

        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact;
