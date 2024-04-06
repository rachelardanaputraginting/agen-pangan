import React, { useState } from 'react';
import Container from '../../components/Container';
import Cart from '../../components/Cart';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';
import app from '../../libs/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Error from '../../components/Error';
import Swal from 'sweetalert2';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const auth = getAuth(app);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Must be at least 6 characters')
                .required('Password is required'),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            const { email, password } = values;
            try {
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password,
                );
                // Signed in
                const user = userCredential.user;
                setLoading(false);
                navigate('/');
            } catch (error) {
                setLoading(false);
                formik.resetForm();

                // Menampilkan pesan kesalahan menggunakan SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Unable to login. Please check your credentials.',
                });
            }
        },
    });

    return (
        <Container className='flex min-h-screen justify-center items-center'>
            <Cart className='w-1/4'>
                <Cart.Title>Form Login</Cart.Title>
                <Cart.Body>
                    <form onSubmit={formik.handleSubmit}>
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
                            {loading ? 'Loading...' : 'Login'}
                        </Button>
                    </form>
                    <span className='flex justify-center mt-2 text-black'>
                        Don't have an account?{' '}
                        <Link
                            className='text-primary font-semibold ml-1'
                            to='/register'
                        >
                            {' '}
                            Register
                        </Link>
                    </span>
                </Cart.Body>
            </Cart>
        </Container>
    );
}
