import {
    CardActionArea,
    CardMedia,
    Typography,
    CardContent,
    Card,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function FlixCard(props) {
    return (
        <Card
            raised
            elevation={1}
            sx={{ minWidth: 275, maxWidth: 275, margin: 2, display: "flex" }}>
            <CardActionArea
                component={Link}
                to={"/player/" + props.item.Filename}>
                <CardMedia
                    sx={{ objectFit: "cover" }}
                    height={175}
                    component="img"
                    image={"/videos/" + props.item.Cover}
                    title="Video title"
                />
                <CardContent>
                    <Typography sx={{ fontSize: 24 }} color="text.secondary">
                        {props.item.Title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
