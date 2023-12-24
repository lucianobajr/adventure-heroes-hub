import React from 'react';

import { motion } from 'framer-motion';

import { Skeleton } from '@/components/atoms/skeleton';

const LoadingSkeleton: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Skeleton className="w-80 h-96" />
        </motion.div>

    );
}

export default LoadingSkeleton;