import React from 'react';
import Navbar from '../Components/Navbar';

const Tasks = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Task Management</h1>
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">My Tasks</h2>
                    {/* Task management content will go here */}
                    <p className="text-gray-300">Task management system coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default Tasks;