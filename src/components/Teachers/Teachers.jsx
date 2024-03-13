import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Formik ,Form } from 'formik'

function createData(teachername , email , contact , teacheraction ) {
  return { teachername , email , contact , teacheraction  };
}

const rows = [
    createData('Om', 'om@gamil.com', 9636857412 , 'Delete'),
    createData('Ram' ,'ram@gamil.com',9158427963 , 'Delete'),
    createData('Sham','sham@gmail.com',9852417934 , 'Delete'),
];

const Teachers = () => {

    const main = {
    // display: 'flex',
    // flexDirection: 'row',
    //  padding:'20px'
       
    display: 'grid',
    gridTemplateColumns: '10fr 3fr', // First column takes up twice as much space as the second column
    gap: '20px',
    }

    const mystyle = {
    width: '230px',
    Height: '350px',
    // border: '2px solid black',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'Lightgray',
    padding: '20px',
     marginLeft: '20px'
    
    }

    const mystyle1 = {
    display: 'flex',
    flexDirection: 'row',
    gap:950
    // justifyContent: 'space-between'
    }

    
    const mystyle2 = {
        backgroundColor: 'Lightgray',
        marginLeft:'20px'
    }

    return (
    <div style={main}>
         <div style={mystyle2}>
          <div style={mystyle1}>
            
            <h1 style={{
              fontSize: '40px', fontFamily: 'sans-serif',
              textAlign: 'center', marginLeft: '20px',
              marginTop: '20px'
            }}>Teachers</h1>
            
            <button style={{
              backgroundColor: 'black',
              color: 'white', padding: '10px',
              marginRight: '10px', marginTop: '10px',
              borderRadius:'9999px' , cursor: 'pointer'
            }}>View All</button>   
          </div>
          <br />
          <hr />
        
          <div >
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
             <TableCell style={{fontWeight:'bold' , fontSize:'15px'}}>Teacher Name's</TableCell>                    
            <TableCell align="right" style={{fontWeight:'bold' , fontSize:'15px'}}>Email</TableCell>
            <TableCell align="right" style={{fontWeight:'bold' , fontSize:'15px'}}>Contact#</TableCell>
            <TableCell align="right" style={{fontWeight:'bold' , fontSize:'15px'}}><button>Delete</button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.teachername}
                  </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right">{row.teacheraction}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
            </div>  

            <div>
            <Formik >
              <div style={mystyle} >
              <Form>
                  <h1 style={{fontSize:'30px', fontFamily:'sans-serif' , textAlign:'center' }}>Add Teachers</h1>
                   <label htmlFor="">Teacher Name</label>
                  <input type="text" />
                   
                  <label htmlFor="">Subject Specialist</label>
                  <input type="text" />
                      
                  <label htmlFor="">Email</label>
                  <input type="email" /> 

                   <label htmlFor="">Contact#</label>
                    <input type="number" />

                   <label htmlFor="">Address</label>
                   <input type="address" />  

                    <label htmlFor="">Password</label>
                     <input type="number" /> 
                            
                    <label htmlFor="">Picture</label>
                     <input type="file" /> 

                <button style={{
                  backgroundColor: 'black',padding:'10px',
                  color: 'white',marginTop:'10px' , borderRadius:'5px'
                }}> Add Teacher</button>
              </Form>
          </div>
           </Formik>
            </div>    
            
    </div>  

    
  )
}

export default Teachers
