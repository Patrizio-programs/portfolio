import React, {useState, useEffect} from 'react'
import { urlFor, client } from '../../client';
import AppWrap from '../../Wrapper/AppWrap';

import './Work.scss'

const Work = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      
    });
  }, []);

  return (
    <>
      <h2 className="head-text">My <span>Portfolio</span></h2>
      <div className='project__container' id='work'>

        {works.map((work, index) => (

        <div 
        whileinview={{ opacity: 1 }}
        whilehover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__work-item app__flex"
            key={work.title + index}>
          <div className="app__work-item-img app__flex project">
             
              <img src={urlFor(work.imgUrl)} alt={work.title} width='auto' height='auto' />
              
              <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <a href={work.projectLink} target='blank'>Click here to see this project</a>

                <div className="app__flex">
                  {work.tags.map((tag, index) => (
                    <p className='p-text app__work-tag' key={tag + index}>{tag}</p>
                  ))}
               
              </div>
            </div>
            
              
              
            
            

            </div>
            
            </div>
        ))}
      
      </div>
    
    
    </>
  )
}

export default AppWrap(Work, 'work');