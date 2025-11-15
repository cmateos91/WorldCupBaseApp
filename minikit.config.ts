const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjE0NzgwMzAsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg0RTEwMTAxMmViQjg1MURDZUExNGIyRDNEMzg2OTIxYmE5NzkyYzJCIn0",
    payload: "eyJkb21haW4iOiJ3b3JsZC1jdXAtYmFzZS1hcHAudmVyY2VsLmFwcCJ9",
    signature: "MHgzNzdmYWYwNDZkM2E5Njc4NzhhZGVhMTljOGJkMzEzZmRiNWE1NGFhOGNjMWExZTRkYTQ4Y2ZmZjcwMzA3NzhjM2NkNDBlNDgwZTAxNWNkY2Q1YjEyZjY4ZjIwOTAwOWIyNGUwM2EwZmZlYjQ0ZjdlZjE2YjcwZTYxYWY3Yzg4ZTFj",
  },
  baseBuilder: {
    ownerAddress: "",
  },
  miniapp: {
    version: "1",
    name: "worldcup26",
    subtitle: "",
    description: "",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
