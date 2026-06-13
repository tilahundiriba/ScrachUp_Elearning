import React from "react";
import Marquee from "react-fast-marquee";
import { brandBannerImgs } from "../data/data";

const Banner = () => {
  return (
    <section className="bg-neutral-900 py-2 -skew-y-3">
      <div className="">
        <marquee autoFill={true} pauseOnHover={true}>
          <div className="flex items-center gap-6">
            {brandBannerImgs.map((img, index) => (
              <div className="h-10" key={index}>
                <img
                  src={img}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </marquee>
      </div>
    </section>
  );
};

export default Banner;
