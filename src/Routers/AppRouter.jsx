import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../components/auth/LoginScreen"
import { Calendar } from "../components/calendar/Calendar"

export const AppRouter = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Calendar/>}/>
                <Route path="login" element={<LoginScreen/>}/>
            </Routes>
        </BrowserRouter>
  )
}
