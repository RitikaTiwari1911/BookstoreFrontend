import React from "react";
import "./Login.css";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {User} from '../service/user'
const user = new User()



export default function Login() {
  const validEmailId = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
  const headerStyle = {color:'black', margin: '20px 150px' }
  
  const [showPassword, setShowPassword] = React.useState("false");
  const [emailId, setemailId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailIdError, setemailIdError] = React.useState("false");
  const [passwordError, setPasswordError] = React.useState("false");
  //const history = useHistory();

  const handleClickShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };
  const handleemailId = (e) => {
    setemailId(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const validation = () => {
    console.log("here");
    let isError = false;
    if (emailId === "" || !validEmailId.test(emailId)) {
      setemailIdError(false);
    } else {
      setemailIdError(true);
    }
    if (password === "" || !validPassword.test(password)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    isError = emailIdError || passwordError;
    return isError;
  };
  
  const handleLogin = (e) => {
    let isValid = validation();
    if (!isValid) {
      console.log("failed");
    }else{
        let data = {
            emailId: emailId,
            password: password,
        };
        user.userLogin(data).then((res)=>{
            localStorage.setItem("token", res.data.token)
            console.log(res.data.message);
            alert('You have been successfully logged in!!')
        }).catch(error =>{
            console.log(error.message)
        })
        
    }
  };

  return (
    <div className = "box">        
        <h1 style={headerStyle}>Login</h1>
      <div className="textfield">
        <TextField
          name="emailId"
          error={!emailIdError}
          helperText={!emailIdError ? "Invalid emailId" : " "}
          onChange={handleemailId}
          label="email ID"
          variant="outlined"
          size="small"
          fullWidth
        />
      </div>
      <div className="textfield">
        <TextField
          name="password"
          error={!passwordError}
          helperText={!passwordError ? "Invalid Password !" : ""}
          onChange={handlePassword}
          label="Password"
          variant="outlined"
          size="small"
          fullWidth
          type={showPassword ? "password" : "text"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Button
        fullWidth
        className="login-btn"
        style={{ backgroundColor: "#802F34", color: "#ffffff" }}
        onClick={handleLogin}
      >
        Login
      </Button>
      <h4 className="or">OR</h4>
      <div className="fgButtons">
        <Button
          className="fb-btn"
          style={{
            backgroundColor: "#4266B2",
            color: "#ffffff",
            textTransform: "capitalize",
            padding: "10px 30px",
            width: "50%"
          }}
        >
          Facebook
        </Button>
        <Button
          style={{
            backgroundColor: "#E4E4E4",
            color: "#000000",
            textTransform: "capitalize",
            width: "50%",
          }}
        >
          Google
        </Button>
      </div>
    </div>
  );
}