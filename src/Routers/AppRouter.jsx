import {  HashRouter, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
  return (
        <HashRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/" element={<CalendarScreen/>}/>
            </Routes>
        </HashRouter>
  )
}
