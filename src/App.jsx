import React, { useState } from "react";
import Intro from "./components/Intro";
import Form from "./components/Form";
import Audio from "./components/Audio";
import "./App.css";
import Landing from "./components/Landing";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#d6cdc5",
        },
    },
    typography: {
        fontFamily: "Pacifico, cursive",
    },
});

const App = () => {
    const [muted, setMuted] = useState(true);

    const allowAudio = () => {
        setMuted(false);
    };

    const [showForm, setShowForm] = useState(true);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    return (
        <ThemeProvider theme={theme}>
            <div>
                {muted && (
                    <div>
                        <Landing allowAudio={allowAudio} />
                    </div>
                )}
                {muted ? (
                    <></>
                ) : showForm ? (
                    <Form uuid={urlParams.get("id")} />
                ) : (
                    <Intro onFinish={() => setShowForm(true)} />
                )}
                <Audio muted={muted} />
            </div>
        </ThemeProvider>
    );
};

export default App;
