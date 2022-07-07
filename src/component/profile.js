import UserContext from '../context/user/userContext'
import {useContext } from 'react'
export default function Profile(){

    const userContext = useContext(UserContext)
    return(
        <>
      {
       userContext.selectedUser ? (
       <div className='card card-body text-center'>
        <img src={userContext.selectedUser.avatar} alt='avatar' className='card img-top rounded-circle m-auto img-fluid' style={{width: 180}}/>
        <h1>{ userContext.selectedUser.first_name}  { userContext.selectedUser.last_name}</h1>
        <h3>email: {userContext.selectedUser.email}</h3>
     </div>) : 
       (<h1>
          User not fount
       </h1>)}
</>
    )
}