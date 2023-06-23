import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Button, TextField } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginFormContainer } from "./LoginForm.sty";
import { Space } from "../../components/General/Space";

const LoginForm: React.FC = () => {
  const push = useNavigate();
  const { pathname } = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await Auth.signIn(username, password);
      // console.log(
      //   await Auth.changePassword(signinResult, "@Ozzy9523*", "@Ozzy9523")
      // );
      // console.log(await Auth.completeNewPassword(signinResult, "@Ozzy9523"));
      console.log(pathname);
      if (pathname !== "/calculator") {
        push("/calculator");
      }
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  useEffect(() => {
    Auth.currentSession().then(session => {
      if (session.isValid()) {
        if (pathname !== "/calculator") {
          push("/calculator");
        }
      }
    });
  }, [push]);

  return (
    <LoginFormContainer>
      <TextField
        label="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Space />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Space />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Log in
      </Button>
    </LoginFormContainer>
  );
};

export default LoginForm;
