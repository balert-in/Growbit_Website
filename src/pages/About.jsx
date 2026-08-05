import React from "react";
import AboutHero from "../components/About/AboutHero";
import Stats from "../components/About/Stats";
import Journey from "../components/About/Journey";
import Timeline2 from "../components/About/Timeline2";
// import CEONote from '../components/About/CEONote'
import OurClients from "../components/About/OurClients";
import ActiveProjects from "../components/About/ActiveProjects";
import CTA from "../components/Home/CTA";
import Navbar from "../components/common/Navbar";

const About = () => {
  return (
    <div className="w-full bg-[#09090b] min-h-screen">
      <Navbar />
      <AboutHero />
      <Stats />
      <Journey />
      <Timeline2 />
      {/* <CEONote /> */}
      <ActiveProjects />
      <OurClients />
      <CTA />
    </div>
  );
};

export default About;
