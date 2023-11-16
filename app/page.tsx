import Navbar from "@/components/Navbar";
import TabService from "@/components/TabService";
import Image from "next/image";
import { Inter } from "next/font/google";
import ButtonBorder from "@/components/Atom/ButtonBorder";
const inter = Inter({ subsets: ["latin"], display: "swap" });
export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className={`p-0 m-0 bg-[#EDF3F1] overflow-hidden ${inter.className}`}
      >
        <section className="container mx-auto">
          <div className="flex flex-1 sm:flex-row flex-col-reverse gap-4 xl:gap-8 items-center justify-between pt-28 sm:pt-40 pb-8 sm:pb-16 px-4 sm:px-8 lg:px-16 2xl:p-32">
            <div className="flex flex-col justify-start items-start pl-4">
              <p className="text-lg text-green-light font-medium bg-green-dark px-1 my-4">
                #BikinWebsiteGaPakeRibet
              </p>
              <div className="flex flex-auto gap-2 sm:gap-4 text-4xl xl:text-6xl font-bold">
                <h1 className="px-1 highligth-text">Making</h1>
                <span>Great</span>
              </div>
              <div className="pt-4 flex flex-auto gap-2 sm:gap-4 text-4xl xl:text-6xl font-bold">
                <span>Business</span>
                <h1 className=" px-1 highligth-text-reverse">Website</h1>
              </div>
              <p className="my-4 lg:my-10 text-sm sm:text-sm md:text-base max-w-lg lg:max-w-2xl ">
                Optimalkan jangkauan pelanggan bisnismu dengan Website keren dan
                Iklan Digital terpercaya. Raup keuntungan lebih dengan biaya
                sangat terjangkau.
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
            <div className="flex-initial justify-start hidden sm:flex">
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
        <section className="py-0 sm:py-8 container mx-auto">
          <div className="w-full px-4 flex flex-col justify-center items-center">
            <h3 className="text-xl sm:text-3xl font-semibold">
              We&apos;re Helping Big
            </h3>
            <h3 className="text-xl sm:text-3xl font-semibold leading-normal md:leading-10">
              Global Company Grow
            </h3>
          </div>
        </section>
        <section className="relative w-full bg-green-dark mt-4 py-4 sm:py-8">
          <div className="container mx-auto">
            <div className="px-16 sm:px-32 py-4 sm:py-8">
              <div className="absolute left-80 bottom-0  md:-left-10 md:top-0 h-full">
                <Image
                  src={"/icon/kruwel.svg"}
                  height={500}
                  width={500}
                  alt="line-vert"
                  className="h-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-light-text text-center sm:text-left">
                  <h2>We Have Big Reason</h2>
                  <h2 className="leading-tight">Improve Your Business Today</h2>
                </div>
                <div className="flex flex-col sm:flex-row pt-8 justify-end gap-8">
                  <div className="grid grid-flow-col gap-4 sm:gap-4">
                    <Image
                      src={"/icon/mahkota.svg"}
                      height={50}
                      width={50}
                      alt="icon-cust"
                      className=""
                    />
                    <div className="py-0 px-0 w-2/3">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-green-light-text">
                        182
                      </h2>
                      <p className="text-sm sm:text-base font-thin text-green-light-text">
                        Happy Client Using Our Service
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-flow-col gap-4 sm:gap-4">
                    <Image
                      src={"/icon/boxes.svg"}
                      height={50}
                      width={50}
                      alt="icon-cust"
                    />
                    <div className="py-0 px-0 w-2/3">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-green-light-text">
                        63
                      </h2>
                      <p className="text-sm sm:text-base font-thin text-green-light-text">
                        Successfull On Scale Business
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <TabService />
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
                  Pilih Paket Website yang sesuai dengan kebutuhan bisnismu.
                  Klik Pesan Sekarang.
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.5 35H30.5"
                      stroke="#0B251C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.5 27H27.5"
                      stroke="#0B251C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.5 35H30.5"
                      stroke="#0B251C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.5 27H27.5"
                      stroke="#0B251C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                WebIn Membantu usaha kita untuk{" "}
                <span className="bg-green-light px-1">
                  terjun ke dunia digital
                </span>{" "}
                dengan jangkauan pelanggan yang{" "}
                <span className="bg-green-light px-1">lebih luas</span>
              </h1>
              <p className="text-base text-green-dark">
                Moana liu, CEO Gardenesia
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
      <section className="bg-green-dark my-8 lg:my-16 px-0">
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
    </>
  );
}
