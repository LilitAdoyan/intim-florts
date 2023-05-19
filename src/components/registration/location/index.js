import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import { useEffect, useState } from "react";

const helperTextStyles = {
  fontFamily: "Public Sans!important",
  fontStyle: "normal!important",
  fontWeight: "400!important",
  fontSize: "16px!important",
  lineHeight: "24px!important",
  color: "#B2B3B5!important",
};

export default function Location({setLocation,location}) {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue]=useState('')


  const getData = (searchTerm) => {

    fetch(
      `https://iconnect247.net/api/v2/registration/locations?site_key=no01&search=`+searchTerm,

    )
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        console.log(
          "search term: " + searchTerm + ", results: ",
          myJson.Data
        );
        const updatedOptions = myJson?.Data?.map((p) => {
          return { title: p };
        });
        console.log(updatedOptions)
        setOptions(updatedOptions);
      })
  };
useEffect(()=>{
  getData(inputValue)
},[inputValue])


  const onInputChange = (event, value, reason) => {
    if (value) {
    setInputValue(value)
    setLocation(value)

    console.log(event.target.value, value,'hjsefbgngj')
    } else {
      setOptions([]);
    }
  };

  return (
    <>
      <FormHelperText>Your location</FormHelperText>

      <FormHelperText sx={{ ...helperTextStyles }}>
        Search location by city, country or zip code
      </FormHelperText>

      <Autocomplete
      inputValue={location}
              options={!options?[{title:'Type to load...'}]:options}

              getOptionLabel={(option) => option.title}
              onInputChange={onInputChange}
        // onChange={(e) => {
        //   setLocation(e.target.value);
        // }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        disablePortal
        id="combo-box-demo"
        role="list-box"
        sx={{ width: "100%", border: "none", borderRadius: 5, height: 48 }}
        renderInput={(params) => (
          <TextField
            sx={{ width: "100%", border: "none", borderRadius: 5, height: 48 }}
            {...params}
            label="London, UK"
            InputProps={{
              ...params.InputProps,
              sx: {
                height: " 48px",

                /* CTA/Primary */

                "&:hover fieldset": {
                  border: "1px solid #F76448!important",
                },
                "&:focus-within fieldset, &:focus-visible fieldset": {
                  border: "1px solid #F76448!important",
                },
                borderRadius: "16px",
              },

              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </>
  );
}
