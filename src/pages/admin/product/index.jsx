import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Navbar from '../../../components/Navbar';
import Table from '../../../components/Table';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import { IconEdit, IconTrash } from '@tabler/icons-react';

export default function ProductIndex() {
    const [displayName, setDisplayName] = useState(null);

    useEffect(() => {
        // Inisialisasi auth
        const auth = getAuth();

        // Gunakan onAuthStateChanged untuk mendengarkan perubahan status otentikasi
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Pengguna sedang masuk, akses nama pengguna jika tersedia
                const userDisplayName = user.displayName;
                if (userDisplayName) {
                    setDisplayName(userDisplayName);
                } else {
                    setDisplayName('Nama pengguna belum disetel.');
                }
            } else {
                // Pengguna tidak masuk
                setDisplayName(null);
            }
        });

        // Unsubscribe dari listener saat komponen dibongkar
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <Navbar displayName={displayName} />
            <Container>
                <Button className='my-2'>Tambah Data</Button>
                <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Nama</Table.Th>
                            <Table.Th>Image</Table.Th>
                            <Table.Th>Category</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <tr>
                            <Table.Td>#</Table.Td>
                            <Table.Td>Ikan 1</Table.Td>
                            <Table.Td>
                                <img
                                    src={
                                        // product.picture
                                        // ? product.picture
                                        // :
                                        'https://flowbite.com/docs/images/blog/image-1.jpg'
                                    }
                                    className='rounded w-12 h-12'
                                />
                            </Table.Td>
                            <Table.Td>Kategori Ikan 1</Table.Td>
                            <Table.Td className='w-10'>
                                <div className='flex flex-nowrap gap-2'>
                                    <Button
                                        className='w-8 h-8 bg-primary'
                                        type='button'
                                        onClick={() =>
                                            openModalProduct(
                                                product.slug,
                                                'edit',
                                            )
                                        }
                                    >
                                        <IconEdit size={18} />
                                    </Button>
                                    <Button
                                        className='w-8 h-8 bg-red'
                                        type='button'
                                        onClick={() =>
                                            openToast(
                                                product.slug,
                                                product.ingredient.name,
                                            )
                                        }
                                    >
                                        <IconTrash size={18} />
                                    </Button>
                                </div>
                            </Table.Td>
                        </tr>
                    </Table.Tbody>
                </Table>
                {/* {units.length > 0 && (
                    <div className='flex w-full justify-between items-center'>
                        <Pagination meta={meta} links={links} />
                        <p className='text-sm text-dark mt-10'>
                            Total Jenis Satuan:{' '}
                            <span className='font-bold'>{total_units}</span>{' '}
                        </p>
                    </div>
                )} */}
            </Container>
        </div>
    );
}
