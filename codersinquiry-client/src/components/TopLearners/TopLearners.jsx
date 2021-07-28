import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/python.png'


const topLearnerData = [
    {
      name: 'Anonymous',
      image: logo,
      position: 1,
      id: 'axyz1fc4',
    },
    {
      name: 'Anonymous',
      image: logo,
      position: 2,
      id: 'axyz1fc4',
      },
      {
        name: 'Anonymous',
        image: logo,
        position: 3,
        id: 'axyz1fc4',
      },
      {
      name: 'Anonymous',
      image: logo,
      position: 4,
      id: 'axyz1fc4',
      },
      {
      name: 'Anonymous',
      image: logo,
      position: 5,
      id: 'axyz1fc4',
      },
]
const TopLearners = () => {
    return (
        <Container>
        <h1 className="p-5 text-center">Top Learner</h1>
         <div style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset', borderRadius: '5px'}}>  {
            topLearnerData.map(datum => 
               <div className="d-flex justify-content-around p-4">
                    <div className="d-flex m-1">
                        <p className="p-2">{datum.position}</p>
                        <img className="p-2" src={datum.image} alt={datum.name} style={{width: '50px', borderRadius: '50%'}}/>
                        <p className="p-2">{datum.name}</p>
                    </div>
                    <p>{datum.id}</p>
               </div>           
            )
         }
      </div>
    </Container>
    );
};

export default TopLearners;