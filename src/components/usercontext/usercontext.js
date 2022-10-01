import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserDataProvider=(props)=>{
    const [users, setUsers]=useState([
        {
            id : '1',
            name : 'Delowar Hossain',
            address : 'Ghoraghat, Dinajpur',
            qualification : 'BSc in CSE',
            mobile : '01738118208'
        },
        {
            id : '2',
            name : 'Mainul Hossain',
            address : 'Bhandaria, Pirojpur',
            qualification : 'Honors',
            mobile : '01720865321'
        },
        {
            id : '3',
            name : 'A B M Saiful Islam',
            address : 'Maizdi, Noakhali',
            qualification : 'Honors',
            mobile : '01938113625'
        },
    ]);
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}


