import { useEffect, useRef } from 'react';

const Input = ({ isFocused = false, type = 'text', ...props }) => {
    const inputRef = useRef();

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input
            ref={inputRef}
            {...props}
            type={type}
            className='transition duration-300 w-full border border-primary focus:outline-none focus:ring focus:ring-primary/50 focus:border-primary/50 border rounded-lg'
        />
    );
};
export default Input;
