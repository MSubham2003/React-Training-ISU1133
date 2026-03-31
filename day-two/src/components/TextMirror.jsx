import { useState } from "react";

function TextMirror() {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something....."
            />
            <p style={{
                backgroundColor: "#f0f4ff",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #c7d2fe",
                fontWeight: "500"
            }}>
                {text}
            </p>

        </div>
    );
}

export default TextMirror;