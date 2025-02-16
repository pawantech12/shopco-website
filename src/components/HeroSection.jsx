import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#F2F0F1] flex items-center justify-between  px-5 md:px-20 max-xl:flex-col">
      <div className="w-1/2 flex flex-col gap-4 py-7 max-xl:w-11/12">
        <h1 className="text-[64px] font-extrabold leading-[64px] max-lg:text-[48px] max-sm:text-[36px] max-sm:leading-[34px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-base text-[#00000099]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="py-4 px-[52px] rounded-full text-base bg-black text-white hover:bg-white border-black border-2 hover:text-black transition-all ease-in-out duration-200 w-fit max-sm:w-full font-medium">
          Shop Now
        </button>
        <div className="flex items-center max-xl:justify-center gap-8 mt-5 flex-wrap">
          <div>
            <h4 className="text-[40px] font-bold max-sm:text-2xl">200+</h4>
            <span className="text-[#00000099] text-base">
              International Brands
            </span>
          </div>
          {/* verticle border line */}
          <div className="w-[1px] h-12 bg-[#0000001A]"></div>
          <div>
            <h4 className="text-[40px] font-bold max-sm:text-2xl">2,000+</h4>
            <span className="text-[#00000099] text-base">
              High-Quality Products
            </span>
          </div>
          <div className="w-[1px] h-12 bg-[#0000001A]"></div>
          <div>
            <h4 className="text-[40px] font-bold max-sm:text-2xl">30,000+</h4>
            <span className="text-[#00000099] text-base">Happy Customers</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 pt-8 relative max-xl:w-11/12">
        <figure>
          <img src="/hero.jpg" alt="hero image" className="w-full" />
        </figure>
        <img
          src="/star.png"
          alt="star image"
          className="absolute top-20 right-0 max-sm:top-5 max-sm:w-[76px]"
        />
        <img
          src="/star.png"
          alt="star image"
          className="absolute top-1/2 left-10 w-14 max-sm:left-3 max-sm:top-1/3"
        />
      </div>
    </section>
  );
};

export default HeroSection;
