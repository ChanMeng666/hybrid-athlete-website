'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

// 修改动态导入路径
const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-[600px]">
            <Loader2 className="w-8 h-8 animate-spin text-white" />
        </div>
    ),
});

const SplineScene = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">3D SHOWCASE</h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-8" />
                </motion.div>

                {/* 3D Scene Container */}
                <div className="w-full h-[600px] rounded-xl overflow-hidden bg-gray-900/30 backdrop-blur">
                    <Spline
                        scene="https://prod.spline.design/uky3phq9bLR6SJWb/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default SplineScene;
