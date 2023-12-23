import React from 'react';
import Logo from "../../assets/logo.svg"
import { ThemeSwitch } from '../../components';
import { Button } from '@/components/ui/button';

import { useAuth } from "../../contexts/auth/AuthContext";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { FiLogOut, FiUser } from "react-icons/fi"

const Home: React.FC = () => {

    const { signOut, user } = useAuth();

    console.log(user.user.nickname)

    return (
        <div className='w-full font-sans flex flex-col dark:bg-zinc-700 dark:text-white'>
            <header className="sticky h-16 top-0 z-10 backdrop-filter backdrop-blur dark:bg-zinc-700 border-b border-solid border-stone-300 dark:border-zinc-800">
                <div className="container h-full flex flex-row justify-between">
                    <img src={Logo} alt='Adventure Heroes Hub Logo' className='w-14 h-14' />
                    <div className='flex h-full items-center'>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className='rounded-full w-12 h-12'>
                                    <Avatar className='rounded-full w-10 h-10'>
                                        <AvatarImage src={`https://ui-avatars.com/api/name=${user.user.nickname}?background=D23A2E&color=fff&size=128&rounded=true`} alt={`${user.user.nickname} Avatar`} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-64 flex flex-col">
                                <div className='flex items-center'>
                                    <p className='font-roboto-slab font-bold text-xl'>{user.user.nickname} <span className="font-roboto-slab bg-red-100 text-main text-sm font-semibold me-1 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-main ms-1">PLAYER</span></p>
                                </div>

                                <Button className='w-full mt-3' onClick={signOut}>Sair <FiLogOut className="ml-2" /></Button>
                            </PopoverContent>
                        </Popover>
                        <ThemeSwitch />

                    </div>
                </div>

            </header>



            <div className="min-h-screen" style={{ minHeight: 'calc(100vh - 4rem)' }}>
                <div className="container">
                    <p>Ola</p>
                </div>
            </div>
        </div>
    );
}

export default Home;