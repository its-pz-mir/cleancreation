import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="py-16 px-12 bg-[#ffffff8c] xl:w-3/4 2xl:w-3/5 w-full flex flex-col justify-center items-center sm:justify-normal sm:items-start my-8 sm:my-12 md:my-20 lg:my-24 xl:my-28 2xl:my-32">
        <h1 className="md:text-7xl sm:w-4/5 font-[500] w-full sm:text-left text-center sm:text-5xl text-4xl">
          Get Started
          <br /> With a Healthier You
        </h1>
        <p className="mt-8 text-xl text-center sm:text-left">
          We make eating healthy convenient and delicious so you can have more
          time to do the things you love.
        </p>
        <button className="mt-7 text-lg px-8 py-3 text-white uppercase bg-[#8ed444] hover:shadow-2xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
