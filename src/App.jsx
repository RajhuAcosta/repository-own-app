import { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import PhilosophyAndValues from './components/PhilosophyAndValues';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkillSet from './components/SkillSet';
import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Agregar un event listener para actualizar el ancho de la ventana cuando cambie el tamaño de la ventana.
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Limpieza del event listener al desmontar el componente.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="font-[Sen] min-h-screen">
      <Header windowWidth={windowWidth}/>
      <Presentation/>
      {/* <WorkExperience/> */}
      <PhilosophyAndValues/>
      <SkillSet/>
      <MyProjects/>
      {/* <Dribbble/> */}
      <Contact useForm={useForm} ValidationError={ValidationError}/>
      <Footer windowWidth={windowWidth}/>
    </div>
  )
}

export default App
