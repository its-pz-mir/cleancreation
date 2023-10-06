import React from "react";

const Start = () => {
  return (
    <div>
      <div className="start my-24">
        <div className="w-[80%] py-8">
          <div className="z-10 bg-white shadow-xl px-8 py-12 w-[70%] ml-[36rem] shadow-current">
            <h1 className="text-5xl font-[500]">
              Get Started
              <br />
              With a Healthier You
            </h1>
            <p className="mt-6 text-lg">
              The convenience of a well prepared, healthy, flavorful meal with
              no shopping, preparing, or clean up is a total game changer for
              your lifestyle!
            </p>
            <button className="mt-6 text-lg px-8 py-3 text-white uppercase bg-[#8ed444] hover:shadow-2xl">
              Signup Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
