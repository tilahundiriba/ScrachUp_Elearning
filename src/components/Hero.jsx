import { RiStarFill } from "@remixicon/react";
import React from "react";
import Button from "./Button";
const Hero = () => {
  return (
    <section>
    <div className="container">
      {/* Content  */}
      <div className="">
        {/* badge */}
        <div className="">
          {/* Stars */}

          <div>
            {[1, 2, 3, 4, 5].map((i) => (
              <RiStarFill key={i} />
            ))}
          </div>
          <p className="">A JOY TO USE</p>
        </div>
        <h1 className=""> Professional and Lifelong learning comes here.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a
          excepturi dolorum sunt fugit modi ducimus aut tempore optio nostrum
          quo blanditiis laudantium animi voluptas non odio, maxime, laborum
          unde!
        </p>
        {/* Buttons */}
        <div className="">
          <Button label={"Get Started"} primary />
          <Button label={"Explore Courses"} />
        </div>
      </div>
      {/* Image */}
      <div>
        <div className="">
            <img src=''alt='hero image'
            width={440} height={592}/>
        </div>
      </div>
    </div>
    </section>
  );
  
};

export default Hero;
