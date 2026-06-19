import React, { useState } from "react";
import { courses } from "../data/data";
import { RiStarFill } from "@remixicon/react";
import Button from "./Button";
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Course = () => {
  const [activeTab, setActiveTab] = useState("All");
  const filteredCourses = courses.filter((course) => {
    if (activeTab === "All") return true;
    return course.category === activeTab;
  });
  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="container"
      >
        <div className="text-center space-y-2.5">
          <motion.h2 variants={variants.fadeInUp}
                 className="section-title">Explore Courses</motion.h2>
          <motion.p  variants={variants.fadeInUp} className="tex- max-2xl mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab culpa
            voluptatibus fuga veritatis voluptates, perferendis doloribus omnis
            id ea. Vitae, expedita! Blanditiis placeat totam nulla perspiciatis
            nobis accusantium fugiat est.
          </motion.p>
        </div>
        {/* Wrapper */}
        <div className="mt-7">
          {/* Tabs */}
          <motion.div  variants={variants.fadeInUp} className="flex flex-wrap justify-center gap-4">
            {["All", "Popular", "Recent", "Design", "Marketing", "Coding"].map(
              (tab) => (
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`shadow-util px-6 py-2.5
                 rounded-full font-medium hover:bg-neutral-100 
                 focus:bg-neutral-100! transition 
                 ${
                   activeTab === tab
                     ? "bg-lime-300 hover:bg-lime-300 focus:bg-lime-300!"
                     : "hover:bg-neutral-100 focus:bg-neutral-100!"
                 }`}
                  key={tab}
                >
                  {tab}
                </button>
              ),
            )}
          </motion.div>
          {/* Card Wrapper */}
          <motion.div  variants={variants.fadeInUp} className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              //Card
              <div
                className="bg-white rounded-xl border border-neutral-200 
              overflow-hidden hover:shadow-[3px_3p_-0px_0px_rgba(0,0,0,1)]
               hover:border-black focus:border-black focus:shadow-[3px_3p_-0px_0px_rgba(0,0,0,1)] transition"
                key={course.id}
              >
                {/* Img */}
                <div className="h-58 w-full overflow-hidden flex items-center justify-center relative">
                  <img
                    src={course.img}
                    alt={course.title}
                    width={course.width}
                    height={course.height}
                    className="w-full h-full object-cover"
                  />
                  {course.isNew === true && (
                    <div className="absolute top-4 right-4 bg-yellow-300 p-1.5 transform rotate-3 shadow-sm">
                      <span className="text-xs font-bold">New</span>
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-lg">{course.title}</h3>
                  <p className="text"> By{course.author}</p>
                  <div className="flex justify-between">
                    {/* Rate */}
                    <div className="flex items-center gap-1">
                      <span className="shrink-0 bg-yellow-100 p-1 text-yellow-600 inline-flex">
                        <RiStarFill size={12} />
                      </span>
                      <p className="text-sm font-bold">{course.rating}</p>
                      <p className="text-xs text-neutral-400">
                        {" "}
                        ({course.reviews})
                      </p>
                    </div>
                    <p className="font-bold text-lg">${course.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div variants={variants.fadeInUp}>
          <Button
            label={"Explore all courses"}
            primary
            classes={"mt-12 mx-auto block"}
          />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Course;
