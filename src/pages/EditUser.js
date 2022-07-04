import React,{useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import './index.css'
import {useHistory, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addUser, getSingleUser, updateUser } from '../redux/action';

const EditUser = () => {
 const [state, setState] = useState({
  name:'',
  email:'',
  contact:'',
  address:''
 })

 const [error, setError] = useState("")
 let {id} = useParams()
 const {user} = useSelector(state => state.data)
 let history = useHistory()
 const dispatch = useDispatch()

 const {name, email , contact, address} = state

 useEffect(()=>{
  dispatch(getSingleUser(id))
 },[])

 useEffect(()=>{
  if(user){
   setState({...user})
  }
 },[user])

 const handleInputChange = (e) => {
  const {name, value} = e.target;
  setState({...state, [name]:value})
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  if( !name || !address || !email || !contact){
   setError("Please fill all input field!")
  }else{
    dispatch(updateUser(state, id))
    history.push("/")
    setError("")
  }
 }
  return (
    <div className='addUserCon'>
     <Button className='btn2' variant="contained" type="submit" color="primary"
     onClick={()=> history.push("/")}
     >Back To List</Button>
      <h4>Edit User</h4>
      {error && <h3 style={{color:"red"}}>{error}</h3>}
      <TextField className='input' value={name || ""} name="name" type='text' id="outlined-basic" label="Name" variant="outlined" onChange={handleInputChange}/>
      <br/>
      <br/>
      <TextField className='input' value={email || ""} name="email" type='email' id="outlined-basic" label="Email" variant="outlined"  onChange={handleInputChange} />
      <br/>
      <br/>
      <TextField className='input' value={contact || ""} name="contact" type='number' id="outlined-basic" label="Contact" variant="outlined"  onChange={handleInputChange}/>
      <br/>
      <br/>
      <TextField className='input' value={address || ""} type='text' name="address" id="outlined-basic" label="Address" variant="outlined"  onChange={handleInputChange}/>
      <br/>
      <br/>
      <div className="btn_con2">
      <Button  variant="contained" type="button" onClick={handleSubmit} color="primary">Update</Button>
      </div>
    </div>
  )
}

export default EditUser