import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import down from "../../assets/down.png";
import me from '../../assets/me.png';
import myprofile from '../../assets/myprofile.jpg';


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Programmer", "Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={myprofile} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shubham Prakash</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
          {/* <a href="/images/myw3schoolsimage.jpg" download> Download Resume</a> */}
        </div>
        <a href="#portfolio">
          <img src={down} alt="abc" />
        </a>
      </div>
    </div>
  );
}
