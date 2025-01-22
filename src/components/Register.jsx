import { Box, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
        <h2>Registration Form</h2>
        <div className='field'>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Student Name"
          
          
        />
        <TextField
          id="outlined-input"
          label="Student ID"
           
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
           
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Address"
           
          
          
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
           
          
        />
        
         <TextField
          id="outlined-helperText"
          label="Details"
        
        
        />
      </div>
      </div>
      
    </Box>
  )
}

export default Register