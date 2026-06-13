import React from "react";
import { courses } from "../data/data";
import { RiStarFill } from "@remixicon/react";
import Button from "./Button"

const Course = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-2.5">
          <h2 className="section-title">Explore Courses</h2>
          <p className="tex- max-2xl mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab culpa
            voluptatibus fuga veritatis voluptates, perferendis doloribus omnis
            id ea. Vitae, expedita! Blanditiis placeat totam nulla perspiciatis
            nobis accusantium fugiat est.
          </p>
        </div>
        {/* Wrapper */}
        <div className="mt-7">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Popular", "Recent", "Design", "Markating", "Coding"].map(
              (tab) => (
                <button className={`shadow-util px-6 py-2.5
                 rounded-full font-medium hover:bg-neutral-100 focus:bg-neutral-100! transition`} key={tab}>
                  {tab}
                </button>
              ),
            )}
          </div>
          {/* Card Wrapper */}
          <div className="">
            {courses.map((course) => (
              //Card
              <div className="bg-white rounded-xl border border-neutral-200 
              overflow-hidden hover:shadow-[3px_3p_-0px_0px_rgba(0,0,0,1)]
               hover:border-black focus:border-black focus:shadow-[3px_3p_-0px_0px_rgba(0,0,0,1)] transition" key={course.id}>
                {/* Img */}
                <div className="h-58 w-full overflow-hidden flex items-center justify-center relative">
                  <img
                    src={course.img}
                    alt={course.title}
                    width={course.width}
                    height={course.height}
                    className="w-full h-auto object-cover"
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
                        <RiStarFill size={12}/>
                      </span>
                      <p className="text-sm font-bold">{course.rating}</p>
                      <p className="text-xs text-neutral-400"> ({course.reviews})</p>
                    </div>
                    <p className="font-bold text-lg">${course.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button label={"Explore all courses"} primary classes={"mt-12 mx-auto block"}/>
        </div>
      </div>
    </section>
  );
};

export default Course;
