import React from 'react';

export default function Error({ value, children }) {
    return (
        <div className='text-sm mt-2 text-red block'>
            {value ? value : children}
        </div>
    );
}
