import React from "react";
import CardPrice from "../Atom/CardPrice";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

export default function TabWordpress() {
  return (
    <div className="w-full flex flex-1 flex-row justify-center gap-2 my-8">
      <section className="bg-white h-full overflow-scroll lg:overflow-hidden">
        <div className="py-4 sm:px-4 lg:py-8">
          <div className="hidden space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <CardPrice
              title="Reguler"
              desc="Landing page untuk FB ads, Instagram Ads, dll"
              price="78K"
              bandage={false}
              features={[
                "1 Page",
                "Bebas Pilih Template Design",
                "1 Sub Domain (svara.tertanam.com)",
                "No Hidden, or Setup fees",
              ]}
              href="https://wa.me/6283863011200?text=I'm%20interested%20to%20order%20Reguler%20Pack!"
            />
            <CardPrice
              title="Premium"
              desc="Website untuk FB ads, Instagram ads, detail usaha dan produk "
              price="98K"
              bandage={true}
              features={[
                "1-3 Page",
                "Bebas Pilih Template Design",
                "1 Sub Domain (svara.tertanam.com)",
                "No Hidden, or Setup fees",
                "Free 1x update Design per 3 bulan",
              ]}
              href="https://wa.me/6283863011200?text=I'm%20interested%20to%20order%20Premium%20Pack!"
            />
            <CardPrice
              title="Full Custom"
              desc="Custom Landing Page full sesuai desain yang kamu mau"
              price="269K"
              bandage={false}
              features={[
                "1-9 Page",
                "Free Design by You",
                "Free 1 Domain ( .com )",
                "No Hidden, or Setup fees",
                "Premium Support 24 Jam",
                "Free 1x Update Design perbulan",
              ]}
              href="https://wa.me/6283863011200?text=I'm%20interested%20to%20order%20Full%20Custom%20Pack!"
            />
          </div>
          <div className="block lg:hidden">
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              loop={true}
              className="mySwiper"
              initialSlide={1}
            >
              <SwiperSlide className="py-4 px-2">
                <CardPrice
                  title="Reguler"
                  desc="Landing page untuk FB ads, Instagram Ads, dll"
                  price="78K"
                  bandage={false}
                  features={[
                    "1 Page",
                    "Bebas Pilih Template Design",
                    "1 Sub Domain (svara.tertanam.com)",
                    "No Hidden, or Setup fees",
                  ]}
                  href="https://wa.me/6283863011200?text=I'm%20interested%20to%20order%20Reguler%20Pack!"
                />
              </SwiperSlide>
              <SwiperSlide className=" py-4 px-2">
                <CardPrice
                  title="Premium"
                  desc="Website untuk FB ads, Instagram ads, detail usaha dan produk "
                  price="98K"
                  bandage={true}
                  features={[
                    "1-3 Page",
                    "Bebas Pilih Template Design",
                    "1 Sub Domain (svara.tertanam.com)",
                    "No Hidden, or Setup fees",
                    "Free 1x update Design per 3 bulan",
                  ]}
                  href="https://wa.me/6283863011200?text=I'm%20interested%20to%20order%20Premium%20Pack!"
                />
              </SwiperSlide>
              <SwiperSlide className="py-4 px-2">
                <CardPrice
                  title="Full Custom"
                  desc="Custom Landing Page full sesuai desain yang kamu mau"
                  price="269K"
                  bandage={false}
                  features={[
                    "1-9 Page",
                    "Free Design by You",
                    "Free 1 Domain ( .com )",
                    "No Hidden, or Setup fees",
                    "Premium Support 24 Jam",
                    "Free 1x Update Design perbulan",
                  ]}
                  href="https://wa.me/6283863011200?text=I'm%20interested%20to%20order%20Full%20Custom%20Pack!"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
