// src/components/Lightbox.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { GalleryImage } from '@/types/gallery';

interface LightboxProps {
    image: GalleryImage | null;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
}

const Lightbox = ({ image, onClose, onNext, onPrevious }: LightboxProps) => {
    if (!image) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
                onClick={onClose}
            >
                {/* Close button */}
                <button
                    className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                    onClick={onClose}
                >
                    <X className="w-8 h-8" />
                </button>

                {/* Navigation buttons */}
                <button
                    className="absolute left-4 text-white hover:text-gray-300 z-10"
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrevious();
                    }}
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                    className="absolute right-4 text-white hover:text-gray-300 z-10"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                >
                    <ChevronRight className="w-8 h-8" />
                </button>

                {/* Image container */}
                <motion.div
                    className="relative w-full max-w-5xl h-[80vh] mx-4"
                    onClick={(e) => e.stopPropagation()}
                    layoutId={`gallery-image-${image.id}`}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 80vw"
                        priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-white text-lg">{image.alt}</p>
                        <p className="text-gray-300 text-sm">{new Date(image.date).toLocaleDateString()}</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Lightbox;
