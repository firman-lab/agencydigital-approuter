"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ButtonSolid from "./Atom/ButtonSolid";
import ButtonBorder from "./Atom/ButtonBorder";

const menu = [
  { name: "Features", href: "/" },
  { name: "Pricing", href: "#pricing" },
  { name: "Order Tips", href: "#order" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  function setPop() {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    console.log(open);
  }
  return (
    <div className="container z-[100]">
      <section className="fixed w-full z-10 px-8 md:px-12 bg-green-dark backdrop-blur-md dark:transition dark:ease-in dark:duration-200">
        <div className="flex justify-between items-center">
          <div className="w-24 h-8 my-6 md:w-32 flex flex-row justify-center items-center gap-2">
            <Image
              src="/images/logo-white.png"
              alt="ic-main"
              width={100}
              height={100}
              className="w-full"
            />
          </div>
          <div className="w-full hidden md:flex flex-row justify-between items-center transition ease-in-out duration-300">
            <div className="mx-auto ">
              {menu.map((item, index) => (
                <a
                  href={item.href}
                  key={index}
                  className={`px-4 lg:px-8 font-medium text-white dark:text-white hover:text-green-light dark:hover:text-white hover:transition-all hover:ease-in hover:duration-200 ${
                    item.href === pathname ? "active" : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <ButtonSolid title="Call Sales" bg="bg-white" />
              <ButtonBorder title="Our Client" />
            </div>
          </div>
          <div className="md:hidden">
            <button className="p-2 bg-button-green rounded-lg" onClick={setPop}>
              {open ? (
                <Image src="/icon/x.svg" alt="ic-bar" width={18} height={18} />
              ) : (
                <Image
                  src="/icon/bar.svg"
                  alt="ic-bar"
                  width={18}
                  height={18}
                />
              )}
            </button>
          </div>
        </div>
        <div
          className={
            open
              ? "mx-auto transition-all ease-in duration-400 md:hidden"
              : "hidden"
          }
        >
          <div className="transition ease-in-out duration-300">
            <div className="pt-4 pb-8 flex flex-col gap-4 justify-start items-start">
              {menu.map((item, index) => (
                <a
                  href={item.href}
                  key={index}
                  className={`pt-2 lg:px-8 text-sm font-semibold  text-white dark:text-white hover:text-green-light dark:hover:text-white hover:transition-all hover:ease-in hover:duration-200 ${
                    item.href === pathname ? "active" : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
