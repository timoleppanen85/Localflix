import Navbar from "./components/Navbar";
import FlixList from "./components/FlixList";
import LoginPage from "./components/LoginPage";
import Player from "./components/Player";
import { Routes, Route, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import LogoutPage from "./components/LogoutPage";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export default function App() {
    const [sessionCookie, setSessionCookie] = useState(Cookies.get("session"));

    useEffect(() => {
        if (!sessionCookie) {
            let cookie = Cookies.get("session");
            setSessionCookie(cookie);
        }
    }, []);

    if (!sessionCookie) {
        return (
            <>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline enableColorScheme />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </ThemeProvider>
            </>
        );
    } else {
        return (
            <>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline enableColorScheme />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<FlixList />} />
                        <Route path="/player/:filename" element={<Player />} />
                        <Route path="/logout" element={<LogoutPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </ThemeProvider>
            </>
        );
    }
}
