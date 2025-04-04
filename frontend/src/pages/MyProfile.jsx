import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/user/profile', {
                    headers: { Authorization: `${token}` }
                });
                setUser(response.data);
                setFormData(response.data);
            } catch (err) {
                console.log(err)
                setError('Failed to fetch user data');
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.put('http://localhost:5000/api/user/profile', formData, {
                headers: { Authorization: `${token}` }
            });
            setUser(formData);
            setEditing(false);
        } catch (err) {
            console.log(err)
            setError('Failed to update profile');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-bold">My Profile</h2>
            {editing ? (
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-2 w-full rounded mt-2"
                    />
                    <button onClick={handleUpdate} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                        Save
                    </button>
                    <button onClick={() => setEditing(false)} className="mt-2 bg-gray-500 text-white px-4 py-2 rounded ml-2">
                        Cancel
                    </button>
                </div>
            ) : (
                <div>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button onClick={() => setEditing(true)} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
                        Edit Profile
                    </button>
                </div>
            )}
        </div>
    );
};

export default MyProfile;
