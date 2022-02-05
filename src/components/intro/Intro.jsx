import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import down from "../../assets/down.png";
import me from '../../assets/me.png';


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
          <img src={me} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shubham Prakash</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="abc" />
        </a>
      </div>
    </div>
  );
}