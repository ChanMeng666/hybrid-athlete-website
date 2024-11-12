// src/components/Gallery.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GalleryImage } from '@/types/gallery';
import Lightbox from './Lightbox';

// 模拟图片数据 - 实际使用时替换为真实数据
const MOCK_IMAGES: GalleryImage[] = [
    {
        id: '1',
        src: '/api/placeholder/800/600',
        alt: 'Deadlift PR Attempt',
        category: 'strength',
        date: '2024-03-15'
    },
    {
        id: '2',
        src: '/api/placeholder/800/600',
        alt: 'Marathon Training Run',
        category: 'endurance',
        date: '2024-03-14'
    },
    {
        id: '3',
        src: '/api/placeholder/800/600',
        alt: 'Recovery Day',
        category: 'lifestyle',
        date: '2024-03-13'
    },
    // Add more mock images as needed
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [filter, setFilter] = useState<'all' | 'strength' | 'endurance' | 'lifestyle'>('all');

    const filteredImages = MOCK_IMAGES.filter(
        img => filter === 'all' ? true : img.category === filter
    );

    const getNextImage = () => {
        if (!selectedImage) return;
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
    };

    const getPreviousImage = () => {
        if (!selectedImage) return;
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const previousIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
        setSelectedImage(filteredImages[previousIndex]);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">PHOTO GALLERY</h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-8" />

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['all', 'strength', 'endurance', 'lifestyle'].map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category as any)}
                                className={`px-6 py-2 rounded-full transition-colors ${
                                    filter === category
                                        ? 'bg-white text-black'
                                        : 'bg-gray-900 text-white hover:bg-gray-800'
                                }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            layoutId={`gallery-image-${image.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-square cursor-pointer group"
                            onClick={() => setSelectedImage(image)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                <p className="text-white text-lg font-semibold">{image.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <Lightbox
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                    onNext={getNextImage}
                    onPrevious={getPreviousImage}
                />
            </div>
        </section>
    );
};

export default Gallery;
