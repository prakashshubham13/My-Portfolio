import './App.scss';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Works from './components/works/Works';
import Portfolio from './components/portfolio/Portfolio';
import { useState } from "react";
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
const App = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Experience/>
      <Contact/>
    </div>
   </div>
  )
}

export default App;
