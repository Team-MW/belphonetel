import React, { useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

interface PageWrapperProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: "easeIn"
        }
    }
};

export const PageWrapper: React.FC<PageWrapperProps> = ({
    children,
    title = "Belphonetel - Docteur du Mobile",
    description = "Réparation, vente et diagnostic de vos appareils mobiles. Le spécialiste de la santé de votre téléphone."
}) => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
        >
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            {children}
        </motion.div>
    );
};
