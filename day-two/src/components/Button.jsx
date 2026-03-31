
function Button({ label, color }) {
    return (
        <button
            style={{
                backgroundColor: color,
                color: "#fff",
                border: "none",
                padding: "10px 16px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "500"
            }}
        >
            {label}
        </button>
    );
}


export default Button;