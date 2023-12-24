import React from 'react';

import { HeroImageContent, HeroSignInContent } from '@/components/organisms';

const SignIn: React.FC = () => {

    return (
        <div className="h-screen w-screen flex">
            <HeroImageContent />
            <HeroSignInContent />
        </div>
    );
}

export default SignIn;