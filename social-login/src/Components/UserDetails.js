import React from 'react'
import {  useSelector } from 'react-redux';
import "./UserDetails.css"

const UserDetails = () => {
  // const dispatch = useDispatch()
  const data = useSelector((state) => state.SocialLoginData)
  console.warn("data in UserDetails Component..", data);

  return (
    <div className='detail-page-container'>
      <table >
        <thead>
        <tr>
          <td>Id</td>
          <td>Social Platform</td>
          <td>Link</td>
        </tr>
        </thead>
        {
          data.map((item) => <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.platform}</td>
            <td>{item.link}</td>
          </tr>)
        }
      </table>
    </div>
  )
}

export default UserDetails