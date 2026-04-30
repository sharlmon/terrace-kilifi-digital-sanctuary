export const SITE = {
  name: "The Terrace Kilifi",
  url: "https://www.terracekilifi.com",
  email: "residency@terracekilifi.com",
  address: {
    street: "Bandari Road, Mnarani",
    locality: "Kilifi",
    country: "Kenya",
    note: "Turn off the Mombasa–Malindi Highway at the junction opposite Mnarani Club.",
    full: "Bandari Road, Mnarani, Kilifi, Kenya",
  },
  // Approximate coordinates for Mnarani, Kilifi
  geo: { lat: -3.6418, lng: 39.8499 },
  social: {
    instagram: "https://www.instagram.com/terracekilifi",
    facebook: "https://www.facebook.com/terracekilifi",
  },
} as const;

export const mapEmbedSrc =
  `https://www.google.com/maps?q=${encodeURIComponent("Bandari Road, Mnarani, Kilifi, Kenya")}&z=15&output=embed`;

export const mapDirectionsUrl =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Bandari Road, Mnarani, Kilifi, Kenya")}`;
