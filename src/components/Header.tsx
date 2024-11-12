// src/components/Header.tsx
'use client';

import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            className="relative h-screen flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />

            {/* Background pattern */}
            <div className="absolute inset-0 bg-black">
                <motion.div
                    className="absolute inset-0 opacity-30"
                    initial={{ backgroundSize: "110%" }}
                    animate={{
                        backgroundSize: "100%",
                        transition: { duration: 20, repeat: Infinity, repeatType: "reverse" }
                    }}
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Main title content */}
            <div className="relative z-20 text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h1 className="heading-1 mb-4">HYBRID ATHLETE</h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="w-24 h-1 bg-white mx-auto"
                    />
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <div className="flex flex-col items-center">
                        <span className="text-sm tracking-widest mb-2">SCROLL</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1 h-8 bg-white"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.header>
    );
};

export default Header;
