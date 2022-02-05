import './Navbar.scss'
// import EmailIcon from '@material-ui/icons/Email';
// import {PersonIcon} from '@mui/icons-material';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Achiever
          </a>
          <div className="itemContainer">
            <span>+6204266219</span>
          </div>
          <div className="itemContainer">
            <span>shubhamprakash2000513@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
