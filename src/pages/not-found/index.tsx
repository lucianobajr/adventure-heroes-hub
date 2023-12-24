import React from 'react';

import { useNavigate } from 'react-router-dom';

import { NotFound as NotFoundOrganism } from '@/components/organisms';

const NotFound: React.FC = () => {

    const history = useNavigate();

    const handleReturnHome = () => history("/")

    return (
        <NotFoundOrganism handleReturnHome={handleReturnHome} />
    );
}
export default NotFound;