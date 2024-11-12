// src/components/SocialFeed.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SocialCard from './SocialCard';
import { SocialPost } from '@/types/social';

// 模拟数据 - 实际使用时替换为API调用
const MOCK_POSTS: SocialPost[] = [
    {
        id: '1',
        platform: 'instagram',
        content: '💪 Morning workout complete! New PR on deadlifts - feeling stronger every day. #hybridathlete #strengthtraining',
        imageUrl: '/api/placeholder/600/600',
        likes: 234,
        comments: 12,
        date: '2024-03-15',
        link: '#'
    },
    {
        id: '2',
        platform: 'facebook',
        content: '🏃‍♂️ Just finished a 20-mile training run. Marathon prep is going strong! #running #endurance',
        imageUrl: '/api/placeholder/600/600',
        likes: 156,
        comments: 8,
        date: '2024-03-14',
        link: '#'
    },
    // Add more mock posts as needed
];

const SocialFeed = () => {
    const [filter, setFilter] = useState<'all' | 'instagram' | 'facebook'>('all');

    const filteredPosts = MOCK_POSTS.filter(post =>
        filter === 'all' ? true : post.platform === filter
    );

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">SOCIAL FEED</h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-8" />

                    {/* Filter Buttons */}
                    <div className="flex justify-center space-x-4 mb-12">
                        {['all', 'instagram', 'facebook'].map((option) => (
                            <button
                                key={option}
                                onClick={() => setFilter(option as any)}
                                className={`px-6 py-2 rounded-full transition-colors ${
                                    filter === option
                                        ? 'bg-white text-black'
                                        : 'bg-gray-900 text-white hover:bg-gray-800'
                                }`}
                            >
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <SocialCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialFeed;
