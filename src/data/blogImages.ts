import type { ImageMetadata } from 'astro';
import wholeHomeWifiImg from '../images/AdobeStock_1125746852.jpeg';
import troubleshootingImg from '../images/AdobeStock_2029345533.jpeg';
import cameraUpgradeImg from '../images/AdobeStock_437982427.jpeg';
import smartLockImg from '../images/AdobeStock_769078732.jpeg';
import tvMountImg from '../images/AdobeStock_1829282770.jpeg';
import commercialCameraImg from '../images/AdobeStock_2103632686.jpeg';

// Maps a blog post's id (its filename in src/content/blog/, minus .md) to its hero image
// and alt text. Kept separate from content.config.ts because content collection schemas
// can't return imported ImageMetadata for images living outside the collection's own folder.
export const blogImages: Record<string, { src: ImageMetadata; alt: string }> = {
  'whole-home-wifi-installation-cost': {
    src: wholeHomeWifiImg,
    alt: 'Wireless router set up in a living space for whole-home Wi-Fi coverage',
  },
  'mesh-wifi-vs-wifi-extender': {
    src: troubleshootingImg,
    alt: 'Technician diagnosing network equipment to resolve a Wi-Fi dead zone',
  },
  'diy-vs-professional-security-camera-installation': {
    src: cameraUpgradeImg,
    alt: 'Technician installing an outdoor security camera under the eave of a home',
  },
  'smart-lock-vs-traditional-deadbolt': {
    src: smartLockImg,
    alt: 'Unlocking a smart door lock with a mobile phone',
  },
  'tv-mounting-cost-what-to-know': {
    src: tvMountImg,
    alt: 'Technician mounting a TV on a wall',
  },
  'smart-building-basics-for-small-business': {
    src: commercialCameraImg,
    alt: 'Commercial security camera mounted on an office building',
  },
};
