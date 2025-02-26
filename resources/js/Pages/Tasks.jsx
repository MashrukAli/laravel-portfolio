import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import TextBlock from '../Components/Notion/TextBlock';
import axios from 'axios';

const Tasks = () => {
    const [blocks, setBlocks] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const [newBlock, setNewBlock] = useState('');

    useEffect(() => {
        fetchBlocks();
    }, []);

    const fetchBlocks = async () => {
        const response = await axios.get('/text-blocks');
        setBlocks(response.data);
    };

    const handleKeyDown = (e) => {
        if (e.key === '/') {
            e.preventDefault();
            setShowMenu(true);
        } else if (e.key === 'Escape') {
            setShowMenu(false);
        }
    };

    const handleTextBlock = () => {
        setShowMenu(false);
        setBlocks([...blocks, { id: 'temp', content: '', isEditing: true }]);
    };

    const handleSave = async (id, content) => {
        if (!content.trim()) return;
        
        if (id === 'temp') {
            const response = await axios.post('/text-blocks', { content });
            setBlocks(blocks.map(block => 
                block.id === 'temp' ? {...response.data, isEditing: false} : block
            ));
        } else {
            const response = await axios.put(`/text-blocks/${id}`, { content });
            setBlocks(blocks.map(block => 
                block.id === id ? {...response.data, isEditing: false} : block
            ));
        }
    };

    const handleEdit = (id) => {
        setBlocks(blocks.map(block => 
            block.id === id ? {...block, isEditing: true} : block
        ));
        setNewBlock(blocks.find(block => block.id === id).content);
    };

    const handleDelete = async (id) => {
        await axios.delete(`/text-blocks/${id}`);
        setBlocks(blocks.filter(block => block.id !== id));
    };

    return (
        <div 
            className="min-h-screen bg-gray-900 text-white" 
            onKeyDown={handleKeyDown}
            tabIndex="-1"
        >
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Task Management</h1>
                <div className="bg-gray-800 rounded-lg p-6 relative">
                    <div className="mb-4 text-sm text-gray-400">
                        Press <kbd className="px-2 py-1 bg-gray-700 rounded">/</kbd> anywhere to add a block
                    </div>
                    <div className="space-y-1">
                        {blocks.map((block) => (
                            <TextBlock
                                key={block.id}
                                block={block}
                                onSave={handleSave}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                newBlock={newBlock}
                                setNewBlock={setNewBlock}
                            />
                        ))}
                    </div>

                    {showMenu && (
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 rounded-lg shadow-xl border border-gray-600 w-64">
                            <div className="p-4 border-b border-gray-600">
                                <input
                                    type="text"
                                    className="w-full bg-transparent outline-none"
                                    placeholder="Search for a block..."
                                    autoFocus
                                />
                            </div>
                            <div className="p-2">
                                <button
                                    onClick={handleTextBlock}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-600 rounded-lg flex items-center gap-2"
                                >
                                    <span className="text-gray-400">Aa</span>
                                    <span>Text block</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tasks;