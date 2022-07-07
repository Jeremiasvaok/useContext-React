
import './App.css';
//components
import Profile from './component/profile.js'
import UserList from './component/userList'
//context
import UserState from './context/user/UserState'

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
   <UserState>
    <div className='container p-4'>
      <div className='row'>
       <div className='col-md-7'>
       <UserList/>
       </div>
       <div className='col-md-5'>
       <Profile/>
       </div>
      </div>
    </div>
   </UserState>
  );
}

export default App;