import React from 'react';

export default function PlaceContentCenter({ children }) {

    return (
        <div className='bg-black'>
            <div className='bg-slate-200/20 flex items-center justify-center text-violet-50 min-h-screen tracking-tight antialiased'>
                <div className='max-w-lg w-full'>{children}</div>
            </div>
        </div>
    );
}
