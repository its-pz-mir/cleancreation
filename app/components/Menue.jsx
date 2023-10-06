import React from "react";
import Image from "next/image";

const Menue = () => {
  return (
    <div className="menue w-full">
      <div className="bg-white mx-auto border w-3/5 flex flex-col shadow-current justify-center items-center my-12 py-12">
        <h4 className="text-5xl font-semibold">Online Menu</h4>
        <p className="text-xl my-8">
          Not interested in a plan? Shop our online menu and pick as many or few
          meals as you need.
        </p>
        <div
          className="menuelist h-80 overflow-y-auto"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="grid grid-cols-3 gap-4 p-4">
            {/* Repeat this cart product block as many times as needed */}
            {Array.from({ length: 18 }).map((_, index) => (
              <div key={index} className="flex bg-white shadow-xl">
                <div>
                  <Image
                    src={"/cart/cart1.jpg"}
                    alt="Cart Images"
                    width={180}
                    height={180}
                  />
                </div>
                <div className="m-2 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-semibold">
                      Balsamic Chicken Salad (16 oz)
                    </h4>
                    <p className="text-sm">gluten free, dairy free, nut free</p>
                  </div>
                  <p className="text-right">
                    <span className="font-semibold">960</span> Calories
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-10 text-lg px-8 py-3 text-white uppercase bg-[#8ed444] hover:shadow-2xl">
          View Entire Menu
        </button>
      </div>
    </div>
  );
};

export default Menue;
