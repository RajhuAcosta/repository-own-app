import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import PhilosophyAndValues from "./components/PhilosophyAndValues";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkillSet from "./components/SkillSet";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [language, setLanguage] = useState("english");
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const language = navigator.language || navigator.userLanguage;
    if (language.startsWith("en")) {
      setLanguage("spanish");
    }
  }, []);
  return (
    <div className="font-[Sen] min-h-screen">
      <Header
        language={language}
        setLanguage={setLanguage}
        windowWidth={windowWidth}
      />
      <Presentation language={language} />
      {/* <WorkExperience/> */}
      <PhilosophyAndValues language={language} />
      <SkillSet language={language} />
      <MyProjects language={language} />
      <Contact
        language={language}
        useForm={useForm}
        ValidationError={ValidationError}
      />
      <Footer language={language} windowWidth={windowWidth} />
    </div>
  );
}

export default App;
