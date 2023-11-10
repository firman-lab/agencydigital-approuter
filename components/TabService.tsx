"use client";

import React, { useState } from "react";
import Image from "next/image";
import CardPrice from "./Atom/CardPrice";

const tabData = ["regular", "pro", "custom"];

export default function TabService() {
  const [openTab, setOpanTab] = useState(0);

  return (
    <>
      <section className="w-full container mx-auto my-8 sm:my-16">
        <div className="px-0">
          <div className="px-2">
            <div className="flex flex-col justify-center items-center my-4 sm:my-8 text-green-dark text-center sm:text-left leading-9">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 lg:mb-4">
                Good for your Business
              </h2>
              <h2 className="text-base">
                Choose this special price for your website
              </h2>
            </div>
            <ul className="flex flex-row justify-center items-center -mb-px text-sm font-medium gap-1 sm:gap-8 xl:gap-16 text-center text-gray-500 dark:text-gray-400 hover:cursor-pointer">
              <li className="p-0" onClick={() => setOpanTab(0)}>
                <div
                  className={`inline-flex items-center justify-center gap-2 sm:gap-4 p-2 sm:p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-green-dark group text-sm sm:text-base ${
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
                    <Image
                      src={"/icon/wordpress.svg"}
                      height={32}
                      width={32}
                      alt="ic-wordpress"
                      className="w-24 sm:w-8"
                    />
                  </div>
                  Landing Page
                </div>
              </li>
              <li className="p-0" onClick={() => setOpanTab(1)}>
                <div
                  className={`inline-flex items-center justify-center gap-2 sm:gap-4 p-2 sm:p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-green-dark group text-sm sm:text-base ${
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
                    <Image
                      src={"/icon/code.svg"}
                      height={32}
                      width={32}
                      alt="ic-code"
                      className="w-24 sm:w-8"
                    />
                  </div>
                  Custom Website
                </div>
              </li>
              <li className="p-0" onClick={() => setOpanTab(2)}>
                <div
                  className={`inline-flex items-center justify-center gap-1 sm:gap-4 p-2 sm:p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-green-dark group text-sm sm:text-base  ${
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
                    <Image
                      src={"/icon/code.svg"}
                      height={32}
                      width={32}
                      alt="ic-code"
                      className="w-24 sm:w-8"
                    />
                  </div>
                  Full Website & Database
                </div>
              </li>
            </ul>
            <div className="px-4 lg:px-8 xl:px-32">
              <div className={openTab === 0 ? "block" : "hidden"}>
                <div className="w-full flex flex-1 flex-row justify-center gap-2 my-8">
                  <section className="bg-white overflow-y-auto">
                    <div className="py-8 px-2 lg:py-16">
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
                          desc="Landing page untuk pengenalan usaha, FB ads, Instagram Ads, dll"
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
                          desc="Website untuk pengenalan usaha dan produk"
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
              <div className={openTab === 1 ? "block" : "hidden"}>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
