import React from 'react';
import { connect } from 'react-redux';

import './ChocolateBox.css';

const ChocolateBox = props => {
    const chocolateBoxes = Array.from({ length: 12 });
    return (
        <section className='chocolate-box-section'>
            <h2>Chocolate Box!</h2>

            <div className='chocolate-box'>

                {chocolateBoxes.map((box, index) => (
                    <div 
                        className={props.box[index] ? 'chocolate-on-box ' + props.box[index] : 'chocolate-on-box'}
                        key={index}
                    ></div>
                ))}
            </div>
        </section>
    );
};

const mstp = state => ({
    box: state.box,
});

export default connect(mstp)(ChocolateBox);