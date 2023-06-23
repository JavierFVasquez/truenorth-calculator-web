import { createContext, useCallback, useEffect } from "react";
import { AuthContextProps } from "./interface";
import { Auth, Hub } from "aws-amplify";
import {
  authInitialState,
  onLogin,
  onLogout,
  selectAuth
} from "../../../data/redux/reducers/auth.reducer";
import { useSelector, useDispatch } from "react-redux";
import { User } from "../../../data/models/user.model";

export const AuthContext = createContext(authInitialState);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const authInfo = useSelector(selectAuth);
  const dispatch = useDispatch();

  const getSessionStatus = useCallback(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        if (user) {
          dispatch(
            onLogin({
              token: user.signInUserSession.accessToken.jwtToken,
              user: {
                email: user.signInUserSession.idToken.payload.email,
                id: user.signInUserSession.idToken.payload.sub,
                name: user.signInUserSession.idToken.payload.name
              } as User
            })
          );
        }
      })
      .catch(() => {
        dispatch(onLogout());
      });
  }, [dispatch]);

  useEffect(() => {
    getSessionStatus();
  }, [getSessionStatus]);

  useEffect(() => {
    const listener = Hub.listen("auth", () => {
      getSessionStatus();
    });
    return () => {
      listener();
    };
  }, [dispatch, getSessionStatus]);

  return (
    <AuthContext.Provider value={{ ...authInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
