import React from "react";
import Image from "next/image";

export default function Review() {
  return (
    <section className="my-8 sm:my-0 py-8 lg:py-16">
      <div className="container mx-auto sm:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-8">
          <div className="relative flex justify-center items-center flex-1 w-1/2 md:w-full">
            <Image
              src={"/images/photo.png"}
              height={400}
              width={400}
              alt="'photo"
            />
            <div className="absolute -left-8 md:left-8 lg:left-4 xl:left-24 2xl:left-40 -top-8 lg:-top-12">
              <div className="bg-white rounded-lg p-2 lg:p-4 flex flex-row gap-2 items-center justify-center shadow-xl">
                <div className="bg-green-light rounded-full p-1">
                  <Image
                    src={"/icon/code.svg"}
                    width={24}
                    height={24}
                    alt="ic-code"
                  />
                </div>
                <h3 className="text-xs lg:text-sm font-medium ">
                  Creative <br /> Design
                </h3>
              </div>
            </div>
            <div className="absolute -right-8 md:right-8 lg:right-4 xl:right-24 2xl:right-32 bottom-8 lg:bottom-12">
              <div className="bg-white rounded-lg p-2 lg:p-4 flex flex-row gap-2 items-center justify-center shadow-xl">
                <div className="bg-green-light rounded-full p-1">
                  <Image
                    src={"/icon/chart.svg"}
                    width={24}
                    height={24}
                    alt="ic-code"
                  />
                </div>
                <h3 className="text-xs lg:text-sm font-medium ">
                  Website Cepat <br /> Trafik Tinggi
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-2 px-16 md:px-8 pt-2 md:pt-0">
            <ul className=" flex flex-row flex-initial">
              <li className="pr-1">
                <Image
                  src={"/icon/star.svg"}
                  height={24}
                  width={24}
                  alt="star"
                  className="object-contain w-5 lg:w-full"
                />
              </li>
              <li className="pr-1">
                <Image
                  src={"/icon/star.svg"}
                  height={24}
                  width={24}
                  alt="star"
                  className="object-contain w-5 lg:w-full"
                />
              </li>
              <li className="pr-1">
                <Image
                  src={"/icon/star.svg"}
                  height={24}
                  width={24}
                  alt="star"
                  className="object-contain w-5 lg:w-full"
                />
              </li>
              <li className="pr-1">
                <Image
                  src={"/icon/star.svg"}
                  height={24}
                  width={24}
                  alt="star"
                  className="object-contain w-5 lg:w-full"
                />
              </li>
              <li className="pr-1">
                <Image
                  src={"/icon/star.svg"}
                  height={24}
                  width={24}
                  alt="star"
                  className="object-contain w-5 lg:w-full"
                />
              </li>
            </ul>
            <h1 className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:max-w-xl leading-7 sm:leading-8 lg:tracking-wide">
              Skala Membantu usaha kita untuk{" "}
              <span className="bg-green-light px-1">
                terjun ke dunia digital
              </span>{" "}
              dengan jangkauan pelanggan yang{" "}
              <span className="bg-green-light px-1">lebih luas</span>
            </h1>
            <p className="text-base text-green-dark">
              Moana Liu, CEO Gardenesia
            </p>
            <div className="pt-8">
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <div className="p-1 rounded-full bg-green-dark/80">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                  <span className="text-sm sm:text-base font-medium">
                    Bisnis berhasil berkembang dengan website
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <div className="p-1 rounded-full bg-green-dark/80">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                  <span className="text-sm sm:text-base font-medium">
                    Dapat lebih dari 100 order dari Web Landing Page
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <div className="p-1 rounded-full bg-green-dark/80">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                  <span className="text-sm sm:text-base font-medium">
                    Punya sistem pendataan barang dan laporan keuangan sesuai
                    kebutuhan Gardenesia
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
