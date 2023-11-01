import { useEffect, useState } from 'react'
import './App.css'
import Contact from './components/Contact'
// import Dribbble from './components/Dribbble'
import Footer from './components/Footer'
import Header from './components/Header'
import MyProjects from './components/MyProjects'
import PhilosophyAndValues from './components/PhilosophyAndValues'
import Presentation from './components/Presentation'
import SkillSet from './components/SkillSet'
// import WorkExperience from './components/WorkExperience'
import { useForm } from "react-hook-form";

function App() {
  const { handleSubmit, register} = useForm();
  const submit = () => {
    // Función de contacto : Enviar correo
    alert("Mensaje enviado al correo exitosamente");
  }
  
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
      <Contact handleSubmit={handleSubmit} submit={submit} register={register} />
      <Footer windowWidth={windowWidth}/>
    </div>
  )
}

export default App
