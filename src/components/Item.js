import React from 'react';

const Item = ({ color, idx, wid = '200px' }) => {
    return (
        <li>
            <div className="box" style={{ backgroundColor: color, width: wid, }}>hoho {idx}</div>
            <div >{color} - {wid}</div>
        </li>
    );
};

export default Item;