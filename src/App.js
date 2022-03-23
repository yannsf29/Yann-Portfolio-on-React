import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <AboutMe></AboutMe>
      <Services></Services>
      <Skills></Skills>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
