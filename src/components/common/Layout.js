import React, { useState } from 'react';
import Popup from './Pupup.js'

const Layout = () => {

    const user = { name: 'jong', age: 10 };
    const [userChange, setUserChange] = useState(user);

    const handleChangeUser = e => {
        setUserChange({...user, name: e.target.value})
        // setUserChange(prevState => { 
        //     return {...prevState, name: e.target.value} 
        // })
    }

    // const [isPop, setIsPop] = useState(false);

    // const handlePopClick = e => {
    //     setIsPop(!isPop)
    // }

    return (
        <div>
            <input type="text" onChange={handleChangeUser}/>
            <div>
               {userChange.name} / {user.age}
            </div>


            {/* <button onClick={handlePopClick}>pop on</button>
            { isPop && <Popup /> } */}
        </div>
    );

};

export default Layout;