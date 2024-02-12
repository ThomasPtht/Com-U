import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Services from "../components/Services";
import CounterUp from "../components/CounterUp";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CallAction from "../components/CallAction";

function Home(props) {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <CounterUp />
      <Services />
      <Team />
      <Testimonials />
      <CallAction />
      <Footer />
    </>
  );
}

export default Home;
