import React from "react";
import { testimonials } from "../data/data";
import { RiDoubleQuotesR } from "@remixicon/react";
const Testmonials = () => {
  return (
    <section>
      <div className="container">
        {/* Title */}
        <div className="">
          <h2 className="section-title">What Learners are saying</h2>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            nulla ea repellendus corrupti consequuntur, qui dignissimos, dolorem
            hic, sint quia rerum culpa fugiat magnam necessitatibus{" "}
          </p>
        </div>
        {/* Card Wrapper */}
        <div className="">
          {testimonials.map((testimonial) => (
            //Card
            <div className="" key={testimonial.id}>
              {/* icon */}
              <span className="">
                <RiDoubleQuotesR />
              </span>
              <p className="text">{testimonial.text}</p>

              <div className="">
                {/* Avatar */}
                <div className="">

                    <img src={testimonial.image}
                     alt={testimonial.author} 
                     width={150} height={150}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testmonials;
