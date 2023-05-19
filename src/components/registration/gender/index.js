import { Button } from '@mui/material';
import './styles.css'

export default function Gender({user, setUser}){

    const handleFemaleSelect = () => {
        setUser({ ...user, gender: "female" });
      };
      const handleMaleSelect = () => {
        setUser({ ...user, gender: "male" });
      };
      const interestedInFemaleClick = () => {
        setUser({ ...user, interestedIn: "female" });
      };
      const interestedInMaleClick = () => {
        setUser({ ...user, interestedIn: "male" });
      };
    return <> <p>Your gender</p>
    <Button
    variant="outlined"
      onClick={handleFemaleSelect}
      className={`form-button ${
        user.gender === "female" ? "selected" : "not-selected"
      }`}
    >
      Female
    </Button>
    <Button
      className={`form-button ${
        user.gender === "male" ? "selected" : "not-selected"
      }`}
      onClick={handleMaleSelect}
    >
      Male
    </Button>
    <p>You are interested in</p>
    <Button
      className={`form-button ${
        user.interestedIn === "female" ? "selected" : "not-selected"
      }`}
      onClick={interestedInFemaleClick}
    >
      Female
    </Button>
    <Button
      className={`form-button ${
        user.interestedIn === "male" ? "selected" : "not-selected"
      }`}
      onClick={interestedInMaleClick}
    >
      Male
    </Button></>
}