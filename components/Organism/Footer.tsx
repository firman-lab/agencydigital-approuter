import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
<footer className="my-8 sm:my-16">
        <div className="container mx-auto">
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 md:px-0 lg:px-16">
            <div className="flex flex-col justify-start items-start gap-2 pt-2 md:gap-4 max-w-xs lg:max-w-sm">
              <Image
                src={"/images/logo.png"}
                height={"90"}
                width={"90"}
                alt="logo"
              />
              <p className="text-green-dark text-sm tracking-tight">
                Jasa Pembuatan Website semaumu sesuai kebutuhan bisnismu. Free
                Konsultasi sampai jadi, pembayaran mudah dan inshaallah amanah.
              </p>
              <p className="text-green-dark text-sm font-medium tracking-tight pt-2">
                Design by BuildWithAngga
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-evenly gap-6 items-start">
              <div className="flex flex-col justify-start items-start gap-1 lg:gap-2 px-0 md:px-2 max-w-sm">
                <p className="text-green-dark text-sm font-semibold tracking-tight pt-2">
                  Service
                </p>
                <p className="text-green-dark text-sm font-normal tracking-tight pt-2">
                  Konsultasi Website
                </p>
                <p className="text-green-dark text-sm font-normal tracking-tight pt-2">
                  Jasa Web Developement
                </p>
                <p className="text-green-dark text-sm font-normal tracking-tight pt-2">
                  Maintanance Website 
                </p>
                <p className="text-green-dark text-sm font-normal tracking-tight pt-2">
                  Template Website
                </p>
              </div>
              <div className="flex flex-col justify-start items-start gap-1 lg:gap-2 max-w-sm">
                <p className="text-green-dark text-sm font-semibold tracking-tight pt-2">
                  Company
                </p>
                <p className="text-green-dark text-sm font-normal tracking-tight pt-2">
                  Privacy Policy
                </p>
                <p className="text-green-dark text-sm font-normal tracking-tight pt-2">
                  Help Center
                </p>
                <p className="text-green-dark text-sm font-normal tracking-tight pt-2">
                  Term and Conditions
                </p>
                <p className="text-green-dark text-sm font-normal tracking-tight pt-2">
                  About Us
                </p>
              </div>
              <div className="flex flex-col justify-start items-start gap-1 lg:gap-2 max-w-sm">
                <p className="text-green-dark text-sm font-semibold tracking-tight pt-2">
                  Developer
                </p>
                <p className="text-green-dark text-sm font-normal tracking-tight pt-2">
                  Documentations
                </p>
                <p className="text-green-dark text-sm font-normal tracking-tight pt-2">
                  Product Knowledges
                </p>
                <p className="text-green-dark text-sm font-normal tracking-tight pt-2">
                  Pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>  )
}
