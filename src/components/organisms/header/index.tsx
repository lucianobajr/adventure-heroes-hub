import React from 'react';

import Logo from "@/assets/svgs/logo.svg"

import ThemeSwitch from "@/components/atoms/theme-switch";

import { Button } from '@/components/atoms/button';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/atoms/popover';

import { FiLogOut } from "react-icons/fi"

import { Input } from '@/components/atoms/input';

import { Avatar } from '@/components/atoms/avatar';
import { AvatarImage } from '@/components/atoms/avatar-image';
import { AvatarFallback } from '@/components/atoms/avatar-fallback';
import { useAuth } from '@/contexts/auth/AuthContext';

interface HeaderProps {
    handleSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ handleSearchTermChange }) => {

    const { signOut, user } = useAuth();

    return (
        <header className="sticky h-16 top-0 z-10 backdrop-filter backdrop-blur dark:bg-zinc-700 border-b border-solid border-stone-300 dark:border-zinc-800">
            <div className="container h-full flex flex-row justify-between">
                <img src={Logo} alt='Adventure Heroes Hub Logo' className='w-14 h-14' />
                <div className='flex h-full items-center'>
                    <Input
                        placeholder="Hero name"
                        className='w-28 h-10 rounded-lg border border-gray-secondary dark:bg-white font-roboto-slab text-gray-secondary dark:text-gray-secondary placeholder-gray-700 mr-5'
                        onChange={handleSearchTermChange}
                    />
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className='rounded-full w-12 h-12'>
                                <Avatar className='rounded-full w-10 h-10'>
                                    <AvatarImage src={`https://ui-avatars.com/api/name=${user.user.nickname}?background=D23A2E&color=fff&size=128&rounded=true`} alt={`${user.user.nickname} Avatar`} />
                                    <AvatarFallback>UD</AvatarFallback>
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
    );
}

export default Header;