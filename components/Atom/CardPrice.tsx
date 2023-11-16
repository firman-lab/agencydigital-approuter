import React from "react";

interface CardPrice {
  title: string;
  desc: string;
  price: string;
  bandage:boolean;
  features: Array<string>;
}

export default function CardPrice(props: CardPrice) {
  const { title, desc, price, bandage, features } = props;
  return (
    <>
      {/* <!-- Pricing Card --> */}
      <div className="h-full flex flex-col p-6 xl:p-8 mx-auto max-w-lg text-center bg-green-dark text-white rounded-lg hover:scale-105 transition-all ease-in">
        <div className="relative">
          <div className={`${bandage === true ? "block" : "hidden"} absolute -top-10 right-0 px-4 py-2 bg-green-light text-lg font-semibold text-green-dark rounded-tr-lg rounded-bl-lg`}>Terlaris!</div>
            </div>
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="font-light text-xs sm:text-base 2xl:text-lg text-gray-400">
          {desc}
        </p>
        <div className="flex justify-center items-baseline my-8">
        <span className="text-white pr-2">IDR</span>
          <span className="mr-2 text-2xl sm:text-3xl lg:text-5xl font-extrabold">{`${price}`}</span>
          <span className="text-gray-400">/Bulan</span>
        </div>
        {/* <!-- List --> */}
        <div className="flex flex-col justify-between h-full ">
          <ul className="mb-8 space-y-4 text-left">
            {features.map((data, index) => (
              <li key={index} className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
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
                <span className="text-sm sm:text-base">{data}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-between items-center">
          <p className="text-green-light-text/70 text-right pr-4 py-4 text-xs block lg:hidden">&larr; Swipe left</p>
          {/* <p className="text-green-light-text/70 text-right pr-4 py-4 text-xs block lg:hidden">Swipe right &rarr;</p> */}
          </div>
          <a
            href="#"
            className="text-green-dark bg-green-light hover:bg-green-light/50 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-green-dark hover:text-green-light-text dark:focus:ring-primary-900"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </>
  );
}
