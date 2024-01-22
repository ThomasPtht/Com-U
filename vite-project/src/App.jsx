import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <About />
      <h2 className="p-6 text-lg font-semibold">
        Nos services de marketing numérique{" "}
      </h2>
      <Services />
    </div>
  );
}

export default App;
