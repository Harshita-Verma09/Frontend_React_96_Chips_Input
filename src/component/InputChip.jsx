import React, { useState } from 'react';

const InputChip = () => {
    const [val, setVal] = useState('');
    const [chips, setChips] = useState([]);

    const handleChips = (e) => {
        setVal(e.target.value);
    };

    const handleAdd = () => {
        const inputChip = val.trim();
        if (inputChip && !chips.includes(inputChip)) {
            setChips([...chips, inputChip]);
            setVal('');
        }
    };

    const handleRemove = (chipRemove) => {
        setChips(chips.filter(chip => chip !== chipRemove));
    };

    return (
        <div className='bg-gray-900 min-h-screen text-white flex justify-center items-center p-6'>
            <div className='bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md'>
                <form onSubmit={(e) => e.preventDefault()} className='flex gap-2 mb-4'>
                    <input
                        type="text"
                        value={val}
                        onChange={handleChips}
                        placeholder='Enter a chip...'
                        className='flex-1 px-3 py-2 text-2xl rounded-md text-white focus:outline-none'
                    />
                    <button
                        type="button"
                        onClick={handleAdd}
                        className='bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition'
                    >
                        Add
                    </button>
                </form>

                <div className='flex flex-wrap gap-2'>
                    {chips.map((chip, idx) => (
                        <span
                            key={idx}
                            className='bg-blue-500 px-3 py-1 rounded-full flex items-center gap-2 text-xl'
                        >
                            {chip}
                            <button
                                onClick={() => handleRemove(chip)}
                                className='text-white bg-red-600 w-5 h-5 rounded-full text-xs flex items-center justify-center hover:bg-red-700'
                            >
                                ×
                            </button>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InputChip;
