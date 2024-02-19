import Navbar from "@/components/Navbar";
import TabService from "@/components/Molekul/TabService";
import { Inter } from "next/font/google";
import Footer from "@/components/Organism/Footer";
import Heroes from "@/components/Organism/Heroes";
import CountClient from "@/components/Organism/CountClient";
import Review from "@/components/Organism/Review";
import DesignHero from "@/components/Organism/DesignHero";
import CaraOrder from "@/components/Organism/CaraOrder";
import Client from "@/components/Organism/Client";
import SubHero from "@/components/Organism/SubHero";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`p-0 m-0 bg-[#EDF3F1] overflow-hidden ${inter.className}`}>
        <Heroes />
        {/* <Client /> */}
        <CountClient />
      </main>
      <TabService />
      <SubHero/>
      <CaraOrder />
      <Review />
      <DesignHero />
      <Footer />
    </>
  );
}
