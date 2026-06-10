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
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab culpa
            voluptatibus fuga veritatis voluptates, perferendis doloribus omnis
            id ea. Vitae, expedita! Blanditiis placeat totam nulla perspiciatis
            nobis accusantium fugiat est.
          </p>
        </div>
        {/* Wrapper */}
        <div className="">
          {/* Tabs */}
          <div className="">
            {["All", "Popular", "Recent", "Design", "Markating", "Coding"].map(
              (tab) => (
                <button className="" key={tab}>
                  {tab}
                </button>
              ),
            )}
          </div>
          {/* Card Wrapper */}
          <div className="">
            {courses.map((course) => (
              //Card
              <div className="" key={course.id}>
                {/* Img */}
                <div className="">
                  <img
                    src={course.img}
                    alt={course.title}
                    width={course.width}
                    height={course.height}
                  />
                  {course.isNew === true && (
                    <div className="">
                      <span>New</span>
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="">
                  <h3 className="">{course.title}</h3>
                  <p className=""> {course.author}</p>
                  <div className="">
                    {/* Rate */}
                    <div className="">
                      <span className="">
                        <RiStarFill />
                      </span>
                      <p className="">{course.rating}</p>
                      <p className=""> ({course.reviews})</p>
                    </div>
                    <p>${course.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button label={"Explore all courses"} primary/>
        </div>
      </div>
    </section>
  );
};

export default Course;
