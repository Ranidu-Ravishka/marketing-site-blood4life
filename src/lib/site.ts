export const site = {
  name: "Blood4Life",
  url: "https://blood4life.vercel.app",
  tagline: "One donation. A world of difference.",
  github: "https://github.com/Ranidu-Ravishka/blood_4_life",
  marketingRepo: "https://github.com/Ranidu-Ravishka/marketing-site-blood4life",
  figma: "https://www.figma.com/proto/3UOZJ5LCNrHnnj7BUcG6TB/blood-donation",
} as const;

export const nav = [
  { href: "#purpose", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#features", label: "Features" },
  { href: "#technology", label: "Technology" },
  { href: "#download", label: "Download" },
] as const;

export const features = [
  {
    index: "01",
    title: "Donor discovery",
    text: "A dedicated screen for searching by blood type or location, with filters for each major blood group.",
  },
  {
    index: "02",
    title: "Donation centers",
    text: "Centers are read from Cloud Firestore. The flow can show distance, open directions, and place a call.",
  },
  {
    index: "03",
    title: "Banks and hospitals",
    text: "Separate screens help people look up blood banks and hospitals, each with a location search.",
  },
  {
    index: "04",
    title: "Profile and history",
    text: "Signed-in people keep account details with their profile, including a donation history view.",
  },
] as const;

export const stages = [
  {
    index: "01",
    title: "Discover",
    text: "Find relevant paths already in the app: donors, donation centers, blood banks, and hospitals.",
  },
  {
    index: "02",
    title: "Connect",
    text: "From a donation center, open directions or call. Donor listings are there to review.",
  },
  {
    index: "03",
    title: "Make an impact",
    text: "Sign in, keep a profile, and return to a donation history as part of the journey.",
  },
] as const;

export const technologies = [
  { name: "Flutter", text: "Cross-platform interface for the mobile application." },
  { name: "Dart", text: "The language used throughout the app and its packages." },
  { name: "Firebase Auth", text: "Email and Google sign-in, including password reset." },
  { name: "Cloud Firestore", text: "Profiles and donation center records." },
  { name: "Google Sign-In", text: "An additional sign-in path beside email and password." },
  { name: "Geolocator", text: "Device location used when measuring distance to a center." },
] as const;

export const impact = [
  { index: "01", title: "Donation", text: "A single, deliberate act, made easier to begin." },
  { index: "02", title: "Connection", text: "Donors, recipients, and blood banks brought into one journey." },
  { index: "03", title: "Community", text: "Local centers, banks, and hospitals kept within reach." },
  { index: "04", title: "Impact", text: "A record of giving that stays with the person who gave." },
] as const;
