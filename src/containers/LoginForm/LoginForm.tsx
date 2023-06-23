import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Button, Card, TextField } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginFormContainer, LogoContainer } from "./LoginForm.sty";
import { Space } from "../../components/General/Space";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useDispatch } from "react-redux";
import { errorAction } from "../../data/redux/reducers/error.reducer";

const LoginForm: React.FC = () => {
  const push = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [oldpassword, setOldPassword] = useState("");
  const [needChangePassword, setNeedChangePassword] = useState(false);

  const handleChangePassword = async () => {
    try {
      const signinResult = await Auth.signIn(username, oldpassword);
      await Auth.completeNewPassword(signinResult, password);
      push("/calculator");
    } catch (error) {
      console.log("Error logging in:", error);
      dispatch(errorAction({ errorMessage: "Login error" }));
    }
  };

  const handleLogin = async () => {
    try {
      const user = await Auth.signIn(username, password);
      push(pathname);
      if (user?.challengeName === "NEW_PASSWORD_REQUIRED") {
        setNeedChangePassword(true);
        setOldPassword(password);
        setPassword("");
      } else {
        push("/calculator");
      }
      // console.log(
      //   await Auth.changePassword(signinResult, "*", "")
      // );
    } catch (error) {
      console.log("Error logging in:", error);
      dispatch(errorAction({ errorMessage: "Login error" }));
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
    <Card>
      <LoginFormContainer>
        <LogoContainer>
          <CalculateIcon fontSize="large" />
          <h1> Calculator</h1>
        </LogoContainer>
        <h3>by Javier Vasquez</h3>
        {!needChangePassword && (
          <TextField
            label="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        )}
        <Space />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Space />
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            needChangePassword ? handleChangePassword() : handleLogin()
          }
        >
          {needChangePassword ? "Change password" : "Log in"}
        </Button>
      </LoginFormContainer>
    </Card>
  );
};

export default LoginForm;
