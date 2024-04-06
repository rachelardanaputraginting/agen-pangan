import React from 'react';
import { useState } from 'react';
import Cart from './Cart';
import Button from './Button';
import Label from './Label';
import Input from './Input';

export default function FormLogin() {
    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(form);
    }
    return (
        <Cart>
            <Cart.Title>Sign up for new account!</Cart.Title>
            <form onSubmit={handleSubmit}>
                <Cart.Body>
                    <div className='mb-5 border rounded-lg p-4'>
                        <p>Name: {form.name || '---'}</p>
                        <p>Email: {form.email || '---'}</p>
                    </div>

                    <div className='mb-6'>
                        <Label htmlFor='name' value='Name' />
                        <Input
                            value={form.name}
                            onChange={onChange}
                            id='name'
                            name='name'
                        />
                    </div>
                    <div className='mb-6'>
                        <Label htmlFor='email' value='Email' />
                        <Input
                            value={form.email}
                            onChange={onChange}
                            id='email'
                            name='email'
                        />
                    </div>
                </Cart.Body>

                <Cart.Footer>
                    <Button type='submit' className='bg-black'>
                        <IconBrandGithub />
                        Register
                    </Button>
                </Cart.Footer>
            </form>
        </Cart>
    );
}
