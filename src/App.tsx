import { Route, Routes, Outlet } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import PrivateRoute from "./containers/PrivateRoute/PrivateRoute";

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/calculator"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
