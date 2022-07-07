import React,{ useContext , useEffect } from "react"

import UserContext from "../context/user/userContext"

export default function UserList(){
   
 const userContext= useContext(UserContext)

useEffect(()=>{
    userContext.getUsers();
  },[])

    return(
        <div className="list-group h-100">
         {
            userContext.users.map(u => (
                <a 
                href="#!" 
                className="list-group-item list-group-item-action d-flex flex-row justify-content-start" 
                key={u.id}
                onClick={() => userContext.getProfile(u.id)}
                >
                   <img src={u.avatar}  alt='avatar' className="img-fluid mr-4 rounded-circle " width={70}/>
                   <p>
                    {u.first_name} {u.first_name}
                    </p>
                </a>
            ))            
         }
        </div>
    )
}