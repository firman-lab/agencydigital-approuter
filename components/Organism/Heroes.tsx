import React from "react";
import Image from "next/image";

export default function Heroes() {
  return (
    <section className="mx-auto">
      <div className="flex sm:flex-row flex-col-reverse gap-4 xl:gap-8 items-center justify-between pt-28 sm:pt-44 pb-8 sm:pb-20 px-4 sm:px-8 lg:px-16 2xl:px-32">
        <div className="flex flex-1 flex-col justify-start items-start pl-4">
          <p className="text-lg text-green-light font-medium bg-green-dark px-1 my-4">
            #BikinWebsiteGaPakeRibet
          </p>
          <div className="flex flex-1 gap-2 sm:gap-4 text-4xl xl:text-6xl font-bold">
            <h1 className="px-1 tracking-wide highligth-text">Buat Websitemu, Kembangkan Bisnismu</h1>
          </div>
          <p className="my-4 lg:my-6 text-sm sm:text-sm md:text-base max-w-lg lg:max-w-2xl ">
            Optimalkan jangkauan pelanggan bisnismu dengan Website keren dan
            Iklan Digital terpercaya. Raup keuntungan lebih dengan biaya
            terjangkau dari kami.
          </p>
          <div className="flex flex-shrink flex-row justify-start items-center gap-4 sm:gap-8">
            <button
              className={`bg-green-light py-2 lg:py-4 px-4 lg:px-8 text-sm md:text-base font-medium text-green-dark rounded-full border-[1px] border-green-light hover:bg-green-dark hover:border-green-dark hover:text-white`}
            >
              Get Started
            </button>
            <button
              className={`bg-transparent py-2 lg:py-4 px-4 lg:px-8 text-sm md:text-base font-medium text-green-dark rounded-full border-green-dark border-[1px] hover:bg-green-light hover:border-greenlight hover:text-green-dark`}
            >
              Pricelist
            </button>
          </div>
        </div>
        <div className="flex-1 justify-start hidden sm:flex">
          <Image
            src={"/images/banner_hero.png"}
            width={550}
            height={507}
            alt="hero"
            className="w-full xl:w-10/12 "
          />
        </div>
      </div>
    </section>
  );
}
