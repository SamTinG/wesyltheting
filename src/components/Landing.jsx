import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./landing.css";

const Landing = ({ allowAudio }) => {
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPlaying(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container">
            <div className="image-container">
                <img
                    className="background-image"
                    src={`${process.env.PUBLIC_URL}/snsy.gif`}
                    alt="snsy"
                    style={{
                        opacity: isPlaying ? 1 : 0,
                        transition: "opacity 0.5s ease",
                    }}
                />
                <img
                    className="background-image"
                    src={`${process.env.PUBLIC_URL}/snsy.png`}
                    alt="snsy-static"
                    style={{
                        position: "absolute",
                        opacity: isPlaying ? 0 : 1,
                        transition: "opacity 0.5s ease",
                    }}
                />
            </div>
            <div className="rsvp-button-container">
                <Button
                    className="rsvp-button"
                    variant="outlined"
                    color="primary"
                    sx={{
                        fontFamily: "Pacifico, cursive",
                        fontSize: "1.2rem",
                        padding: "4px 80px",
                        borderRadius: "20px",
                        "&:hover": {
                            backgroundColor: "#dbb482",
                        },
                        color: "black",
                        border: "solid 1px black",
                    }}
                    onClick={allowAudio}
                >
                    RSVP
                </Button>
            </div>
        </div>
    );
};

export default Landing;
