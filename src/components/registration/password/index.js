import TextField from "@mui/material/TextField";

export default function Password({ setPassword, password}){



  const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
  }

   return <>
       <p>Create a password</p>
   <TextField
  //  value={password}
   onChange={handlePasswordChange}
    sx={{ width: "100%", border:'none', borderRadius:5, height:48 }}
    label="Password"
    InputProps={{
      
    
      sx: {height:' 48px',

          /* CTA/Primary */
          
          '&:hover fieldset': {
              border: '1px solid #F76448!important',
            },
            '&:focus-within fieldset, &:focus-visible fieldset': {
              border: '1px solid #F76448!important',
            },
          borderRadius: '16px'
          },
    }}

   margin="normal"
   required
   fullWidth
   name="password"
   type="password"
   id="password"
   autoComplete="current-password"
 /></>
}