import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Digital User Directory
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default Home;