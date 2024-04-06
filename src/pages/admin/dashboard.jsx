import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Navbar from '../../components/Navbar';

function Dashboard() {
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
        <div className='text-red-600'>
            <Navbar displayName={displayName} />
        </div>
    );
}

export default Dashboard;
