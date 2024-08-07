import { useEffect, useState } from 'react';
import PortfolioList from '../portfoliolist/PortfolioList';
import './Portfolio.scss';
import { featuredProject, webApps, blogs, packages, api, mobile, desktop } from '../../data';

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
    {
      id: 'mobile',
      title: 'Mobile Apps',
    },
    {
      id: 'desktop',
      title: 'Desktop Apps',
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
        case 'mobile':
          setData(mobile);
          break;
         case 'desktop':
          setData(desktop);
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
                <a href={d?.deployed_link} style={d?.deployed_link?{}:{background:'grey',pointerEvents:'none'}} target='_blank' rel='noreferrer'>
                  Open
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
