import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="py-16 px-12 bg-[#ffffff8c] w-3/5 my-32">
        <h1 className="text-7xl w-4/5 font-[500]">
          Get Started
          <br /> With a Healthier You
        </h1>
        <p className="mt-8 text-xl">
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
