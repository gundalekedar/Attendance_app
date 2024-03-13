import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name , contact , attendance , today ) {
  return { name , contact , attendance , today };
}

const rows = [
    createData()
];



const Dasboard = () => {
    const theme = useTheme();

    const mystyle = {
        backgroundColor: "lightgray",
        width: '200px',
        height:'150px',
    }

    const main = {
    display: 'flex',
    gap: '30px',
    justifyContent: 'space-between',
    marginLeft: '25px',
    marginRight: '25px',
    marginTop:'25px'
    }

    const mystyle1 = {
        backgroundColor: 'Lightgray',
        marginTop:"30px"
    }

    const mystyle2 = {
         display: 'flex',
    flexDirection: 'row',
    // gap:950
    }

    
    return (
        <div>
            <div style={main}>
            <Card sx={{ display: 'flex' }} style={mystyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             3
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           Students
          </Typography>
        </CardContent>
      </Box>
      <PersonIcon />
            </Card>
            
            <Card sx={{ display: 'flex' }} style={mystyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             3
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           Teachers
          </Typography>
        </CardContent>
      </Box>
      <PersonIcon />
            </Card>

            <Card sx={{ display: 'flex' }} style={mystyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             3
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           Classes
          </Typography>
        </CardContent>
      </Box>
      <PersonIcon />
            </Card>

            <Card sx={{ display: 'flex' }} style={mystyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
             3
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           Student Present's Today
          </Typography>
        </CardContent>
      </Box>
      <PersonIcon />
            </Card>
            </div>
    
            <div style={mystyle1}>
                <div style={mystyle2}>
                    <h1> Today Attendance</h1>
                <button>View All</button>
                </div>
                <br />
               <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
             <TableCell>Name's</TableCell>                    
            <TableCell align="right">Contact#</TableCell>
            <TableCell align="right">Attendance</TableCell>
            <TableCell align="right">Today</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
                  </TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right">{row.attendance}</TableCell>
              <TableCell align="right">{row.today}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>


            <div>

            </div>
        </div>

       
    
  )
}

export default Dasboard
