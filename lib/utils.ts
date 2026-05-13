import { UAParser } from "ua-parser-js";
import {ArtifactInfo, DownloadManifest} from "./typing";

export function getOsArch() {
  if (typeof window === "undefined") return { os: "unknown", arch: "unknown" };

  const { os: { name: os }, cpu: { architecture: rawArchitecture } } = UAParser(window.navigator.userAgent);

  const architectureReMap = {
    amd64: "x86_64",
  };

  const arch = architectureReMap[rawArchitecture] ?? rawArchitecture;

  return { os: os?.toLowerCase(), arch };
}

export function flatArtifacts(manifest: DownloadManifest): ArtifactInfo[] {
  const results: ArtifactInfo[] = [];

  for (const [os, architectures] of Object.entries(manifest.downloads)) {
    for (const [arch, bundles] of Object.entries(architectures)) {
      // @ts-ignore: too lazy to fix typing for {file,url}
      for (const [bundle, { file, url }] of Object.entries(bundles)) {
        results.push({ os, arch, bundle, file, url });
      }
    }
  }

  return results;
}

export function resolveRecommendedArtifacts(
    manifest: DownloadManifest,
    os: string,
    arch: string,
): ArtifactInfo[] {
  const downloads = manifest.downloads;

  if (os === 'windows' || os === 'macos') {
    const artifacts = downloads[os]?.[arch];
    if (!artifacts) return [];  // os no longer supported or architecture not supported
    const bundleTypes = Object.keys(artifacts);
    const preferredBundle = os === 'windows' ? "nsis" : "dmg";
    // take preferred bundle type with fallback to any available
    const bundle = bundleTypes.includes(preferredBundle) ? preferredBundle : bundleTypes[0];
    if (!bundle) return [];  // bundle no longer supported
    const artifactInfo = artifacts[bundle]
    if (!artifactInfo) return [];
    return [{ os, arch, bundle, file: artifactInfo.file, url: artifactInfo.url }];
  }
  if (os === 'linux') {
    const artifacts = downloads[os]?.[arch];
    if (!artifacts) return [];

    const preferredOrder = ["appimage", "deb", "rpm"];
    const supportedBundles = Object.keys(artifacts);
    const bundleOrder = [
        ...preferredOrder.filter(b => supportedBundles.includes(b)),  // take preferred that are supported
        ...supportedBundles.filter(b => !preferredOrder.includes(b)),  // and fallback to unknown supported
    ];

    return bundleOrder.map((bundle) => {
      const artifactInfo = artifacts[bundle];
      return { os, arch, bundle, file: artifactInfo.file, url: artifactInfo.url };
    });
  }

  return [];
}

export function osToDisplay(os: string): string {
  switch (os) {
    case 'windows': return "Windows";
    case 'macos': return "macOS";
    case 'linux': return "Linux";
  }
  return os;
}

export function archToDisplay(architecture: string): string {
  switch (architecture) {
    case "x86_64": return "Intel / AMD";
    case "arm64": return "ARM64 / Apple Silicon";
  }
  return architecture;
}

export function bundleToDisplay(bundleType: string): string {
  switch (bundleType) {
    case "nsis": return "Setup (.exe)";
    case "msi": return "Installer (.msi)";
    case "deb": return "Debian (.deb)";
    case "rpm": return "RPM (.rpm)";
    case "appimage": return "AppImage";
    case "dmg": return "Disk Image (.dmg)";
    case "app": return "Archive (.app.tar.gz)";
  }
  return bundleType;
}
