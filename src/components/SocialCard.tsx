// src/components/SocialCard.tsx
'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { SocialPost } from '@/types/social';
import Image from 'next/image';

interface SocialCardProps {
    post: SocialPost;
    index: number;
}

const SocialCard = ({ post, index }: SocialCardProps) => {
    const PlatformIcon = post.platform === 'instagram' ? Instagram : Facebook;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
        >
            {/* Image Container */}
            <div className="relative aspect-square">
                <Image
                    src={post.imageUrl}
                    alt="Social media post"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                    <PlatformIcon className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <p className="text-gray-300 line-clamp-3 mb-4">{post.content}</p>

                {/* Stats */}
                <div className="flex items-center justify-between text-gray-400">
                    <div className="flex space-x-4">
                        <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm">{post.comments}</span>
                        </div>
                    </div>
                    <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                {/* Date */}
                <div className="mt-3 text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                </div>
            </div>
        </motion.div>
    );
};

export default SocialCard;
