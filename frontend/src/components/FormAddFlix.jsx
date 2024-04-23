import { Button, Container, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";

export default function FormAddFlix() {
    const [flix, setFlix] = useState({
        title: "",
        genre: "",
        filename: "",
        cover: "",
        isMovie: true,
        season: "",
        episode: "",
    });

    const onChange = (event) => {
        setFlix((flix) => {
            return {
                ...flix,
                [event.target.name]: event.target.value,
            };
        });
    };

    const dispatch = useDispatch();

    const handleAddFlix = (event) => {
        event.preventDefault();
        console.log(flix);
        // dispatch(addFlix(flix));
    };

    const initialState = {
        Title: "",
        Genre: "",
        Filename: "",
        Cover: "",
        isMovie: true,
        Season: "",
        Episode: "",
    };

    return (
        <Container maxWidth="xs">
            <h2>Add new flix</h2>
            <form onSubmit={handleAddFlix}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    autoFocus
                    value={flix.title}
                    onChange={onChange}></TextField>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="genre"
                    label="Genre"
                    name="genre"
                    value={flix.genre}
                    onChange={onChange}></TextField>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="filename"
                    label="Filename"
                    name="filename"
                    value={flix.filename}
                    onChange={onChange}></TextField>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="cover"
                    label="Cover"
                    name="cover"
                    value={flix.cover}
                    onChange={onChange}></TextField>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={flix.isMovie}
                                onChange={(event) => {
                                    setFlix({
                                        ...flix,
                                        isMovie: event.target.checked,
                                    });
                                }}></Switch>
                        }
                        label={`Flix is a ${
                            flix.isMovie ? "movie" : "series"
                        }`}></FormControlLabel>
                </div>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="season"
                    label="Season"
                    name="season"
                    value={flix.season}
                    onChange={onChange}></TextField>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="episode"
                    label="Episode"
                    name="episode"
                    value={flix.episode}
                    onChange={onChange}></TextField>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                    Add flix
                </Button>
            </form>
        </Container>
    );
}
