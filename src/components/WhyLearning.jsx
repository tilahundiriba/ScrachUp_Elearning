import React from "react";
import { benefits } from "../data/data";
import { RiCheckboxCircleLine } from "@remixicon/react";
import { motion } from "motion/react"
import * as variants from "../motion/animation"
const WhyLearning = () => {
  return (
    <section className="py-20">
      <motion.div variants={variants.staggerContainer}
             initial="hidden" 
             whileInView={"show"} 
             viewport={{once:true}} className="container grid gap-16 lg:grid-cols-[0.7fr_1fr] lg:items-center">
        {/* Image */}
        <motion.div variants={variants.fadeInUp} className="relative mx-auto p-5 order-1 lg:order-first">
          <div
            className="max-w-[360px] w-full shadow-img mx-auto 
          rounded-t-full bg-lime-600 
          flex items-center justify-center 
          overflow-hidden pt-9 px-2.5"
          >
            <img
              src="/images/smileface-remove.png"
              alt="hero image"
              width={440}
              height={592}
            />
          </div>
          {/* Decorations */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10 absolute top-20 right-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </motion.div>
        {/* Content  */}
        <div className="">
          <motion.h2 variants={variants.fadeInUp} className="section-title mb-2">
          
            Why Learn live with ScratchUp?
          </motion.h2>
          <motion.p variants={variants.fadeInUp} className="text">
           
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            illum beatae animi, consequatur nobis cupiditate delectus iure a
            porro repellat iusto veritatis tempora vel nihil dolor sed ea,
            nostrum assumenda.
          </motion.p>
          {/* List */}
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <motion.li variants={variants.fadeInUp} className="flex items-start gap-3" key={benefit}>
                <span className="text-lime-600 shrink-0">
                  <RiCheckboxCircleLine />
                </span>
                <p className="text font-medium">{benefit}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyLearning;
