// src/types/social.ts
export interface SocialPost {
    id: string;
    platform: 'instagram' | 'facebook';
    content: string;
    imageUrl: string;
    likes: number;
    comments: number;
    date: string;
    link: string;
}
