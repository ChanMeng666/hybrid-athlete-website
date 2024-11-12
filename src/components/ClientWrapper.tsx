// src/components/ClientWrapper.tsx
'use client';

import Header from './Header';
import Profile from './Profile';
import SocialFeed from './SocialFeed';
import Gallery from './Gallery';
import SplineScene from './SplineScene';

export default function ClientWrapper() {
    return (
        <>
            <SplineScene />
            <Header />
            <Profile />
            <SocialFeed />
            <Gallery />
        </>
    );
}
