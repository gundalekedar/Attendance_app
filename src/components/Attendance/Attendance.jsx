import React ,{useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Formik, Form } from 'formik'

// import { useTheme } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import ToggleButton from '../ToggleButton';
import ToggleButton1 from '../ToogleButton1';
import ToggleButton2 from '../ToggleButton2';
import Calender from '../Calender';



const Attendance = () => {

const [age, setAge] = React.useState('');
    
const handleChange = (event) => {
setAge(event.target.value);
};
    
const inputstyle = {
width: '100px',  
}
    
    const mystyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        marginLeft: '20px'
        
    }
     const b = {
    backgroundColor: "black",
    color: 'white',
    marginTop: '10px',
    borderRadius: '4px',
    width:'100px'
    
    }
    
    const forletter = {
        display: 'flex',
        gap:'10px'
    }

    const card = {
        marginTop: '50px'
        
    }

    const main = {
        display: 'flex',
        gap: '50px',
        marginTop:'20px'
    }
    
  return (
    <div>
          <div>
              <h1 style={{fontSize:'50px', fontFamily:'sans-serif' , textAlign:'center' }}>Attendance</h1>
          </div>
          <br />
          <div>
            <Formik >
              <div  >
              <Form style={mystyle} >
                  
                   <label htmlFor="" style={{fontWeight:'bold' , fontSize:'20px'}} >Select Class:-</label>
                    <Box sx={{ minWidth: 120 }} >
                     <FormControl style={inputstyle} >
                     <InputLabel id="demo-simple-select-label" >classname</InputLabel>
                      <Select
                       labelId="demo-simple-select-label"
                       id="demo-simple-select"
                       value={age}             
                       label="classname"
                       onChange={handleChange}
                       >
                       <MenuItem value={'class1'} >Class1</MenuItem>
                        <MenuItem value={'class2'} >Class2</MenuItem>
                       <MenuItem value={'class3'}>Class3</MenuItem>
                        </Select>
                     </FormControl>
                     </Box>
                   
                  <label htmlFor="" style={{fontWeight:'bold' , fontSize:'20px'}} >Attendance Type</label>
                     <Box sx={{ minWidth: 120 }} >
                     <FormControl style={inputstyle} >
                     <InputLabel id="demo-simple-select-label"  >Type</InputLabel>
                     <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                                      label="Type"
                                      value={age}
                       onChange={handleChange}
                       >
                       <MenuItem value={'Student'} >Student</MenuItem>
                      <MenuItem value={'Teacher'} >Teacher</MenuItem>
          
                      </Select>
                     </FormControl>
                     </Box>
                      
                  <label htmlFor="" style={{fontWeight:'bold' , fontSize:'20px'}} >Attendance Date</label>
                  {/* <Calender/> */}

                  <button style={b}>Take Attendance</button>
              </Form>
              </div>
           </Formik>
          </div>
          <br />
          <hr />
          <div style={main} >
                 <div style={card}>
     <Card sx={{ display: 'flex', width:'200px' }} style={mystyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography sx={{display:'flex' , justifyContent: 'center', 
        alignItems: 'center', marginTop:'10px'}}> <PersonIcon /></Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{display:'flex' , justifyContent: 'center', 
        alignItems: 'center', }}> Om Kornule</Typography>
            <div style={forletter}>
           <ToggleButton/>
             <ToggleButton1>                          
            </ToggleButton1>
            <ToggleButton2/>
             </div>
                        
        </CardContent>
      </Box>
     
            </Card>
                 </div>
              
               <div style={card}>
     <Card sx={{ display: 'flex', width:'200px' }} style={mystyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography sx={{display:'flex' , justifyContent: 'center', 
        alignItems: 'center', marginTop:'10px'}}> <PersonIcon /></Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{display:'flex' , justifyContent: 'center', 
        alignItems: 'center', }}> Ram Pawar</Typography>
            <div style={forletter}>
             <ToggleButton/>                          
            <ToggleButton1/> 
            <ToggleButton2/>      
             </div>
                        
        </CardContent>
      </Box>
     
            </Card>
                </div>
              
               <div style={card}>
     <Card sx={{ display: 'flex', width:'200px' }} style={mystyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography sx={{display:'flex' , justifyContent: 'center', 
        alignItems: 'center', marginTop:'10px'}}> <PersonIcon /></Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{display:'flex' , justifyContent: 'center', 
        alignItems: 'center', }}> Sham Shinde</Typography>
            <div style={forletter}>
            
              <ToggleButton/>                          
            <ToggleButton1/> 
            <ToggleButton2/>      
             </div>
                        
        </CardContent>
      </Box>
     
            </Card>
               </div>
              
               <div style={card}>
     <Card sx={{ display: 'flex', width:'200px' }} style={mystyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography sx={{display:'flex' , justifyContent: 'center', 
        alignItems: 'center', marginTop:'10px'}}> <PersonIcon /></Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{display:'flex' , justifyContent: 'center', 
        alignItems: 'center', }}> Priya Jadhav</Typography>
            <div style={forletter}>
                <ToggleButton/>                          
            <ToggleButton1/> 
            <ToggleButton2/>      
             </div>
                        
        </CardContent>
      </Box>
     
            </Card>
               </div>
          </div>

        
          
    </div>
  )
}

export default Attendance
