import React from "react";
import Image from "next/image";

export default function CountClient() {
  return (
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
  );
}
