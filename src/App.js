import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import Footer from "./components/Footer";
import Referances from "./components/pages/Referances";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/üretimlerimiz" component={Products} />
        <Route path="/hakkimizda" component={AboutUs} />
        <Route path="/iletisim" component={ContactUs} />
        <Route path="/referanslar" component={Referances} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
