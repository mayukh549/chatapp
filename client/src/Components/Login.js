import React, { useState } from "react";
import logo from "D:\\projects\\livechatapp\\client\\src\\icons\\communication.png";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";

function Login() {
  const [showlogin, setShowLogin] = useState(false);
  return (
    <div className='login-container'>
      <div className='image-container'>
        <img src={logo} alt="Logo" className="welcome-logo" />

      </div>
      {showlogin && (<div className='login-box'>
        <p className="login-text">Login to your Account</p>
        <TextField

          id="standard-basic"
          label="Enter Email Address"
          variant="outlined"

        />
        <TextField

          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"

        />
        <Button
          variant="outlined">Login</Button>
        <p>
          Don't have an Account ?{" "}
          <span
            className="hyper"
          onClick={() => {
            setShowLogin(false);
          }}
          >
            Sign Up
          </span>
        </p>
        </div>
        )}
        
        {!showlogin && (
          <div className="login-box">
            <p className="login-text">Create your Account</p>
            <TextField
              // onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
              helperText=""
              // onKeyDown={(event) => {
              //   if (event.code == "Enter") {
              //     // console.log(event);
              //     signUpHandler();
              //   }
              // }}
            />
            <TextField
              // onChange={changeHandler}
              id="standard-basic"
              label="Enter Email Address"
              variant="outlined"
              color="secondary"
              name="email"
              // onKeyDown={(event) => {
              //   if (event.code == "Enter") {
              //     // console.log(event);
              //     signUpHandler();
              //   }
              // }}
            />
            <TextField
              // onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="secondary"
              name="password"
              // onKeyDown={(event) => {
              //   if (event.code == "Enter") {
              //     // console.log(event);
              //     signUpHandler();
              //   }
              // }}
            />
            <Button
              variant="outlined"
              // onClick={signUpHandler}
            >
              Sign Up
            </Button>
            <p>
              Already have an Account ?
              <span
                className="hyper"
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Log in
              </span>
            </p>
            {/* {signInStatus ? (
              <Toaster key={signInStatus.key} message={signInStatus.msg} />
            ) : null} */}
          </div>
        )}

      


    </div>
  )
}

export default Login