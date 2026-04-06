import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/user/${user.id}`)}
            style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
                cursor: "pointer"
            }}
        >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
}

export default UserCard;