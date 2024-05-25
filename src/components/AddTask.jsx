import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

const AddTask = () => {

    const navigate=useNavigate();
  
    const[formdata,setform]=useState([]);
    
    const inputHandler=(e)=>{
    
    setform({...formdata,[e.target.name]:e.target.value});
    }
    


    const addData=()=>{
  
      
        
          console.log('clicked',formdata)
          axios.post('http://localhost:3005/api/addTask',formdata)
          
          .then((res)=>{
          alert( res.data.Message);
          console.log(res.data);
          navigate('/');
          
          })
          .catch((error)=>{
            console.log(error);
          })    
        
        }
     
        
    



  return (
    <div>
    <div style={{margin:"5% 20% 10%  20%", padding:"50px",border:"1px solid black",width:"800px"}}>
    <Box sx={{ flexGrow: 1 }}  >
     <Grid container spacing={2} >
      
      
       <Grid item xs={12}>
       <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}}>Description</label>
       <TextField

         style={{width:"410px"}}
       
         label="Enter Description"
         type="text"
         name='description'
      
         onChange={inputHandler}
       
       />
       </Grid>
       <Grid item xs={12}>
        
       <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}} >Status of the task</label>
       <TextField
       style={{width:"410px"}}
        
         label="Enter Status"         
         name='taskstatus'
       
         onChange={inputHandler}
       
       />
       </Grid>
      
     
       <Grid item xs={12}>
       <button variant='contained' onClick={addData}
      style={{padding:'10px',backgroundColor:'purple',color:"white",width:'150px',marginTop:'50px',marginLeft:'300px'}}>Add Task</button>
       </Grid>
     </Grid>
   </Box>

   
 
   </div>
   <Typography variant="body2" color="black" style={{textAlign:'center', marginTop:"100px"}}>
      {'Copyright © '}
     
    
      {new Date().getFullYear()}
      {'.'}
    </Typography>
   </div>
  )
}

export default AddTask