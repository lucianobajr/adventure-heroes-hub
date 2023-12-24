import React from 'react';

import { Button } from '@/components/atoms/button';
import { NotFoundMessage } from '@/components/molecules';

interface NotFoundProps{
    handleReturnHome: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({handleReturnHome}) => {
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <NotFoundMessage />
            <Button className='mt-8' onClick={handleReturnHome}>return to home</Button>
        </div>
    );
}

export default NotFound;