import React from "react";

const Plan = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="xl:w-[60%] lg:-w-[70%] w-full mx-auto flex flex-col justify-center items-center mt-32">
        <h5 className="text-5xl font-semibold text-center px-4">
          Plans for Everyone
        </h5>
        <p className="w-[85%] lg:w-full text-center px-4 md:px-8 text-xl mt-4 leading-5">
          Consistency in your diet starts with a plan. Choose from 2,3, or 4
          meals per day for 5,6, or 7 days. Plans are subscription based but can
          be changed at any time to meet your needs.
        </p>
      </div>
      <div className="flex flex-wrap w-full justify-center md:justify-between px-8 mt-4 md:mt-20">
        {/* Item 1 */}
        <div className="bg-white shadow-2xl shadow-slate-400 px-6 md:px-8 py-8 space-y-4 w-full md:w-[17%] md:mr-4 lg:mr-0">
          <h6 className="text-[18px] md:text-[20px] font-[500] text-center">
            Lifestyle Plan
          </h6>
          <p className="text-center text-lg">as low as</p>
          <p className="text-center text-lg">$9.76 per meal</p>
          <button className="bg-[#8ed444] text-xl uppercase text-white w-full py-2">
            Choose
          </button>
        </div>

        {/* Item 2 */}
        <div className="bg-white shadow-2xl shadow-slate-400 px-6 md:px-8 py-8 space-y-4 w-full md:w-[17%] md:mr-4 lg:mr-0 mt-4 md:mt-0">
          <h6 className="text-[18px] md:text-[20px] font-[500] text-center">
            The Low Carb Plan
          </h6>
          <p className="text-center text-lg">as low as</p>
          <p className="text-center text-lg">$11.19 per meal</p>
          <button className="bg-[#8ed444] text-xl uppercase text-white w-full py-2">
            Choose
          </button>
        </div>

        {/* Item 2 */}
        <div className="bg-white shadow-2xl shadow-slate-400 px-6 md:px-8 py-8 space-y-4 w-full md:w-[17%] md:mr-4 lg:mr-0 mt-4 md:mt-0">
          <h6 className="text-[18px] md:text-[20px] font-[500] text-center">
            The Pescatarian Plan
          </h6>
          <p className="text-center text-lg">as low as</p>
          <p className="text-center text-lg">$11.19 per meal</p>
          <button className="bg-[#8ed444] text-xl uppercase text-white w-full py-2">
            Choose
          </button>
        </div>

        {/* Item 2 */}
        <div className="bg-white shadow-2xl shadow-slate-400 px-6 md:px-8 py-8 space-y-4 w-full md:w-[17%] md:mr-4 lg:mr-0 mt-4 md:mt-0">
          <h6 className="text-[18px] md:text-[20px] font-[500] text-center">
            The Vegan Plan
          </h6>
          <p className="text-center text-lg">as low as</p>
          <p className="text-center text-lg">$11.19 per meal</p>
          <button className="bg-[#8ed444] text-xl uppercase text-white w-full py-2">
            Choose
          </button>
        </div>

        {/* Item 2 */}
        <div className="bg-white shadow-2xl shadow-slate-400 px-6 md:px-8 py-8 space-y-4 w-full md:w-[17%] md:mr-4 lg:mr-0 mt-4 md:mt-0">
          <h6 className="text-[18px] md:text-[20px] font-[500] text-center">
            The Vegetarian Plan
          </h6>
          <p className="text-center text-lg">as low as</p>
          <p className="text-center text-lg">$11.19 per meal</p>
          <button className="bg-[#8ed444] text-xl uppercase text-white w-full py-2">
            Choose
          </button>
        </div>

        {/* Repeat this block for items 3, 4, and 5 */}
      </div>
    </div>
  );
};

export default Plan;
