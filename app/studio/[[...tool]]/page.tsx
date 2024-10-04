/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import dynamicImport from "next/dynamic";
import config from "../../../sanity.config";

export const dynamic = "auto";

// Keep the node runtime
export const runtime = "edge";

// Use dynamic import for NextStudio
const DynamicStudio = dynamicImport(() =>
  import("next-sanity/studio").then((mod) => mod.NextStudio),
);

export default function StudioPage() {
  return <DynamicStudio config={config} />;
}
