import { useEffect, useState } from 'react';
import PortfolioList from '../portfoliolist/PortfolioList';
import './Portfolio.scss';
import {
  featuredProject,
  webApp,
  cssProject,
  jsProject
} from '../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'css',
      title: 'Css Projects',
    },
    {
      id: 'js',
      title: 'Js Project',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredProject);
        break;
      case 'web':
        setData(webApp);
        break;
      case 'css':
        setData(cssProject);
        break;
      case 'js':
        setData(jsProject);
        break;
      default:
        setData(featuredProject);
    }
  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Project</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.length===0 ? <h2>Nothing Posted Yet.</h2> :
         data.map((d) => (
          <a key={d.id} href={d.link} target='_blank' rel="noreferrer">
            <div className='item'>
              <img src={d.img} alt='' />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
