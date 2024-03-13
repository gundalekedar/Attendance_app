import { Formik ,Form } from 'formik'
import React from 'react'
// import { Form } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, classname,  classteacher, studentlimit, action) {
  return { id, classname, classteacher, studentlimit, action };
}

const rows = [
  createData(1, 'class1' ,'Om' ,40,'yes'),
  createData(2, 'class2' ,'Ram' ,50,'yes'),
  createData(3, 'class3' ,'Sham' ,50,'yes'),
];

const Classes = () => {

    const main = {
    display: 'grid',
    gridTemplateColumns: '3fr 10fr', 
    gap: '20px',
    marginTop:'30px'
    }

    const mystyle = {
    width: '250px',
    Height: '300px',
    // border: '2px solid black',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: 'Lightgray',
    marginLeft:'20px'
    }

    const mystyle1 = {
        backgroundColor: 'Lightgray',
        marginRight:'30px'
  }
  

  return (
      <div style={main}>
          <div>
            <Formik >
              <div style={mystyle }>
              <Form>
                  <h1 style={{fontSize:'30px', fontFamily:'sans-serif' , textAlign:'center' }}>Add Classes</h1>
                   <label htmlFor="">Class Name</label>
                  <input type="text" />
                   
                  <label htmlFor="">Class Teacher</label>
                  <input type="text" />
                      
                  <label htmlFor="">Student Limit</label>
                      <input type="text" /> 

                  <button style={{
                  backgroundColor: 'black',padding:'10px',
                  color: 'white',marginTop:'10px' , borderRadius:'5px'
                }}>Add Class</button>
              </Form>
          </div>
          </Formik>
          </div>
         
          
          <div style={mystyle1}>
              <div>
                  <h1 style={{fontSize:'50px', fontFamily:'sans-serif' , textAlign:'center' }}>Classes</h1>
              </div>
              <hr />
              <div>
                  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Class ID</TableCell>
            <TableCell align="right">Class Name</TableCell>
            <TableCell align="right">Class Teacher</TableCell>
            <TableCell align="right">Student Limit</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.classname}</TableCell>
              <TableCell align="right">{row.classteacher}</TableCell>
              <TableCell align="right">{row.studentlimit}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
                  </TableContainer>
              </div>
          </div>
    </div>
  )
}

export default Classes
