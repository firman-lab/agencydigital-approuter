"use client";

import React, { useState } from "react";
import Image from "next/image";
import CardPrice from "./Atom/CardPrice";

const tabData = ["regular", "pro", "custom"];

export default function TabService() {
  const [openTab, setOpenTab] = useState<number>(0);

  return (
    <section className="w-full container mx-auto my-8 sm:my-16">
      <div className="px-0">
        <div className="px-2">
          <div className="flex flex-col justify-center items-center my-4 sm:my-8 text-green-dark text-center sm:text-left leading-9">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-0 sm:mb-4">
              Good for your Business
            </h2>
            <h2 className="text-base">
              Choose this special price for your website
            </h2>
          </div>
          <ul className="bg-green-light-text rounded-lg py-2 flex flex-row flex-nowrap flex-1 justify-center items-center -mb-px text-sm font-medium gap-2 sm:gap-8 xl:gap-16 text-center text-gray-500 dark:text-gray-400 hover:cursor-pointer">
            <li className="p-0" onClick={() => setOpenTab(0)}>
              <div
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 p-1 sm:p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-green-dark group text-xs sm:text-base ${
                  openTab === 0
                    ? "text-green-dark border-green-dark"
                    : "border-transparent"
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    openTab === 0 ? "bg-green-light" : "bg-[#ABB4B1]"
                  }`}
                >
                  {/* <Image
                    src={"/icon/wordpress.svg"}
                    height={32}
                    width={32}
                    alt="ic-wordpress"
                    className="w-4 sm:w-8"
                  /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={openTab === 0 ? "#0b251c" : "#EDF3F1"}
                  >
                    <path d="M19.891 7.788a8.966 8.966 0 0 1 1.099 4.313 8.986 8.986 0 0 1-4.47 7.771l2.746-7.939c.513-1.282.684-2.309.684-3.219a7.165 7.165 0 0 0-.059-.926m-6.651.087a14.14 14.14 0 0 0 1.026-.088c.485-.063.428-.775-.056-.749 0 0-1.463.112-2.4.112-.887 0-2.375-.125-2.375-.125-.487-.024-.55.713-.061.738 0 0 .449.052.938.075l1.399 3.838-1.975 5.899-3.274-9.724a17.006 17.006 0 0 0 1.028-.083c.487-.063.43-.775-.055-.747 0 0-1.455.115-2.395.115-.167 0-.365-.007-.575-.013C6.093 4.726 8.862 3.113 12 3.113c2.341 0 4.471.894 6.071 2.36-.038-.002-.076-.008-.117-.008-.883 0-1.51.77-1.51 1.596 0 .741.427 1.369.883 2.108.343.601.742 1.37.742 2.481 0 .763-.295 1.662-.685 2.899l-.896 2.987-3.25-9.675.002.014zM12 21.087a8.983 8.983 0 0 1-2.54-.364l2.697-7.838 2.763 7.572c.021.044.042.085.065.124a9.016 9.016 0 0 1-2.985.508m-8.99-8.988a8.94 8.94 0 0 1 .778-3.658l4.287 11.749a8.993 8.993 0 0 1-5.065-8.091m8.99-10c-5.513 0-10 4.487-10 10s4.487 10 10 10 10-4.487 10-10-4.487-10-10-10"></path>
                  </svg>
                </div>
                Landing Page
              </div>
            </li>

            <li className="p-0" onClick={() => setOpenTab(1)}>
              <div
                className={`flex flex-col sm:flex-row  items-center justify-center gap-2 sm:gap-4 p-1 sm:p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-green-dark group text-xs sm:text-base ${
                  openTab === 1
                    ? "text-green-dark border-green-dark"
                    : "border-transparent"
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    openTab === 1 ? "bg-green-light" : "bg-[#ABB4B1]"
                  }`}
                >
                  {/* <Image
                    src={"/icon/code.svg"}
                    height={32}
                    width={32}
                    alt="ic-code"
                    className="w-4 sm:w-8"
                  /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={openTab === 1 ? "#0b251c" : "#EDF3F1"}
                  >
                    <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                  </svg>
                </div>
                Custom Website
              </div>
            </li>
            <li className="p-0" onClick={() => setOpenTab(2)}>
              <div
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 p-1 sm:p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-green-dark group text-xs sm:text-base ${
                  openTab === 2
                    ? "text-green-dark border-green-dark"
                    : "border-transparent"
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    openTab === 2 ? "bg-green-light" : "bg-[#ABB4B1]"
                  }`}
                >
                  {/* <Image
                      src={"/icon/mongo.svg"}
                      height={32}
                      width={32}
                      alt="ic-code"
                      className="w-4 sm:w-8"
                    /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={openTab === 2 ? "#0b251c" : "#EDF3F1"}
                  >
                    <path d="m20.895 7.553-2-4A1.001 1.001 0 0 0 18 3h-5c-.379 0-.725.214-.895.553L10.382 7H6c-.379 0-.725.214-.895.553l-2 4a1 1 0 0 0 0 .895l2 4c.17.338.516.552.895.552h4.382l1.724 3.447A.998.998 0 0 0 13 21h5c.379 0 .725-.214.895-.553l2-4a1 1 0 0 0 0-.895L19.118 12l1.776-3.553a1 1 0 0 0 .001-.894zM13.618 5h3.764l1.5 3-1.5 3h-3.764l-1.5-3 1.5-3zm-8.5 7 1.5-3h3.764l1.5 3-1.5 3H6.618l-1.5-3zm12.264 7h-3.764l-1.5-3 1.5-3h3.764l1.5 3-1.5 3z"></path>
                  </svg>
                </div>
                Website + Database
              </div>
            </li>
          </ul>
          <div className="px-4 lg:px-8 xl:px-32">
            <div className={openTab === 0 ? "block" : "hidden"}>
              <div className="w-full flex flex-1 flex-row justify-center gap-2 my-8">
                <section className="bg-white h-[580px] sm:h-full overflow-scroll lg:overflow-hidden border-green-light border-2 sm:border-0 rounded-xl shadow-lg sm:shadow shadow-black/25 sm:shadow-transparent">
                  <div className="py-4 px-4 lg:py-16">
                    {/* <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                          Designed for business teams like yours
                        </h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                          Here at Flowbite we focus on markets where technology,
                          innovation, and capital can unlock long-term value and
                          drive economic growth.
                        </p>
                      </div> */}
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                      <CardPrice
                        title="Reguler"
                        desc="Landing page untuk FB ads, Instagram Ads, dll"
                        price="78K"
                        features={[
                          "1 Page",
                          "Bebas Pilih Template Design",
                          "1 Sub Domain (svara.tertanam.com)",
                          "No Hidden, or Setup fees",
                        ]}
                      />
                      <CardPrice
                        title="Premium"
                        desc="Website untuk FB ads, Instagram ads, detail usaha dan produk "
                        price="98K"
                        features={[
                          "1-3 Page",
                          "Bebas Pilih Template Design",
                          "1 Sub Domain (svara.tertanam.com)",
                          "No Hidden, or Setup fees",
                          "Free 1x update Design per 3 bulan",
                        ]}
                      />
                      <CardPrice
                        title="Full Custom"
                        desc="Custom Landing Page full sesuai desain yang kamu mau"
                        price="269K"
                        features={[
                          "1-9 Page",
                          "Free Design by You",
                          "Free 1 Domain ( .com )",
                          "No Hidden, or Setup fees",
                          "Premium Support 24 Jam",
                          "Free 1x Update Design perbulan",
                        ]}
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className={openTab === 1 ? "block" : "hidden"}>
              <div className="w-full flex flex-1 flex-row justify-center gap-2 my-8">
                <section className="bg-white h-[580px] sm:h-full overflow-scroll lg:overflow-hidden border-green-light border-2 sm:border-0 rounded-xl shadow-lg sm:shadow shadow-black/25 sm:shadow-transparent">
                  <div className="py-4 px-4 lg:py-16">
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                      <CardPrice
                        title="Reguler"
                        desc="Landing page untuk FB ads, Instagram Ads, dll"
                        price="78K"
                        features={[
                          "1 Page",
                          "Bebas Pilih Template Design",
                          "1 Sub Domain (svara.tertanam.com)",
                          "No Hidden, or Setup fees",
                        ]}
                      />
                      <CardPrice
                        title="Premium"
                        desc="Website untuk FB ads, Instagram ads, detail usaha dan produk "
                        price="98K"
                        features={[
                          "1-3 Page",
                          "Bebas Pilih Template Design",
                          "1 Sub Domain (svara.tertanam.com)",
                          "No Hidden, or Setup fees",
                          "Free 1x update Design per 3 bulan",
                        ]}
                      />
                      <CardPrice
                        title="Full Custom"
                        desc="Custom Landing Page full sesuai desain yang kamu mau"
                        price="399K"
                        features={[
                          "1-9 Page",
                          "Free Design by You",
                          "Free 1 Domain ( .com )",
                          "No Hidden, or Setup fees",
                          "Premium Support 24 Jam",
                          "Free 1x Update Design perbulan",
                        ]}
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <div className=" bg-green-dark w-full flex flex-1 flex-row justify-center gap-2 my-8 rounded-xl">
                <section className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                  <div className="p-0 m-0">
                    <Image
                      src={"/images/banner_hero.png"}
                      height={700}
                      width={700}
                      alt="image-Custom-web"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-col p-8 mx-auto gap-8">
                      <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                          Software as a Service
                          <br />
                          Website Terintegrasi Database
                        </h1>
                        <p className="text-sm sm:text-base leading-6 pt-2 text-gray-400">
                          Website dengan performa cepat sesuai kebutuhan bisnis
                          yang anda jalankan.
                        </p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-gray-300 text-sm sm:text-base">Start From</p>
                        <div className="flex justify-center items-baseline">
                          <span className="mr-2 text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white">
                            2.899K
                          </span>
                          <span className="text-gray-300">/Bulan</span>
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
            </div>
            {/* <div className={openTab === 1 ? "block" : "hidden"}>
                <div className="w-full min-h-max flex flex-1 flex-row gap-2 my-8">
                  <Image
                    src={"/images/banner_hero.png"}
                    height={500}
                    width={500}
                    alt="regular-pack"
                  />
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"}>
                <div className="w-full min-h-max flex flex-1 flex-row gap-2 my-8">
                  <Image
                    src={"/images/regular.svg"}
                    height={500}
                    width={500}
                    alt="regular-pack"
                  />
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
