import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const tokenrelease=()=>{
sessionStorage.removeItem('userToken');
  }
  return (
    <div>
<Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static" style={{backgroundColor:'purple'}} >
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ToDoApp
          </Typography>
          <Button ><Link to={'/'} style={{color:'white',textDecoration:'none'}}>Tasks</Link></Button>
          <Button color="inherit"><Link to={'/add'} style={{color:'white',textDecoration:'none'}}>Add Task</Link></Button>
         
        </Toolbar>
      </AppBar>
    </Box>
       
    </div>
  )
}

export default Navbar