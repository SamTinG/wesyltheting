import React, { useEffect, useRef } from "react";

function Audio({ muted }) {
    const audioRef = useRef(null);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                if (audioRef.current && !muted) {
                    audioRef.current.play();
                }
            } else {
                if (audioRef.current) {
                    audioRef.current.pause();
                }
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, [muted]);

    useEffect(() => {
        if (audioRef.current) {
            if (!muted && document.visibilityState === "visible") {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [muted]);

    return (
        <div>
            <audio ref={audioRef} autoPlay loop muted={muted}>
                <source
                    src={`${process.env.PUBLIC_URL}/intro.mp3`}
                    type="audio/mp3"
                />
            </audio>
        </div>
    );
}

export default Audio;
