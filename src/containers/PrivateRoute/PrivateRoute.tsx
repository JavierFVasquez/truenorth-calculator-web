import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../lib/helpers/authContext/AuthContext";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const redirect = useNavigate();
  const { status } = useContext(AuthContext);

  switch (status) {
    case "LOADING":
      return <h3>{"Loading..."}</h3>;
    case "AUTHENTICATED":
      return <>{children}</>;
    case "UNAUTHENTICATED":
      redirect("/login");
      return <></>;
  }
};

export default PrivateRoute;
