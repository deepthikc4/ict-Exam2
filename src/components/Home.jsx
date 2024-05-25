import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import axios from 'axios';



const Home = () => {

  const [dataset,setData]=useState([]);
  const [filter, setFilter] = useState('all'); 

  useEffect(()=>{
   axios.get('http://localhost:3005/api/home').then((res)=>{
     console.log(res);
     setData(res.data);
   })
   
   },[])


  const deleteTask=(id)=>{
   axios.delete('http://localhost:3005/api/delete/'+id).then((res)=>{
     alert(res.data.message);
     console.log(res.data);
     window.location.reload(false);
         })
         .catch((error)=>{
           console.log(error);
         })
  }
// Filter based on all,complted,ongoing
const filteredTasks = dataset.filter(task => {
  if (filter === 'all') return true;
  return filter === 'completed' ? task.taskstatus === 'completed' : task.taskstatus === 'ongoing';
});



  return (
    <div>

<div style={{ margin: '20px 0' }}>
        <Button onClick={() => setFilter('all')} style={{ margin: '0 5px',color:'purple' }}>All tasks</Button>
        <Button onClick={() => setFilter('completed')} style={{ margin: '0 5px',color:'purple' }}>completed tasks</Button>
        <Button onClick={() => setFilter('ongoing')} style={{ margin: '0 5px',color:'purple' }}>ongoing tasks</Button>
      </div>

<TableContainer style={{border:'1px solid blue',width:'1000px',margin:'100px',padding:'20px'}} component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow >
          
          <TableCell align='left' style={{ fontFamily:'Roboto',fontSize: '25px',color:'purple'}} >Description</TableCell>
          <TableCell align="left" style={{ fontFamily:'Roboto',fontSize: '25px',color:'purple'}}>Status</TableCell>
          <TableCell align="left" style={{ fontFamily:'Roboto',fontSize: '25px',color:'purple'}}></TableCell>
         
         
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredTasks.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >            
            <TableCell align="left">{row.description}</TableCell>
            <TableCell align="left">{row.taskstatus}</TableCell>
            <TableCell align="left">
            <input
                type="checkbox"
                checked={row.taskstatus=== 'completed'}   
                        
              />
              </TableCell>
            <TableCell>
          
            <Button  color="inherit"   onClick={()=>deleteTask(row._id)} style={{backgroundColor:'purple',color:'white', textDecoration:"none",padding:'5px'}}>DELETE</Button>
            </TableCell>
           
            
            </TableRow>
        ))}
      </TableBody>
    </Table>
   
  </TableContainer>

  <Typography variant="body2" color="black" style={{textAlign:'center'}}>
      {'Copyright © '}
     
    
      {new Date().getFullYear()}
      {'.'}
    </Typography>


    </div>
  )
}

export default Home