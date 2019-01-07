import React from 'react';

import importedChocolates from '../chocolates.json';
import Chocolate from '../containers/Chocolate';

import './ChocolatesList.css';

const ChocolatesList = props => {
    return (
        <section className='chocolates-list-section'>
            <h2>Chocolates</h2>

            <ul className='chocolates-list'>
                {importedChocolates.map(chocolate => (
                    <Chocolate
                        key={chocolate.id}
                        name={chocolate.name}
                    />
                ))}
            </ul>
        </section>
    );
};

export default ChocolatesList;