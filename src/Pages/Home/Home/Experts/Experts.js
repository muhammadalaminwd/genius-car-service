import React from 'react';
import expert1 from '../../../../images/images/experts/expert-1.jpg'
import expert2 from '../../../../images/images/experts/expert-2.jpg'
import expert3 from '../../../../images/images/experts/expert-3.jpg'
import expert4 from '../../../../images/images/experts/expert-4.jpg'
import expert5 from '../../../../images/images/experts/expert-5.jpg'
import expert6 from '../../../../images/images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    {id: 1, name: 'Will Smith', img: expert1},
    {id: 1, name: 'Rock Rock', img: expert2},
    {id: 1, name: 'Chris rock', img: expert3},
    {id: 1, name: 'Dwayne rock', img: expert4},
    {id: 1, name: 'Ronaldo', img: expert5},
    {id: 1, name: 'Messy', img: expert6}
]

const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center'>Our Experts</h2>
            <div className="row">
            {
                experts.map(expert => <Expert
                    key={expert.id}
                    expert = {expert}
                    ></Expert>)
            }
            </div>
        </div>
    );
};

export default Experts;<h2>Our Experts</h2>