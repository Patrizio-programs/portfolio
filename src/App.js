import About from "./container/About/About";
import Work from "./container/Work/Work";
import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";
import Navbar from "./components/Navbar";
import "./App.scss";

import emailjs from "@emailjs/browser";

(function () {
  emailjs.init("LfuScSUIeiHe69orR");
})();

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
