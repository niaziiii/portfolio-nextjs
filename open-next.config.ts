import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No incremental-cache override: ISR pages (/projects, /experience) are rebuilt
// per isolate rather than shared via R2. Swap in r2IncrementalCache if the
// `revalidate: 60` on those pages needs to be honoured across the fleet.
export default defineCloudflareConfig();
