import * as fs from "node:fs";
import * as path from "node:path";
import { defineLoader } from "vitepress";
import type { DownloadManifest } from "./typing";


export default defineLoader({
  load(): DownloadManifest {
    const latestPath = path.resolve(__dirname, "../assets/download-manifests/latest.json");
    return JSON.parse(fs.readFileSync(latestPath, "utf-8"));
  },
});
