import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Container } from "@mui/material";
import { loginUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [state, setState] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onChange = (event) => {
        setState((state) => {
            return {
                ...state,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        let user = {
            ...state,
        };

        dispatch(loginUser(user))
            .unwrap()
            .then(() => {
                navigate("/");
            });
    };

    return (
        <Container maxWidth="xs">
            <form onSubmit={handleLogin}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={state.username}
                    onChange={onChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={state.password}
                    onChange={onChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                    Sign In
                </Button>
            </form>
        </Container>
    );
}
