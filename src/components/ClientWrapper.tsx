// src/components/ClientWrapper.tsx
'use client';

import Header from './Header';
import Profile from './Profile';
import SocialFeed from './SocialFeed';
import Gallery from './Gallery';

export default function ClientWrapper() {
    return (
        <>
            <Header />
            <Profile />
            <SocialFeed />
            <Gallery />
        </>
    );
}
