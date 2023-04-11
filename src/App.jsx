import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Carosel from "./components/carosel/Carosel";
import Main from "./components/shop/body/Main";
import Footer from "./components/footter/Footer";

const App = () => {
  return (
    <section className="rootFile">
      <div className="div1">
        <Navbar />
        <Carosel />
      </div>
      <div className="secondBlock">
        <Main />
      </div>
      <div >
        <Footer />
      </div>
    </section>
  );
};

export default App;
