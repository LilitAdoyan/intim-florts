import TextField from "@mui/material/TextField";
import FormHelperText from '@mui/material/FormHelperText';
import { useEffect, useState } from "react";
export default function Username({errorMessage, setData, setErrorMessage, setUsername,username}){
  const fetchStart = () => {
    fetch("https://iconnect247.net/api/v2/registration/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: '',
        email: username,
        site_key: "no01",
      }),
    })
      .then((res) => {
        console.log(res, "hi");
        return res.json();
      })
  
      .then((result) => {
        console.log(result)
        setData(result)
        result.Status==='fail'?setErrorMessage(result.Error.message):setErrorMessage('')
      })
      .catch((error) => {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });}

useEffect(()=>{ 
  fetchStart()
},[username])

const handleUsernameChange=(e)=>{
  setUsername(e.target.value)
}
    return<>
    <p>Create a username</p>
    {<FormHelperText error={true}>{errorMessage}</FormHelperText>}
    <TextField
    value={username}
    onChange={handleUsernameChange}
        sx={{ width: "100%", border:'none', borderRadius:5, height:48 }}
          label="Username"
          InputProps={{          
            sx: {height:' 48px',                
                '&:hover fieldset': {
                    border: '1px solid #F76448!important',
                  },
                  '&:focus-within fieldset, &:focus-visible fieldset': {
                    border: '1px solid #F76448!important',
                  },
                borderRadius: '16px'
                },
          }}
        />

    </>
}