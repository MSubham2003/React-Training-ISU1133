import React, { useState } from "react";

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(toggle => !toggle);
    };

    return (
        <div>
            <h2>{isOn ? "ON" : "OFF"}</h2>
            <button onClick={handleToggle}>
                Toggle
            </button>
        </div>
    );
}

export default Toggle;