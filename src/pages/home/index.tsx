import React from 'react';
import Logo from "../../assets/logo.svg"
import { ThemeSwitch } from '../../components';
import { Button } from '@/components/ui/button';

import { useAuth } from "../../contexts/auth/AuthContext";

const Home: React.FC = () => {
    
    const { signOut } = useAuth();
    
    return (
        <div className='font-sans flex flex-col justify-center items-center h-screen dark:bg-zinc-700 dark:text-white'>
            <img src={Logo} width={200} alt='React Logo' />
            <div className='mt-2'>
                <ThemeSwitch />
            </div>
            <Button onClick={signOut}>Ola</Button>
        </div>
    );
}

export default Home;