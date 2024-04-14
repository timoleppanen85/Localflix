import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice";

export default function LogoutPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutUser());
    }, [dispatch]);

    return (
        <>
            <h1>Logging out...</h1>
            <h4>Maybe add links back to login page?</h4>
        </>
    );
}
