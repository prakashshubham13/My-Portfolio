import { useState } from 'react';
import './Works.scss';
import arrow from '../../assets/arrow.png';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: '1',
      icon: '',
      title: 'Frontend Developer Intern at Epikindifi',
      desc: 'July 2021 - Present',
      img: 'assets/e1.png',
    },
    {
      id: '2',
      icon: '',
      title: 'Full Stack Intern at HighRadius',
      desc: 'January 2021 - June 2021',
      img: 'assets/e2.png',
    },
    {
      id: '3',
      icon: '',
      title: 'Web Developer Instructor at College IT Society Konnexions',
      desc: 'August 2020 - April 2021',
      img: 'assets/e3.png',
    },
  ];

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='works' id='works'>
      <h1>Experience</h1>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d?.id} className='container'>
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  <div className='imgContainer'>
                    <img src={d.icon} alt='' />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className='right'>
                <img
                  src={d?.img}
                  alt=''
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        className='arrow left'
        alt=''
        onClick={() => handleClick('left')}
      />
      <img
        src={arrow}
        className='arrow right'
        alt=''
        onClick={() => handleClick()}
      />
    </div>
  );
}
