import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Formik, Form } from 'formik'

function createData(studentId , studentname , fathername , attendance ,download ) {
  return { studentId , studentname , fathername , attendance ,download };
}

const rows = [
    createData(1,'Om','Balaji','Not Specified' ,'Report'),
    createData(2,'Ram','Aditya','Not Specified' ,'Report'),
    createData(3,'Sham','Sundar','Not Specified' ,'Report'),
];

const Students = () => {
    const main = {
    display: 'grid',
    gridTemplateColumns: '10fr 3fr', // First column takes up twice as much space as the second column
    gap: '20px',
    }
    const mystyle = {
        backgroundColor: 'Lightgray',
        marginLeft:'20px'
    }

    const mystyle1 = {
    width: '230px',
    Height: '350px',
    // border: '2px solid black',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'Lightgray',
    padding: '20px',
    marginLeft:'20px'
    }
  return (
    <div style={main}>
        <div style={mystyle}>
            <div >
                  <h1 style={{fontSize:'50px', fontFamily:'sans-serif' , textAlign:'center' }}>Students</h1>
              </div>
              <hr />
              <div>
                  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
             <TableCell style={{fontWeight:'bold' , fontSize:'15px'}} align="">Student ID</TableCell>
            <TableCell style={{fontWeight:'bold' , fontSize:'15px'}} align="">Student Name</TableCell>
            <TableCell style={{fontWeight:'bold' , fontSize:'15px'}} align="">Father Name</TableCell>
            <TableCell style={{fontWeight:'bold' , fontSize:'15px'}} align="">Attendance</TableCell>
            <TableCell style={{fontWeight:'bold' , fontSize:'15px'}}  >Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" >{row.studentId}</TableCell>
              <TableCell align="left">{row.studentname}</TableCell>
              <TableCell align="left" >{row.fathername}</TableCell>
              <TableCell align="left">{row.attendance}</TableCell>
               <TableCell align="left">{row.download}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </div>
        </div>
          
         

          <div >
            <Formik >
              <div style={mystyle1}>
              <Form>
                  <h1 style={{fontSize:'30px', fontFamily:'sans-serif' , textAlign:'center' }}>Add Student</h1>
                   <label htmlFor="">First Name</label>
                  <input type="text" />
                   
                  <label htmlFor="">Last Name</label>
                  <input type="text" />
                      
                  <label htmlFor="">Father's Name</label>
                  <input type="text" /> 

                   <label htmlFor="">Father Contact</label>
                    <input type="number" />

                   <label htmlFor="">Student ID</label>
                   <input type="number" />  

                    <label htmlFor="">class</label>
                     <input type="text" />  
                            
                    <label htmlFor="">Student Address</label>
                    <input type="text" /> 
                          
                    <label htmlFor="">Picture</label>
                    <input type="file" /> 
                          
                     <button style={{
                  backgroundColor: 'black',padding:'10px',
                  color: 'white',marginTop:'10px' , borderRadius:'5px'
                }}> Add Student</button>
              </Form>
          </div>
           </Formik>    
        </div>
        
    </div>
  )
}

export default Students
