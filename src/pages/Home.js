import React,{useEffect} from 'react';
import { makeStyles, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector, useDispatch} from 'react-redux'
import { deleteUser, loadUsers } from '../redux/action';
import { useHistory } from 'react-router-dom'

 

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Home = () => {
 const dispatch = useDispatch()
 const { users } = useSelector(state => state.data)
 let history = useHistory()

 const handleDelete =(id) => {
  if(window.confirm("Are you sure you want to delete this user ?")){
   dispatch(deleteUser(id))
  }
 }


 useEffect(()=>{
  dispatch(loadUsers())
 },[])
  return (
    <div className='main_con'>
     <div className="btn_con">
     <Button  variant="contained" color="primary" onClick={()=> history.push("./addUser")}>Add User</Button>
     </div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.contact}</StyledTableCell>
              <StyledTableCell align="center">{user.address}</StyledTableCell>
              <StyledTableCell align="center">
              <ButtonGroup variant="contained" aria-label="contained primary button group" >
               <div className="btn">
                <Button  onClick={()=>handleDelete(user.id)} style={{marginRight:"5px", backgroundColor:"#860000"}} color="secondary">Delete</Button>
                </div>
               <div className="btn">
                <Button  color="primary" onClick={()=> history.push(`/editUser/${user.id}`)}>Edit</Button>
                </div>              
              </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home