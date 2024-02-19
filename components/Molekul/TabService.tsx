"use client";

import React, { useState } from "react";
import TabWordpress from "./TabWordpress";
import TabCustom from "./TabCustom";
import TabwithDatabase from "./TabwithDatabase";

const tabData = ["regular", "pro", "custom"];

export default function TabService() {
  const [openTab, setOpenTab] = useState<number>(0);

  return (
    <section id="pricing" className="w-full container mx-auto my-8 sm:my-16">
      <div className="px-0">
        <div className="px-2">
          <div className="flex flex-col justify-center items-center my-4 sm:my-8 text-green-dark text-center sm:text-left leading-9">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-0 sm:mb-4">
              Pricelist Jasa Website
            </h2>
            <h2 className="text-base">
              Pilih yang sesuai kebutuhanmu, butuh konsultasi? langsung hubungi kami siap membantu.
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
                Website Dinamis
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
              <TabWordpress />
            </div>
            <div
              className={`${
                openTab === 1 ? "block " : "hidden"
              } py-4 sm:px-4 lg:py-8`}
            >
              <TabCustom />
            </div>
            <div
              className={`${
                openTab === 2 ? "block " : "hidden"
              } py-4 sm:px-4 lg:py-8`}
            >
              <TabwithDatabase />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
