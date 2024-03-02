import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Qualifications from "./components/Qualifications/Qualifications";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

const App = () => {
  return (
    <>
      {/* header component */}
      <Header />
      {/* main components */}
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Work />
        <Contact />
      </main>
      {/* footer component */}
      <Footer />
      {/* Sroll to top component */}
      <ScrollUp />
    </>
  );
};

export default App;
