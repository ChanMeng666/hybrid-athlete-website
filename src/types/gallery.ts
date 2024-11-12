// src/types/gallery.ts
export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    category: 'strength' | 'endurance' | 'lifestyle';
    date: string;
}
