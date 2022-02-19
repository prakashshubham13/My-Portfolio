import { useEffect, useState } from 'react';
import PortfolioList from '../portfoliolist/PortfolioList';
import './Portfolio.scss';
import { featuredProject, webApps, blogs, packages, api } from '../../data';

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
      title: 'Web Apps',
    },
    {
      id: 'blogs',
      title: 'Blogs',
    },
    {
      id: 'api',
      title: 'Api',
    },
    {
      id: 'packages',
      title: 'Packages',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredProject);
        break;
      case 'web':
        setData(webApps);
        break;
      case 'blogs':
        setData(blogs);
        break;
        case 'api':
          setData(api);
          break;  
      case 'packages':
        setData(packages);
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
        {data.length === 0 ? (
          <h2>Nothing Posted Yet.</h2>
        ) : (
          data.map((d) => (
            <div className='card__out' key={d.title}>
              <div className='item'>
                <img src={d.img} alt='' />
                <h3>{d.title}</h3>
              </div>
              <div className='project__options'>
                <a href={d.img} target='_blank' rel='noreferrer'>
                  Preview
                </a>
                <a key={d.id} href={d.link} target='_blank' rel='noreferrer'>
                  Source Code
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
