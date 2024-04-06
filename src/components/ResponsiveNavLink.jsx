import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start pl-3 pr-4 py-2 ${
                active
                    ? ' text-secondary bg-primary focus:text-secondary focus:bg-primary'
                    : ' text-white hover:text-secondary hover:bg-gray-50 hover:-300 focus:text-secondary focus:bg-gray-50 font-medium focus:'
            } text-base focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
