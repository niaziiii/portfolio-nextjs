import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No incremental-cache override: ISR pages (/projects, /experience) are rebuilt
// per isolate rather than shared via R2. Swap in r2IncrementalCache if the
// `revalidate: 60` on those pages needs to be honoured across the fleet.
export default {
  ...defineCloudflareConfig(),
  // OpenNext shells out to `npm run build` to produce the Next output, but
  // Cloudflare's dashboard build command is also `npm run build` — which is this
  // adapter. Point it at the plain Next build so the two don't recurse.
  buildCommand: "npx next build",
};
