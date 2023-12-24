import React from 'react';

import { motion } from "framer-motion";

import Logo from "@/assets/svgs/logo-with-name.svg"

import { containerVariants } from '@/constants/framer-motion/variants';
import { FormSignIn } from '@/components/molecules';

const HeroSignInContent: React.FC = () => {
    return (
        <motion.div
            className="h-screen w-full md:w-1/2 bg-white dark:bg-white flex flex-col items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 0.5 }}
        >
            <img
                src={Logo}
                alt="Adventure Heroes Hub Logo"
                className='w-52 h-52 md:hidden block md:overflow-x-hidden md:overflow-y-hidden mb-9'
            />

            <div className='xs:w-96 w-full xs:p-0 p-2'>
                <h1 className='font-roboto-slab font-bold text-4xl text-gray-secondary dark:text-gray-secondary'>Hora da Batalha!</h1>
                <h3 className='text-base mt-3 dark:text-black'>Embarque na sua jornada épica. Estávamos esperando por você para viver as maiores aventuras!</h3>
            </div>

            <div className='xs:w-96 w-full mt-16 xs:p-0 p-2'>

                <FormSignIn />
            </div>

        </motion.div >
    );
}

export default HeroSignInContent;