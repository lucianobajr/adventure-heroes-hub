import React from 'react';
import Logo from "../../assets/logo.svg"
import { ThemeSwitch } from '../../components';

const Home: React.FC = () => {
    return (
        <div className='font-sans flex flex-col justify-center items-center h-screen dark:bg-zinc-700 dark:text-white'>
            <img src={Logo} width={200} alt='React Logo' />
            <h1 className='text-2xl'>Hello World!</h1>
            <h2>React + TailwindCSS Dark Mode App</h2>
            <div className='mt-2'>
                <ThemeSwitch />
            </div>
        </div>
    );
}

export default Home;