import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFlix } from "../store/flixSlice";
import FlixCard from "./FlixCard";
import Grid from "@mui/material/Grid";

const FlixList = () => {
    const list = useSelector((state) => state.flix.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFlix());
    }, [dispatch]);

    let items = list.map((item) => {
        return <FlixCard key={item._id.$oid} item={item} />;
    });

    return (
        <Grid container spacing={0}>
            {items}
        </Grid>
    );
};
export default FlixList;
