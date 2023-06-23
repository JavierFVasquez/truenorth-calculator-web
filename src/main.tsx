import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./lib/helpers/authContext/AuthContext.tsx";
import { Provider } from "react-redux";
import { store } from "./data/redux/reducers/index.ts";
import CustomNotification from "./containers/CustomNotification/CustomNotification.tsx";

Amplify.configure(awsconfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <>
            <App />
            <CustomNotification />
          </>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
