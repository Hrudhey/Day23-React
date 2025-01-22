import { Button, TextField } from '@mui/material'
import React from 'react'


const Login = () => {
  return (
     <div className="field2">
        <h1 style={{color:'red',textAlign:'center'}}>Log In</h1>
     <TextField id="outlined-basic" label="UserName" variant="outlined" style={{marginLeft:'55px'}} /><br/><br/>
     <TextField id="outlined-basic" label="Password" variant="outlined" /><br/><br/>
     <Button variant="contained">Login</Button>
     </div>
  )
}

export default Login