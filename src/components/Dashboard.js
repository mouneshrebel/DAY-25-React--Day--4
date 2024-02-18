import React,{useState,useContext} from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { UsersContext } from '../Context/UsersContextComponent';
import { DashboardContext } from '../Context/DashboardContextComponent';


function Dashboard() {
  let navigate = useNavigate()
  
  let userContext = useContext(UsersContext)//props drilling
  let dashboardContext = useContext(DashboardContext)

  
   return <>
  <div id="content-wrapper" className="d-flex flex-column">

{/* <!-- Main Content --> */}
<div id="content">

   

    {/* <!-- Begin Page Content --> */}
    <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">

        {
          dashboardContext.data.map((e,i)=>{
            return <Card key={i}
            input={e}
           />
           })
            
           }
           
        </div>
    <div>
      <div className="container-fluid">
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>S:NO</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Dob</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
       userContext.users.map((e,i)=>{
           return <tr key={i}>
           <td>{i+1}</td>
           <td>{e.name}</td>
           <td>{e.email}</td>
           <td>{e.mobile}</td>
           <td>{e.dob}</td>
           
           <td>
            <Button variant='primary' onClick={()=>navigate(`/edit-user/${i}`)}>Edit</Button>
            &nbsp;&nbsp;
            <Button variant='danger' onClick={()=>{
              let newArray=[...userContext.users]
              newArray.splice(i,1)
              userContext.setUsers(newArray)
            }}>Delete</Button>
           </td>
           </tr>
            
       })

       }

      </tbody>
    </Table>
    </div>
    </div>
</div>



</div>
</div>
  </>  
  
}

export default Dashboard