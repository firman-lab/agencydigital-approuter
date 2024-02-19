import React from "react";
import Image from "next/image";

export default function SubHero() {
  return (
    <section className="bg-green-light-text">
      <div className="container mx-auto px-8">
        <div className="flex flex-col justify-evenly items-center gap-6 lg:gap-12 md:flex-row py-8 lg:py-16">
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start lg:max-w-xl">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Design Modern UX Friendly
            </h1>
            <p className="text-sm lg:text-base pt-2 lg:pt-3 text-center md:text-left">
              Buat Websitemu dan kembangkan bisnismu. Bebas pilih design
              sesukamu. Puluhan design sudah kami siapkan.
            </p>
            <button
              className={`mt-6 lg:mt-12 bg-green-light py-4 lg:py-4 px-6 lg:px-8 text-sm md:text-base font-medium text-green-dark rounded-full border-[1px] border-green-dark hover:bg-green-dark hover:border-green-dark hover:text-white`}
            >
              Pilih Design
            </button>
          </div>
          <div>
            <Image
              src={"/images/banner_hero.png"}
              width={500}
              height={500}
              alt="modern-ux"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
