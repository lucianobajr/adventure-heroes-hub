import React from 'react';

import ImageNotFound from "../../assets/svgs/not-found.svg"
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
   
    const history = useNavigate();

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <img src={ImageNotFound} alt="vector not found" />
            <h1 className='mt-5 font-roboto-slab font-bold text-3xl'>Page not Founded!</h1>
            <Button className='mt-8' onClick={()=> history("/")}>return to home</Button>
        </div>
    );
}
export default NotFound;