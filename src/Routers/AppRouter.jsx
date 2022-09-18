import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const disptach = useDispatch();

  useEffect(() => {
    disptach(startChecking());
  }, [disptach]);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter>
              <LoginScreen />
            </PublicRouter>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRouter>
              <CalendarScreen />
            </PrivateRouter>
          }
        />
      </Routes>
    </HashRouter>
  );
};
