import Navbar from "./components/Navbar";
import FlixList from "./components/FlixList";
import LoginPage from "./components/LoginPage";
import Player from "./components/Player";
import ProfilePage from "./components/ProfilePage";
import SettingsPage from "./components/SettingsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LogoutPage from "./components/LogoutPage";
import { useSelector } from "react-redux";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export default function App() {
    // STATE.AUTH --- NOT STATE.AUTH.USER
    const user = useSelector((state) => state.auth);
    // ----------------------------------------------

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline enableColorScheme />
            <Navbar />
            <Routes>
                {user.isLogged ? (
                    <>
                        <Route path="/" element={<FlixList />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/player/:filename" element={<Player />} />
                        <Route path="/logout" element={<LogoutPage />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<LoginPage />} />
                    </>
                )}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </ThemeProvider>
    );
}
