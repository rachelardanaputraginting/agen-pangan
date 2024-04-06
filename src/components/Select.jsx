import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'

export default function Select({ className = 'w-full', data, value, onChange, placeholder = 'Select one' }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (newValue) => {
        onChange(newValue)
        setIsOpen(false) // Close the dropdown after selection
    }

    const filteredData = data.filter((item) => item.id !== value?.id)

    return (
        <Listbox
            as="div"
            className={clsx("relative z-[900] rounded", className)}
            value={value}
            onChange={handleSelect}
            open={isOpen}
        >
            <Listbox.Button
                className={clsx(
                    "flex h-11 w-full items-center bg-third focus:bg-white active:bg-white justify-between rounded border border-fifth px-4 focus:outline-none",
                    className
                )}
            >
                <span className="capitalize line-clamp-1 text-dark">
                    {value.name || value || placeholder}
                </span>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        className="h-5 w-5 text-fifth"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path
                            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </Listbox.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Listbox.Options className="z-90 absolute right-0 mt-1 max-h-[10rem] w-full overflow-y-auto rounded border border-fifth bg-white shadow-sm">
                    {filteredData.map((item) => (
                        <Listbox.Option key={item.id} value={item}>
                            {({ selected, active }) => (
                                <div
                                    className={clsx(
                                        "flex cursor-pointer items-center py-1.5 px-4",
                                        active && "bg-third",
                                        selected &&
                                            "bg-primary font-semibold text-primary hover:bg-primary"
                                    )}
                                >
                                    <span className="capitalize line-clamp-1 text-dark">
                                        {item.name}
                                    </span>
                                </div>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    );
}
