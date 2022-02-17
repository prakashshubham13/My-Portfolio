import './App.scss';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Works from './components/works/Works';
import Portfolio from './components/portfolio/Portfolio';
import { useState } from "react";
import Menu from './components/menu/Menu';
import Contact from './components/contact/Contact';
import { CloudDownload } from '@material-ui/icons';
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <a className='download' href="assets/Shubham Resume.pdf" download>Download Resume <CloudDownload className='icon' /></a>
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  )
}

export default App;
