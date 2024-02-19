import React from "react";
import Image from "next/image";

export default function CaraOrder() {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-8 sm:py-16 px-8 sm:px-16">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Cara Order Sangat Mudah
          </h1>
          <p className="text-sm sm:text-base text-center">
            Pesan websitemu dengan mudah dan cepat tanpa ribet website jadi
          </p>
          <div className="relative hidden lg:flex lg:flex-row w-full pt-16 pl-32 mb-4 sm:mb-0">
            <Image
              src={"/icon/arrow.svg"}
              height={500}
              width={500}
              alt="arrow"
              className="text-left w-1/3"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-4 pt-8 lg:pt-0">
            <div className="p-4 rounded-lg bg-green-light-text max-w-sm">
              <div className="w-full inline-flex items-center justify-center lg:justify-start gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="25" fill="#B7EB38" />
                  <path
                    d="M29.7 31.98H20.3C19.88 31.98 19.41 31.65 19.27 31.25L15.13 19.67C14.54 18.01 15.23 17.5 16.65 18.52L20.55 21.31C21.2 21.76 21.94 21.53 22.22 20.8L23.98 16.11C24.54 14.61 25.47 14.61 26.03 16.11L27.79 20.8C28.07 21.53 28.81 21.76 29.45 21.31L33.11 18.7C34.67 17.58 35.42 18.15 34.78 19.96L30.74 31.27C30.59 31.65 30.12 31.98 29.7 31.98Z"
                    stroke="#0B251C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5 35H30.5"
                    stroke="#0B251C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.5 27H27.5"
                    stroke="#0B251C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="text-sm lg:text-base text-green-dark font-semibold">
                  Pilih Paket Harga
                </h3>
              </div>
              <p className="pt-1 lg:pt-4 text-xs md:text-sm lg:text-base text-center lg:text-left">
                Pilih Paket Website yang sesuai dengan kebutuhan bisnismu. Klik
                Pesan Sekarang.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-green-light-text max-w-sm">
              <div className="w-full inline-flex items-center justify-center lg:justify-start gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="25" fill="#B7EB38" />
                  <path
                    d="M29.7 31.98H20.3C19.88 31.98 19.41 31.65 19.27 31.25L15.13 19.67C14.54 18.01 15.23 17.5 16.65 18.52L20.55 21.31C21.2 21.76 21.94 21.53 22.22 20.8L23.98 16.11C24.54 14.61 25.47 14.61 26.03 16.11L27.79 20.8C28.07 21.53 28.81 21.76 29.45 21.31L33.11 18.7C34.67 17.58 35.42 18.15 34.78 19.96L30.74 31.27C30.59 31.65 30.12 31.98 29.7 31.98Z"
                    stroke="#0B251C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5 35H30.5"
                    stroke="#0B251C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.5 27H27.5"
                    stroke="#0B251C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="text-sm lg:text-base text-green-dark font-semibold">
                  Tentukan Design
                </h3>
              </div>
              <p className="pt-1 lg:pt-4 text-xs md:text-sm lg:text-base text-center lg:text-left">
                Pilih template atau request design mu ke admin melalui WA
                (sesuai paket yg dipilih).
              </p>
            </div>
            <div className="p-4 rounded-lg bg-green-light-text max-w-sm">
              <div className="w-full inline-flex items-center justify-center lg:justify-start gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="25" fill="#B7EB38" />
                  <path
                    d="M29.7 31.98H20.3C19.88 31.98 19.41 31.65 19.27 31.25L15.13 19.67C14.54 18.01 15.23 17.5 16.65 18.52L20.55 21.31C21.2 21.76 21.94 21.53 22.22 20.8L23.98 16.11C24.54 14.61 25.47 14.61 26.03 16.11L27.79 20.8C28.07 21.53 28.81 21.76 29.45 21.31L33.11 18.7C34.67 17.58 35.42 18.15 34.78 19.96L30.74 31.27C30.59 31.65 30.12 31.98 29.7 31.98Z"
                    stroke="#0B251C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5 35H30.5"
                    stroke="#0B251C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.5 27H27.5"
                    stroke="#0B251C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="text-sm lg:text-base text-green-dark font-semibold">
                  Payment and Done!
                </h3>
              </div>
              <p className="pt-1 lg:pt-4 text-xs md:text-sm lg:text-base text-center lg:text-left">
                {" "}
                Lakukan pembayaran awal dan websitemu akan segera kami proses
                dengan cepat.
              </p>
            </div>
          </div>
          <div className="relative hidden lg:flex lg:flex-row w-full pl-32 sm:mb-0 transform -scale-y-100 sm:justify-end lg:pr-40">
            <Image
              src={"/icon/arrow.svg"}
              height={500}
              width={500}
              alt="arrow"
              className="text-left w-1/3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
