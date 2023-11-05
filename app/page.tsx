import Navbar from "@/components/Navbar";
import TabService from "@/components/TabService";
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
       <TabService/>
      </main>
    </>
  );
}
