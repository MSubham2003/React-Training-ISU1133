import React from "react";

function TrafficLight({ color }) {
    let message;

    switch (color) {
        case "red":
            message = "Stop";
            break;
        case "yellow":
            message = "Slow Down";
            break;
        case "green":
            message = "Go";
            break;
        default:
            message = "Invalid Signal";
    }

    return (
        <p>
            <span style={{ color }}>{color?.toUpperCase()}</span> - {message}
        </p>
    );
}

export default TrafficLight;