import React from 'react'
import { useState } from 'react'
export const DashboardContext=React.createContext();

function DashboardContextComponent( {children}) {

    let [data,setData]=useState([
        { tittle:"Earning(Monthly)",
        value:"$40,000",
        color:"primary",
        icon:"calendar",
        isProgress:false
         },
       { tittle:"Earning(Annual)",
        value:"$60,000",
        color:"success",
        icon:"dollar-sign",       
        isProgress:false
       },
       { tittle:"Task",
        value:"50%",
        color:"info",
        icon:"clipboard-list",
        isProgress:true
       },
       { tittle:"Pending Request",
        value:"18",
        color:"warning",
        icon:"comments",
        isProgress:false
       }
      ]) 

  return <>
  <DashboardContext.Provider value={{data,setData}}>
    {children}
  </DashboardContext.Provider>
  </>
}

export default DashboardContextComponent