import LandingPage from "./components/pages/landingPage/LandingPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/client/register/Register";
import SelectRole from "./components/pages/role/SelectRole";
import RegisterAdvisor from "./components/pages/advisor/register/RegisterAdvisor";
import Dashboard from "./components/pages/dashboard/Dashboard";
import InvestState from "./components/context/InvestState";
import RedirectRoute from "./components/routes/RedirectRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdvisorDashboard from "./components/pages/advisor/dashboard/AdvisorDashboard";
import Inter from "./components/pages/Inter";

function App() {
  return (
    <div>
      <InvestState>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <RedirectRoute redirectTo={"/dashboard"}>
                  <LandingPage />
                </RedirectRoute>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <RedirectRoute redirectTo={"/dashboard"}>
                  <Login />
                </RedirectRoute>
              }
            />
            <Route
              exact
              path="/register/investor"
              element={
                <RedirectRoute redirectTo={"/dashboard"}>
                  <Register />
                </RedirectRoute>
              }
            />
            <Route
              exact
              path="/register/advisor"
              element={
                <RedirectRoute redirectTo={"/dashboard"}>
                  <RegisterAdvisor />
                </RedirectRoute>
              }
            />
            <Route
              exact
              path="/register"
              element={
                <RedirectRoute redirectTo={"/dashboard"}>
                  <SelectRole />
                </RedirectRoute>
              }
            />
            <Route
            exact
              path="/dashboard"
              element={
                <PrivateRoute redirectTo={"/"}>
                  <Inter />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </InvestState>
    </div>
  );
}

export default App;
