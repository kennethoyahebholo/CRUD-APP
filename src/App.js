import {Routes, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'

import './App.css';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
// import { Switch } from '@mui/material';

const App = () => {
  return (
    <>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/addUser" component={AddUser}></Route>
        <Route exact path="/editUser/:id" component={EditUser}></Route>
      </Switch>
      {/* <Home/> */}
    </div>
    {/* <p>hello world</p> */}
    </>
  )

}

  
  export default App