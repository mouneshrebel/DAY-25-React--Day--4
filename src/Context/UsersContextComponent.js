import React from 'react'
import { useState } from 'react';
export const UsersContext = React.createContext()//props drilling

function UsersContextComponent({children}) {
  
    let [users,setUsers]=useState([
        {
          name:"jana",
          email:"jana@gmail.com",
          mobile:"9294870987",
          dob:"2001-12-09"
        },
        {
          name:"ajay",
          email:"ajay@gmail.com",
          mobile:"9294870987",
          dob:"2001-12-09"
        },
        {
          name:"kabilan",
          email:"kabilan@gmail.com",
          mobile:"9294870987",
          dob:"2001-12-09"
        },
        {
          name:"arun",
          email:"arun@gmail.com",
          mobile:"9294870987",
          dob:"2001-12-09"
        } 
        
       ])

  return <>
  <UsersContext.Provider value={{users,setUsers}}>
    {children}
  </UsersContext.Provider>
  </>
}

export default UsersContextComponent