import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import OurStory from "./components/OurStory";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return(
    <>
      <Header />
      
      <main>
        <Hero />
        <Services />
        <OurStory />
        <Stats />
        <WhyChooseUs />
        <Works />
        <Testimonials />
        <OurTeam />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;