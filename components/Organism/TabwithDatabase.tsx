import React from "react";
import Image from "next/image";

export default function TabwithDatabase() {
  return (
    <div className=" bg-green-dark w-full flex flex-1 flex-row justify-center gap-2 my-8 rounded-xl">
      <section className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="hidden sm:block p-0 m-0">
          <Image
            src={"/images/banner_hero.png"}
            height={700}
            width={700}
            alt="image-Custom-web"
          />
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-col mx-auto gap-8">
            <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start">
              <h1 className="text-xl sm:text-2xl lg:text-3xl text-center sm:text-left font-bold text-white">
                Website Software as a Service
                Terintegrasi Database
              </h1>
              <p className="text-sm sm:text-base text-center sm:text-left leading-6 pt-2 text-gray-400">
                Performa cepat sesuai kebutuhan bisnis yang anda
                jalankan.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-300 text-sm sm:text-base">Start From</p>
              <div className="flex justify-center items-baseline">
                <span className="mr-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                  4.499K
                </span>
                <span className="text-gray-300">/Lifetime</span>
              </div>
            </div>
            <ul className="space-y-4 px-4 text-white">
              <li className="flex items-center space-x-3">
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
                <span className="text-sm sm:text-base">
                  CMS, Admin Dashboard, SaaS, HR Management
                </span>
              </li>
              <li className="flex items-center space-x-3">
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
                <span className="text-sm sm:text-base">
                  Integrasi ke Database
                </span>
              </li>
              <li className="flex items-center space-x-3">
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
                <span className="text-sm sm:text-base">
                  Build with Next JS Framework Javascript Terpopuler
                </span>
              </li>
              <li className="flex items-center space-x-3">
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
                <span className="text-sm sm:text-base">
                  Free 1 Domain .com/.id/.co.id
                </span>
              </li>
              <li className="flex items-center space-x-3">
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
                <span className="text-sm sm:text-base">
                  Lifetime Maintanance
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-green-dark bg-green-light hover:bg-green-light/50 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-green-dark hover:text-green-light-text dark:focus:ring-primary-900"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
