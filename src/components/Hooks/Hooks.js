// import React from 'react'
// import { Outlet, useNavigate } from 'react-router-dom'
// function Hooks() {
//     let navigate = useNavigate()

//     return <>
//         <div style={{ display: "flex", flexDirection:"column" }}>
//             <h3>Hooks in React</h3>
               
//            <div>
//            <ul>
//                 <li onClick={() => { navigate("useref") }} style={{cursor:"pointer"}}>UseRef</li>
//                 <li onClick={() => { navigate("usememo") }} style={{cursor:"pointer"}}>UseMemo/useCallback</li>
//             </ul>

//            </div>
//             <div classname="container-fluid">
//                 <Outlet />
//             </div>

//         </div>
//     </>
// }

// export default Hooks;

//(OR):::

//--------THIS FOR USEID________________________:
import React from 'react'
import { useId } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
function Hooks() {
    let navigate = useNavigate()
    let listItemId = useId()
    let hooks = [
        {
            link:"useref",
            title:"UseRef"
        },
        {
            link:"usememo",
            title:"UseMemo"
        }, 
        {
            link:"usereducer",
            title:"UseReducer"
        }
    ]
  return <div style={{dislay:"flex",flexDirection:"coumn"}}>

    <h3> Hooks in React </h3>
    <div>
        <ul>
            {
                hooks.map((e,i)=>{
                    return <RenderList link={e.link} title={e.title}/>
                })
            }
        </ul>
    </div>
    <div className="container-fluid">
        <Outlet/>
    </div>
  </div>
}

export default Hooks

function RenderList({link,title}){
    let navigate = useNavigate()
    let listItemId = useId()
return <li onClick={()=>navigate(`${link}`)} style={{cursor:"pointer"}} id={listItemId}>
    {title}
</li>
}