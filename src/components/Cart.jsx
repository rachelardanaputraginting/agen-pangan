import clsx from 'clsx';

function Cart({ className, children }) {
    return (
        <div
            className={clsx(
                className,
                'border border-primary rounded-lg bg-white overflow-hidden text-black',
            )}
        >
            {children}
        </div>
    );
}

function Title({ children }) {
    return (
        <div className='p-4 border-b border-primary'>
            <h1 className='text-lg'>{children}</h1>
        </div>
    );
}

function Body({ children }) {
    return <div className='leading-relaxed p-4'>{children}</div>;
}

function Footer({ children }) {
    return <div className='bg-primary/50 p-4'>{children}</div>;
}

Cart.Title = Title;
Cart.Footer = Footer;
Cart.Body = Body;

export default Cart;
