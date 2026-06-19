import React from "react";
import Marquee from "react-fast-marquee";
import { brandBannerImgs } from "../data/data";
import { motion } from "motion/react"
import * as variants from "../motion/animation"
const Banner = () => {
  return (
    <motion.section variants={variants.staggerContainer}
           initial="hidden" 
           whileInView={"show"} 
           viewport={{once:true}} className="bg-neutral-900 py-2 -skew-y-3">
      <motion.div variants={variants.fadeIn} className="">
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
      </motion.div>
    </motion.section>
  );
};

export default Banner;
