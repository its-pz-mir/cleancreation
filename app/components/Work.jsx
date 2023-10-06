import React from "react";
import Image from "next/image";
const Work = () => {
  return (
    <div className="work flex w-full justify-center items-center">
      <div className="my-28 w-3/5 flex flex-col  justify-center items-center">
        <h2 className="text-[49px] font-[500] capitalize">How it Works</h2>
        <div className="items flex justify-between w-full mt-20">
          <div className="w-1/4 p-4 text-center">
            <Image
              src={"/PLACEORDER.svg"}
              alt="Picture of the author"
              width={110}
              height={110}
              className="mx-auto"
            />
            <h3 className="mt-4 uppercase text-xl">Place order</h3>
            <p className="mt-2">
              Select from our wide variety of signature dishes, custom, or
              specialty meal options. Pick up in Baton Rouge or choose between
              in-store pickup or delivery in the New Orleans Metro Area
            </p>
          </div>

          <div className="w-1/4 p-4 text-center">
            <Image
              src={"/COOK.svg"}
              alt="Picture of the author"
              width={120}
              height={120}
              className="mx-auto"
            />
            <h3 className="mt-4 uppercase text-xl">COOK</h3>
            <p className="mt-2">
              Our staff will carefully prepare, cook, and package all of your
              meals and have them fresh and ready to go!
            </p>
          </div>

          <div className="w-1/4 p-4 text-center">
            <Image
              src={"/DELIVER.svg"}
              alt="Picture of the author"
              width={140}
              height={140}
              className="mx-auto py-4"
            />
            <h3 className="mt-4 uppercase text-xl">PICKUP / DELIVER</h3>
            <p className="mt-2">
              You choose whether to pick up your meals in our very own brick and
              mortar location or even choose a delivery method in case you are
              busy. We never want you to miss out
            </p>
          </div>

          <div className="w-1/4 p-4 text-center">
            <Image
              src={"/HEAT.svg"}
              alt="Picture of the author"
              width={135}
              height={135}
              className="mx-auto"
            />
            <h3 className="mt-4 uppercase text-xl">HEAT IT & EAT IT</h3>
            <p className="mt-2">
              Our meal containers are both microwavable and oven sustainable. In
              just minutes you will be enjoying restaurant-quality meals from
              the comfort of your own home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
