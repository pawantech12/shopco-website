import React from "react";

const DressStyle = () => {
  return (
    <section>
      <div className="bg-[#F0F0F0] mx-20 rounded-[40px] py-16 px-10 max-md:mx-5">
        <div>
          <h4 className="font-bold text-5xl uppercase text-center max-lg:text-[32px]">
            BROWSE BY dress STYLE
          </h4>
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-4 max-lg:flex-col">
            <figure className="relative w-[40%] max-lg:w-full">
              <img
                src="/dressimg1.png"
                alt="dress image 1"
                className="rounded-[20px] max-lg:w-full max-lg:h-[310px] max-lg:object-cover"
              />
              <span className="text-4xl font-bold  absolute top-5 left-7">
                Casual
              </span>
            </figure>
            <figure className="relative w-[65%] max-lg:w-full">
              <img
                src="/dressimg2.png"
                alt="dress image 2"
                className="rounded-[20px]"
              />
              <span className="text-4xl font-bold absolute top-5 left-7">
                Formal
              </span>
            </figure>
          </div>
          <div className="flex items-center gap-6 mt-6 max-lg:flex-col">
            <figure className="relative w-[60%] h-[289px] max-lg:w-full">
              <img
                src="/dressimg3.png"
                alt="dress image 3"
                className="rounded-[20px] w-full h-full object-cover"
              />
              <span className="text-4xl font-bold absolute top-5 left-7">
                Party
              </span>
            </figure>
            <figure className="relative w-[40%] h-[289px] max-lg:w-full bg-white rounded-[20px]">
              <img
                src="/dressimg4.png"
                alt="dress image 4"
                className="rounded-[20px] w-full h-full object-cover"
              />
              <span className="text-4xl font-bold absolute top-5 left-7">
                Gym
              </span>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyle;
