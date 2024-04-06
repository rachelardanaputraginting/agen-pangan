import { Link } from 'react-router-dom';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-primary text-black focus:border-primary '
                    : 'border-transparent text-black hover:text-black hover:border-black focus:text-black focus:border-black ') +
                className
            }
        >
            {children}
        </Link>
    );
}
