import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function CustomAppBar({
  title,
  logoutButton,
  centerComponent
}: {
  title: string;
  logoutButton: JSX.Element;
  centerComponent: JSX.Element;
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {centerComponent}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {logoutButton}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
