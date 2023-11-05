import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-0 m-0 bg-[#EDF3F1] overflow-hidden">
        <section className="container mx-auto">
          <div className="flex flex-1 sm:flex-row flex-col-reverse gap-4 xl:gap-8 items-center justify-between pt-28 sm:pt-40 pb-16 px-4 sm:px-32">
            <div className="flex flex-col justify-start items-start pl-4">
              <p className="text-lg text-green-light font-medium bg-green-dark px-1">
                #JasaBikinWebsite
              </p>
              <h1 className="text-2xl lg:text-3xl xl:text-6xl font-bold">
                Making Great
              </h1>
              <h1 className="text-2xl lg:text-3xl xl:text-6xl font-bold">
                Business Decision
              </h1>
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
                  Hasil Kerja
                </button>
              </div>
            </div>
            {/* <div className="flex flex-initial justify-start"> */}
            <Image
              src={"/images/banner_hero.svg"}
              width={550}
              height={507}
              alt="hero"
              className="w-1/2 sm:w-1/3"
            />
            {/* </div> */}
          </div>
        </section>
        <section className="py-8 container mx-auto">
          <div className="px-4 flex flex-col justify-center items-center">
            <h3 className="text-xl sm:text-3xl font-semibold">
              We&apos;re Helping Big
            </h3>
            <h3 className="text-xl sm:text-3xl font-semibold leading-normal md:leading-10">
              Global Company Grow
            </h3>
            <div className=" w-full flex flex-row gap-2 md:gap-8 justify-evenly items-center py-8">
              <div className="flex flex-row gap-2 items-center justify-center max-w-lg">
                <Image
                  src={"/icon/ifixied.webp"}
                  width={100}
                  height={100}
                  alt="client"
                  className="bg-green-dark px-1 py-1 rounded-md"
                />
              </div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  src={"/icon/ifixied.webp"}
                  width={100}
                  height={100}
                  alt="client"
                  className="bg-green-dark px-1 py-1"
                />
              </div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  src={"/icon/ifixied.webp"}
                  width={100}
                  height={100}
                  alt="client"
                  className="bg-green-dark px-1 py-1 rounded-md"
                />
              </div>
              <div className="flex flex-row gap-2 items-center justify-center max-w-md">
                <Image
                  src={"/icon/ifixied.webp"}
                  width={100}
                  height={100}
                  alt="client"
                  className="bg-green-dark px-1 py-1 rounded-md"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-green-dark mt-4">
          <div className="container mx-auto">
            <div className="relative px-16 sm:px-32 py-4 sm:py-8 z-10">
              <div className="absolute left-52 top-0 h-full">
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
                <div className="flex flex-col sm:flex-row pt-8 justify-end">
                  <div className="grid grid-flow-col gap-4 sm:gap-4">
                    <Image
                      src={"/icon/mahkota.svg"}
                      height={50}
                      width={50}
                      alt="icon-cust"
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
        <section className="w-full container mx-auto">
          <div className="sm:px-32">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    Profile
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                    aria-current="page"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
                    </svg>
                    Settings
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                    </svg>
                    Contacts
                  </a>
                </li>
                <li>
                  <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
