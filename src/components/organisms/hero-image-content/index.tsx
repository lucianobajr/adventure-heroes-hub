import React from 'react';
import { motion } from "framer-motion";

import Logo from "@/assets/svgs/logo-with-name.svg"
import { imageVariants } from '@/constants/framer-motion/variants';

const HeroImageContent: React.FC = () => {
    return (
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 h-full bg-zinc-200 dark:bg-zinc-200 overflow-x-hidden overflow-y-hidden">
            <motion.div
                className="w-full h-full lg:h-3/5 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.img
                    src={Logo}
                    alt="Adventure Heroes Hub Logo"
                    initial="hidden"
                    className='w-96 h-96'
                    animate="visible"
                    variants={imageVariants}
                />
            </motion.div>
        </div>
    );
}

export default HeroImageContent;