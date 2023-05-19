import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import "./styles.css";

export default function Age({ setBirthDay, birthDay, birthMonth, setBirthMonth, birthYear, setBirthYear }) {
  const handleChangeDay = (e) => {
   setBirthDay(e.target.value)
  };
  const handleChangeMonth = (e) => {
    setBirthMonth(e.target.value)
   };
   const handleChangeYear = (e) => {
    setBirthYear(e.target.value)
   };
   
  // const handleChangeMonth = (e) => {
  //   setAge(() => (age[1] = e.target.value));
  // };
  // const handleChangeYear = (e) => {
  //   setAge(() => (age[2] = e.target.value));
  // };
  const currentYear = new Date().getFullYear();
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  const yearOptions= range(currentYear, currentYear - 50, -1);
  // const birthdate = [
  //   {
  //     label: "Day",
  //     value: [
  //       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  //       21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  //     ],
  //     onSelect: handleChangeDay,
  //     selectValue: age[0],
  //   },
  //   {
  //     label: "Month",

  //     onSelect: handleChangeMonth,
  //     selectValue: age[1],
  //   },
  //   {
  //     label: "Year",
  //     value: yearArray,
  //     onSelect: handleChangeYear,
  //     selectValue: age[2],
  //   },
  // ];
const dayOptions =[
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
]

const monthOptions=  [
  "January",
  "Fabuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
  return ( <>
      <FormHelperText sx={{ fontFamily: "Public Sans" }}>
        Your age
      </FormHelperText>
      <p className="helper-label">
        You must be at least 18 years old to use Intim Flort
      </p>

   
          <FormControl sx={{ m: 1, width: "30%" }}>
            <InputLabel id="demo-simple-select-label">Day</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={birthDay}
              label='Day'
              onChange={handleChangeDay}
              sx={{ borderRadius: 4, maxHeight: 48 }}
            >
              {dayOptions.map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: "30%" }}>
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={birthMonth}
              label='Day'
              onChange={handleChangeMonth}
              sx={{ borderRadius: 4, maxHeight: 48 }}
            >
              {monthOptions.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: "30%" }}>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={birthYear}
              label='Year'
              onChange={handleChangeYear}
              sx={{ borderRadius: 4, maxHeight: 48 }}
            >
              {yearOptions.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
     
    </>
  );
}
