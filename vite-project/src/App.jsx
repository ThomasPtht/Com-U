import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <About />
      <Services />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
