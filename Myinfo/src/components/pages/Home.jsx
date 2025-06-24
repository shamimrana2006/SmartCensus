import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Contact from "../universals/for home page/Contact";
import HeroSection from "../universals/for home page/HeroSection";
import CountingSection from "../universals/for home page/CountingSection";
import CertificateSEction from "../universals/for home page/CertificateSEction";
import GovernmentAllowance from "../universals/for home page/GovernmentAllowance";
import OurMission from "../universals/for home page/OurMission";
import imageDonation from "../../assets/important image/donation.jpg";
import { AuthContext } from "../../AuthContext/AuthContext";

export default function Home() {
  const {user} = useContext(AuthContext);
  return ( 
    <div className="py-20">
      <div className="container mx-auto">
        {/* hero section */}
        <section className="mb-10">
          <HeroSection />
        </section>
        {/* certification section */}
        <section className={user ? "" : "hidden"}>
          <CertificateSEction />
        </section >
        {/* this is counting people  */}
        <CountingSection />
        <section>
            <h1 className="text-center font-bold mb-8 text-2xl md:text-5xl">
        Government Allowance
        </h1>
        <div className="h-[820px] overflow-hidden rounded-[50px] shadow-2xl relative">
            <img className="h-full w-full object-cover  "  src={imageDonation} alt="" />
        </div>
        </section>
        {/* Government allowance */}
        <section className="my-10">
          <GovernmentAllowance />
        </section>
        {/* Our mission */}
        <section className="my-10">
          <OurMission />
        </section>
        {/* contact */}
        <section id="contact">
          <div className="container mx-auto ">
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
}
