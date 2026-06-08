import { RiStarFill } from "@remixicon/react";
import React from "react";
import Button from "./Button";
import { Book,Star,BookOpen ,GraduationCap} from "lucide-react"
const Hero = () => {
  return (
    <section className="pt-12 lg:pt-18 pb-20">
      <div className="container grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        {/* Content  */}
        <div className="space-y-2.5 sm:text-center lg:text-left">
          {/* badge */}
          <div className="bg-yellow-400 px-3 inline-flex items-center gap-1 py-1 -rotate-2 transform">
            {/* Stars */}

            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <RiStarFill key={i} />
              ))}
            </div>
            <p className="text-xs font-bold tracking-wider">"A JOY TO USE"</p>
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">
            {" "}
            Professional and Lifelong learning comes here.
          </h1>
          <p className="max-w-lg text-neutral-600 sm:mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a
            excepturi dolorum sunt fugit modi ducimus aut tempore optio nostrum
            quo blanditiis laudantium animi voluptas
          </p>
          {/* Buttons */}
          <div className="mt-7 grid gap-4 sm:flex sm:justify-center lg:justify-start">
            <Button label={"Get Started"} primary />
            <Button label={"Explore Courses"} />
          </div>
        </div>
        {/* Image */}
        <div className="relative mx-auto p-5">
          <div
            className="max-w-[370px] w-full shadow-img mx-auto 
          rounded-t-full bg-lime-600 
          flex items-center justify-center 
          overflow-hidden"
          >
            <img
              src="/images/smile face22-Picsart-Back.jpg"
              alt="hero image"
              width={440}
              height={592}
            />
          </div>
          {/* Decorations */}
        
        
<img
              src="/images/OpenBook.png"
              alt="hero image"
             
              className="size-10 absolute top-20 left-0 -rotate-12 "
            />

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
          {/* crad */}
          <div className="bg-white shadow-util absolute left-0 bottom-20 px-8 py-6 rounded-lg sm:-left-10 space-y-2">
            <span className="bg-lime-100 flex items-center justify-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-10"
              >
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>
            </span>
            <p className="text-center">
              {" "}
              <span className="font-bold">100k+</span> students <br /> learn
              daily
            </p>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
