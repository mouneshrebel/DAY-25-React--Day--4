import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Profile() {
  return<>
  <div>
    <h1>Profile</h1>
    <h3>the Sub Component are:</h3>
    <ul>
      <Link to="details"><li>Profile Details</li></Link>
      <Link to="reset-password"><li>Reset Password</li></Link>
    </ul>
    <Outlet/>
    {/* this for nested Route */}
  </div>

  </>
}

export default Profile