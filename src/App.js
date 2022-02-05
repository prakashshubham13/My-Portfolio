import './App.scss';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Works from './components/works/Works';
import Portfolio from './components/portfolio/Portfolio';
import { useState } from "react";
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Menu from './components/menu/Menu';
const App = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
    </div>
   </div>
  )
}

export default App;
