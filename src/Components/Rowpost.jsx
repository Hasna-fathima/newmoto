import React from 'react';
import './rowpost.css'; 
import dirt from '../assets/dirt.png'

function Rowpost(props) {
 
  const movies = [
    { title: 'Lorem ipsum dolor sit amit,Ut wisi ad min.', backdrop_path:dirt  },
    { title: 'Lorem ipsum dolor sit amit,Ut wisi ad min.', backdrop_path: dirt},
    { title: 'Lorem ipsum dolor sit amit,Ut wisi ad min.', backdrop_path: dirt },
    { title: 'Lorem ipsum dolor sit amit,Ut wisi ad min.', backdrop_path:dirt  },
    { title: 'Lorem ipsum dolor sit amit,Ut wisi ad min.', backdrop_path: dirt},
    { title: 'Lorem ipsum dolor sit amit,Ut wisi ad min.', backdrop_path: dirt },
    { title: 'Lorem ipsum dolor sit amit,Ut wisi ad min.', backdrop_path:dirt  },
    { title: 'Lorem ipsum dolor sit amit,Ut wisi ad min.', backdrop_path: dirt},
    { title: 'Lorem ipsum dolor sit amit,Ut wisi ad min.', backdrop_path: dirt },
    
  ];

  return (
    <div className="row">
        <h2><span className='guid'>Guid</span> for you</h2>
      <h2>{props.title.split('dolar sit anet')[0]}
        <span className='yellow-text'>dolar sit anet</span>
        {this.props.title.split('dolar sit anet')[1]}
      </h2>
      <div className="posters">
        {movies.map((obj, index) => (
          <div key={index} className="poster-container">
            <img
              className={props.isSmall ? 'smallposter' : 'poster'}
              alt={obj.title}
              src={obj.backdrop_path}
            />
            <div className="poster-title">{obj.title}</div>
          </div>
        ))}
      </div>
      <h2><span className="guid">Testimonials</span> for you</h2>
    </div>
  );
}

export default Rowpost;