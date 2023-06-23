import React from 'react';

const Pupup = () => {


    const style = {
        width: 600,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#555',
        fontSize: '30px',
        color: '#fff',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }


    return (
        <aside style={style}>
            popup
        </aside>
    );
};

export default Pupup;