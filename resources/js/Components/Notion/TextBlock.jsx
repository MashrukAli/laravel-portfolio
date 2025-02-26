import React from 'react';

const TextBlock = ({ block, onSave, onEdit, onDelete, newBlock, setNewBlock }) => {
    return (
        <div className="group relative hover:bg-gray-750 rounded-lg transition-colors">
            <div className="flex items-center gap-2 p-2">
                {block.isEditing ? (
                    <input
                        type="text"
                        className="bg-transparent w-full text-white outline-none"
                        autoFocus
                        value={newBlock}
                        onChange={(e) => setNewBlock(e.target.value)}
                        onBlur={() => onSave(block.id, newBlock)}
                        placeholder="Type something..."
                    />
                ) : (
                    <>
                        <p 
                            className="flex-1 cursor-text" 
                            onClick={() => onEdit(block.id)}
                        >
                            {block.content || "Click to edit..."}
                        </p>
                        <button
                            onClick={() => onDelete(block.id)}
                            className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-400 transition-opacity"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TextBlock;