const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};


const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export { containerVariants, imageVariants }