import Image from "next/image";
import React from "react";

function Jurisdiction() {
  const pageData = [
    {
      img: "/jurisdiction/2.svg",
      heading: "Mainland Company",
      description:
        "Enjoy your freedom to establish and conduct business anywhere in the UAE with a broad scope of business and trade activities both within and outside the UAE.",
    },
    {
      img: "/jurisdiction/1.svg",
      heading: "Free Zone Company",
      description:
        "Unveil the ideal jurisdiction for your business across 50 free zones of UAE with stunning low tax rates, and full foreign ownership, to explore the business ecosystem.",
    },
    {
      img: "/jurisdiction/3.svg",
      heading: "Offshore company",
      description:
        "Trigger your business even without a physical presence in the UAE. Enjoy convenient access to all business services including consultancy, legal support, and more.",
    },
  ];

  return (
    <div className="jurisdictionContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">Jurisdiction</h6>
        <h2 className="businessDesc">Boundless Growth Wherever you Thrive</h2>
        <h2 className="mBusinessDesc">
          Boundless Growth Wherever <br /> you Thrive
        </h2>
      </div>

      <div className="juriMainCardContainer">
        {pageData.map((data, index) => (
          <div className="juriCardContainer">
            <div>
              <Image
                src={data.img}
                width={100}
                height={100}
                alt={`juri ${index}`}
                layout="responsive"
              />
            </div>
            <div className="juriContent">
              <h1 style={{ color: "#fff" }} className="servicesHeading">
                {data.heading}
              </h1>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jurisdiction;
