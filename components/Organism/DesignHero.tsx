import React from "react";
import Image from "next/image";

export default function DesignHero() {
  return (
    <section className="bg-green-dark px-0">
      <div className="flex flex-col-reverse md:flex-row flex-shrink-0 justify-between gap-4">
        <div className="flex-1 flex justify-center items-center px-8 lg:px-0 py-8 lh:py-0">
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start lg:max-w-xl">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-green-light-text">
              Design Modern UX Friendly
            </h1>
            <p className="text-sm lg:text-base pt-2 lg:pt-3 text-center md:text-left text-white">
              Buat Websitemu dan kembangkan bisnismu. Bebas pilih design
              sesukamu. Puluhan design sudah kami siapkan.
            </p>
            <div className="mt-6 lg:mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
              <button
                className={` bg-green-light py-3 lg:py-4 px-6 lg:px-8 text-sm md:text-base font-medium text-green-dark rounded-full border-[1px] border-green-dark hover:bg-green-dark hover:border-white hover:text-white`}
              >
                Pilih Design
              </button>
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="bg-green-light-text rounded-full p-1">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-green-light-text text-sm">
                  Free Maintanance
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full p-0">
          <Image
            src={"/images/design.jpg"}
            height={1000}
            width={1000}
            alt="phote"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
