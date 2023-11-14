import Navbar from "@/components/Navbar";
import TabService from "@/components/TabService";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-0 m-0 bg-[#EDF3F1] overflow-hidden">
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
    </>
  );
}
