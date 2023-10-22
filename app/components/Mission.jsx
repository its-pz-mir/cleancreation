import React from "react";

const Mission = () => {
  return (
    <div className="mission mt-16">
      <div className="w-full lg-w-[80%] py-8  ">
        <div className="z-10 bg-white w-full lg:w-[70%] xl:w-[60%] px-2 lg:ml-40 md:px-4 lg:px-8 py-8 shadow-xl shadow-current mx-auto">
          <h1 className="text-5xl text-center lg:text-start font-[500] mr-4">
            Our mission is to make clean eating delicious and convenient for
            everyone.
          </h1>
          <p className="mt-6 text-center lg:text-start px-2 lg:px-8 text-lg">
            Our mission is to make clean eating simple and convenient. You
            should never have to sacrifice quality, flavor or nutrition when it
            comes to your, which is why we offer the highest quality ingredients
            in our meals. Every meal we prepare is created with passion and care
            by our incredible chef and culinary team. We are more passionate
            than ever that we can truly change people’s lives with clean eating!
          </p>
          <button className="mt-6 text-lg px-8 py-3 text-white uppercase bg-[#8ed444] hover:shadow-2xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mission;
