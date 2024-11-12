// src/components/Profile.tsx
'use client';

import { motion } from 'framer-motion';
import { Award, Target, Dumbbell } from 'lucide-react';

const statsList = [
    { icon: Target, label: 'Years Training', value: '8+' },
    { icon: Award, label: 'Competitions', value: '15+' },
    { icon: Dumbbell, label: 'PR Total', value: '1000lb' },
];

const achievements = [
    "🏆 National Powerlifting Championship Finalist",
    "🎯 Sub-3 Hour Marathon Runner",
    "💪 500lb Deadlift PR",
    "🏃‍♂️ Boston Marathon Qualifier"
];

const Profile = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Profile Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">THE JOURNEY OF A HYBRID ATHLETE</h2>
                        <div className="w-24 h-1 bg-white mx-auto mb-8" />
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Dedicated to pushing the boundaries of human performance through the perfect blend of
                            strength and endurance training. Every day is an opportunity to become better than yesterday.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                        variants={containerVariants}
                    >
                        {statsList.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                variants={itemVariants}
                                className="bg-black/50 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
                            >
                                <stat.icon className="w-12 h-12 mx-auto mb-4 text-white" />
                                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                                <p className="text-gray-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        variants={containerVariants}
                        className="bg-black/30 backdrop-blur-sm rounded-lg p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">Key Achievements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-center space-x-3 text-gray-300"
                                >
                                    <span className="text-lg">{achievement}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quote */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-16"
                    >
                        <blockquote className="text-xl italic text-gray-400">
                            &#34;The only person you should try to be better than, is the person you were yesterday.&#34;
                        </blockquote>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Profile;
