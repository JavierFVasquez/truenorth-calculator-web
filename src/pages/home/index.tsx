import { Auth } from "aws-amplify";
import { useContext } from "react";
import { AuthContext } from "../../lib/helpers/authContext/AuthContext";
import RecordList from "../../containers/RecordList/RecordList";
import { Space } from "../../components/General/Space";
import Operation from "../../containers/Operation/Operation";
import Balance from "../../containers/Balance/Balance";
import { Button, Card } from "@mui/material";
import CustomAppBar from "../../components/AppBar/AppBar";

const Home = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = async () => {
    await Auth.signOut();
    window.location.reload();
  };

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CustomAppBar
          title={`Hi, ${user?.name}`}
          centerComponent={<Balance />}
          logoutButton={
            <Button variant="contained" color="info" onClick={handleSignOut}>
              Logout
            </Button>
          }
        />
        <Operation />
      </Card>
      <Space size="L" />
      <RecordList />
    </div>
  );
};

export default Home;
