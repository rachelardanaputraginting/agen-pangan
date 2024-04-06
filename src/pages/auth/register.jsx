import React, { useState } from 'react';
import Container from '../../components/Container';
import Cart from '../../components/Cart';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';
import app from '../../libs/firebase';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Error from '../../components/Error';

export default function Register() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const auth = getAuth(app);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Must be at least 6 characters')
                .required('Password is required'),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            const { name, email, password } = values;
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password,
                );
                const user = userCredential.user;
                await updateProfile(user, { displayName: name });
                setLoading(false);
                navigate('/login');
            } catch (error) {
                setLoading(false);
                formik.resetForm();
            }
        },
    });

    return (
        <Container className='flex min-h-screen justify-center items-center'>
            <Cart className='w-1/4'>
                <Cart.Title>Form Register</Cart.Title>
                <Cart.Body>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='mb-2'>
                            <Label htmlFor='name' value='Name' />
                            <Input
                                placeholder='John Doe'
                                id='name'
                                name='name'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <Error>{formik.errors.name}</Error>
                            ) : null}
                        </div>
                        <div className='mb-2'>
                            <Label htmlFor='email' value='Email' />
                            <Input
                                placeholder='johndoe@example.com'
                                id='email'
                                name='email'
                                type='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <Error>{formik.errors.email}</Error>
                            ) : null}
                        </div>
                        <div className='mb-2'>
                            <Label htmlFor='password' value='Password' />
                            <Input
                                placeholder='*******'
                                id='password'
                                name='password'
                                type='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.touched.password &&
                            formik.errors.password ? (
                                <Error>{formik.errors.password}</Error>
                            ) : null}
                        </div>
                        <Button
                            disabled={loading}
                            type='submit'
                            className='mt-4 bg-primary w-full'
                        >
                            {loading ? 'Loading...' : 'Register'}
                        </Button>
                    </form>
                    <span className='flex justify-center mt-2 text-black'>
                        Already registered?{' '}
                        <Link
                            className='text-primary font-semibold ml-1'
                            to='/login'
                        >
                            {' '}
                            Login
                        </Link>
                    </span>
                </Cart.Body>
            </Cart>
        </Container>
    );
}
