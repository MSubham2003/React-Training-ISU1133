import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserProfile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.error(err));
    }, [id]);

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen text-gray-500">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-8">
            <button
                onClick={() => navigate("/")}
                className="mb-6 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
                ← Back
            </button>

            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6">
                <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                <p className="text-gray-500 mb-4">{user.email}</p>

                <div className="space-y-3 text-sm text-gray-700">
                    <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                    <p><span className="font-semibold">Website:</span> {user.website}</p>
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                    <p className="text-sm text-gray-600">
                        {user.address.street}, {user.address.city}
                    </p>
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold text-gray-800 mb-2">Company</h3>
                    <p className="text-sm text-gray-600">{user.company.name}</p>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;