import React, { useState } from "react";

function HoverBox() {
    const [color, setColor] = useState("blue");

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center"
            }}>
            <div
                onMouseEnter={() => setColor("red")}
                onMouseLeave={() => setColor("blue")}
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}
            >
                Hover me
            </div>
        </div>
    );
}

export default HoverBox;