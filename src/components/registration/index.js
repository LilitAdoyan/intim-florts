import "./styles.css";
import logo from "../../images/logo.png";
import Cards from "../cards";
import { styled } from "@mui/system";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Age from "./age";
import Gender from "./gender";
import Location from "./location";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Username from "./username";
import Password from "./password";


const NextButton = styled(Button)({
  background: "#F76448",
  border: "none",
  borderRadius: "16px",
  color: "#FFFFFF",
  maxWidth: "514px",
  width: "100%",
  height: "48px",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "26px",
  textTransform:'none',
  marginTop: "8px",
  '&:hover':{
    background: '#F76448'},

});

function Registration() {
  const key='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
  const [captchaIsDone , setCaptchaIsDone]=useState(false)
  const [user, setUser] = useState({ gender: "", interestedIn: "" });
  const [birthday, setBirthday] = useState('');
  const [birthMonth, setBirthMonth]=useState('')
  const [birthYear, setBirthYear]=useState('')
  const [username, setUsername]=useState('')
  const [data, setData]=useState()
  const [password, setPassword]=useState('')
  const [location, setLocation] = useState('');

const [errorMessage,setErrorMessage]=useState('')
  const [infoSpace, setInfoSpace] = useState({
    genderSpace: true,
    ageSpace: false,
    locationSpae: false,
    usernameSpace: false,
    passwordSpace: false,
  });

  const handleBackClick = () => {
    if (infoSpace.passwordSpace&&infoSpace.usernameSpace) {
      setInfoSpace({ ...infoSpace, passwordSpace: false });
    } else if (infoSpace.usernameSpace&&infoSpace.locationSpae) {
      setInfoSpace({ ...infoSpace, usernameSpace: false});
    } else if (infoSpace.locationSpae&&infoSpace.ageSpace) {
      setInfoSpace({ ...infoSpace, locationSpae: false });
    } else if (infoSpace.ageSpace&&infoSpace.genderSpace) {
      setInfoSpace({ ...infoSpace, ageSpace: false });
    }
  };


  const handleNextClick = () => {
    console.log(location,'location')
      if (infoSpace.genderSpace&&!infoSpace.ageSpace) {
      setInfoSpace(() => ({
        ...infoSpace,
        ageSpace: true,
      }));
    } else if (infoSpace.ageSpace&&!infoSpace.locationSpae) {
      setInfoSpace(() => ({
        ...infoSpace,
        locationSpae: true,
      }));
    } else if (infoSpace.locationSpae&&!infoSpace.usernameSpace) {
      setInfoSpace(() => ({
        ...infoSpace,
        usernameSpace: true,
      })
      );
    } else if (!errorMessage&&infoSpace.usernameSpace&&!infoSpace.passwordSpace) {

      setInfoSpace(() => ({
        ...infoSpace,
        passwordSpace: true,
      }))
    }
  };
  const fetchUserID = (userID) => {
    console.log(userID, 'userID')
    fetch(`https://iconnect247.net/api/v2/registration/:${userID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gender:user.gender,
        looking_for:user.interestedIn,
        location:location,
        username: username,
        DOB:(!birthday||!birthMonth||!birthYear)?'':birthYear+'-'+birthMonth+'-'+birthday,
        email:username,
        password: password,
        site_key: "no01",
        _id:userID
      }),
    })
      .then((res) => {
        console.log(res, "hi");
        return res.json();
      })
      .then((result) => {
        console.log(result, "bye");
      
      })
      .catch((error) => {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
  };

  const onChange=()=>{
    setCaptchaIsDone(true)
    console.log('changed')
  }
  return (
    <div className="registration-wrapper">
      <div className="upper-section">
        <div className="upper-content">
          <img src={logo} alt="Intim flort" />

          <Grid
            className="icon-wrapper"
            container
          >
            <WcOutlinedIcon className={`${infoSpace.genderSpace&&!infoSpace.ageSpace?'active':'completed'}`}></WcOutlinedIcon>
            <CakeOutlinedIcon className={`${infoSpace.ageSpace&&!infoSpace.locationSpae?'active':infoSpace.ageSpace&&infoSpace.locationSpae?'completed':'icon-color'}`}></CakeOutlinedIcon>
            <PlaceOutlinedIcon className={`${infoSpace.locationSpae&&!infoSpace.usernameSpace?'active':infoSpace.locationSpae&&infoSpace.usernameSpace?'completed':'icon-color'}`}></PlaceOutlinedIcon>
            <PersonOutlineOutlinedIcon className={`${infoSpace.usernameSpace&&!infoSpace.passwordSpace?'active':infoSpace.usernameSpace&&infoSpace.passwordSpace?"completed":'icon-color'}`}></PersonOutlineOutlinedIcon>
            <LockOutlinedIcon className={`${infoSpace.passwordSpace?'active':'icon-color'}`}></LockOutlinedIcon>
          </Grid>
          <div className="upper-bar">
            <div
              className={`inner-bar ${
                infoSpace.ageSpace && !infoSpace.locationSpae
                  ? "age-inner-bar"
                  : infoSpace.locationSpae && !infoSpace.usernameSpace
                  ? "location-inner-bar"
                  : infoSpace.usernameSpace && !infoSpace.passwordSpace
                  ? "username-inner-bar"
                  : infoSpace.passwordSpace
                  ? "password-inner-bar"
                  : "default-inner-bar"
              }`}
            ></div>
          </div>
          <div className="info-wrapper">
            {infoSpace.genderSpace &&!infoSpace.ageSpace&& <Gender user={user} setUser={setUser} />}
            {infoSpace.ageSpace && !infoSpace.locationSpae&&(
              <Age birthDay={birthday} setBirthMonth={setBirthMonth} birthMonth={birthMonth} setBirthDay={setBirthday} birthYear={birthYear} setBirthYear={setBirthYear} />
            )}
            {infoSpace.locationSpae && !infoSpace.usernameSpace && (
              <>
                <Location setLocation={setLocation} location={location}/>
              </>
            )}
            {infoSpace.usernameSpace &&!infoSpace.passwordSpace&& <Username errorMessage={errorMessage} setData={setData} setErrorMessage={setErrorMessage} setUsername={setUsername} username={username} />}
            {infoSpace.passwordSpace && <Password password={password} setPassword={setPassword}/>}
          </div>
        {infoSpace.passwordSpace&&  <ReCAPTCHA
    sitekey={key}
    onChange={onChange}
  />}
          <NextButton variant="contained"
disabled={!captchaIsDone&&infoSpace.passwordSpace?true:false }         onClick={()=>{
           !infoSpace.passwordSpace? handleNextClick():fetchUserID(data.Data)}}>{infoSpace.passwordSpace?'Complete':'Next'}</NextButton>
          <Button className="back-button" variant="text" onClick={handleBackClick}>Back</Button>
        </div>
      </div>
      <Cards />
    </div>
  );
}

export default Registration;
