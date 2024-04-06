import clsx from 'clsx';

function Button(props) {
    const {
        className = 'bg-primary text-black',
        children,
        text,
        type = 'submit',
    } = props;
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                className,
                'inline-flex justify-center bg-primary whitespace-nowrap text-black items-center gap-x-2 h-12 px-4 rounded',
            )}
        >
            {text || children}
        </button>
    );
}

export default Button;
