import React from 'react';
import { useState } from 'react';
import Dropdown from './Dropdown';
import ResponsiveNavLink from './ResponsiveNavLink copy';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

export default function Navbar({ displayName }) {
    console.log(displayName);
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <nav className='bg-primary fixed  z-[999] top-0 border-b border-black w-full'>
            <div className='max-w-8xl mx-auto px-4 sm:px-4 lg:px-24'>
                <div className='flex justify-between h-16'>
                    <div className='flex w-full md:w-3/4 justify-between'>
                        <div className='flex items-center w-full'>
                            <Link
                                to='/'
                                className='text-2xl p-2 rounded font-bold text-black'
                            >
                                Agen Pangan
                            </Link>
                        </div>

                        <div className='hidden sm:-my-px sm:flex flex justify-between gap-8'>
                            <NavLink to='/admin/dashboard'>Dashboard</NavLink>
                            <NavLink to='/admin/product'>Product</NavLink>
                            <NavLink to='/admin/price'>Price</NavLink>
                            <NavLink to='/admin/category'>Category</NavLink>
                            <NavLink to='/admin/purchase'>Purchase</NavLink>
                        </div>
                    </div>

                    <div className='hidden w-1/4 flex justify-end sm:flex sm:items-center'>
                        <div>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className='inline-flex rounded-md'>
                                        <button
                                            type='button'
                                            className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-black bg-white hover:text-black focus:outline-none transition ease-in-out duration-150'
                                        >
                                            <div className='flex items-center gap-2'>
                                                {/* {auth.user.name} */}
                                                {displayName}
                                            </div>

                                            <svg
                                                className='ml-2 -mr-0.5 h-4 w-4'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 20 20'
                                                fill='currentColor'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link to=''>Profile</Dropdown.Link>
                                    <Dropdown.Link as='button'>
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>

                    <div className='-mr-2 flex items-center sm:hidden'>
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState,
                                )
                            }
                            className='inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-black focus:outline-none focus:bg-black focus:text-black transition duration-150 ease-in-out'
                        >
                            <svg
                                className='h-6 w-6'
                                stroke='currentColor'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? 'inline-flex'
                                            : 'hidden'
                                    }
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? 'inline-flex'
                                            : 'hidden'
                                    }
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={
                    (showingNavigationDropdown ? 'block' : 'hidden') +
                    ' sm:hidden'
                }
            >
                <div className='pt-2 pb-3 space-y-1'>
                    <ResponsiveNavLink to='/'>Log</ResponsiveNavLink>
                </div>

                <div className='pt-4 pb-1 border-t border-black'>
                    <div className='px-4'>
                        <div className='font-medium text-base text-black'>
                            {/* {auth.user.name} */}
                        </div>
                        <div className='font-medium text-sm text-black'>
                            {/* {auth.user.email} */}
                        </div>
                    </div>

                    <div className='mt-3 space-y-1'>
                        <ResponsiveNavLink method='post' as='button'>
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
