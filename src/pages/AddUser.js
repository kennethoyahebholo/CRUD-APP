import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import './index.css'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addUser } from '../redux/action';

const AddUser = () => {
 const [state, setState] = useState({
  name:'',
  email:'',
  contact:'',
  address:''
 })

 const [error, setError] = useState("")
 let history = useHistory()
 const dispatch = useDispatch()

 const {name, email , contact, address} = state

 const handleInputChange = (e) => {
  const {name, value} = e.target;
  setState({...state, [name]:value})
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  if( !name || !address || !email || !contact){
   setError("Please fill all input field!")
  }else{
    dispatch(addUser(state))
    history.push("/")
    setError("")
  }
 }
  return (
    <div className='addUserCon'>
     <Button className='btn2' variant="contained" type="submit" color="primary"
     onClick={()=> history.push("/")}
     >Back To List</Button>
      <h4>Add User</h4>
      {error && <h3>{error}</h3>}
      <TextField className='input' value={name} name="name" type='text' id="outlined-basic" label="Name" variant="outlined" onChange={handleInputChange}/>
      <br/>
      <br/>
      <TextField className='input' value={email} name="email" type='email' id="outlined-basic" label="Email" variant="outlined"  onChange={handleInputChange} />
      <br/>
      <br/>
      <TextField className='input' value={contact} name="contact" type='number' id="outlined-basic" label="Contact" variant="outlined"  onChange={handleInputChange}/>
      <br/>
      <br/>
      <TextField className='input' value={address} type='text' name="address" id="outlined-basic" label="Address" variant="outlined"  onChange={handleInputChange}/>
      <br/>
      <br/>
      <div className="btn_con2">
      <Button  variant="contained" type="button" onClick={handleSubmit} color="primary">Add</Button>
      </div>
    </div>
  )
}

export default AddUser