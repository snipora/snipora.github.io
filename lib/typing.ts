export type DownloadArtifact = {
  file: string
  url: string
}


export type DownloadManifest = {
  /** version of the release */
  version: string
  /** tag of the release */
  tag: string
  /** ISO formatted timestamp of the release creation */
  publishedAt: string
  /** url for a user to read about release notes */
  notesUrl: string
  /** information about download links */
  downloads: {
    windows?: {
      x86_64?: {
        nsis?: DownloadArtifact
        msi?: DownloadArtifact
      }
    }
    linux?: {
      x86_64?: {
        appimage?: DownloadArtifact
        deb?: DownloadArtifact
        rpm?: DownloadArtifact
      }
    }
    macos?: {
      x86_64?: {
        dmg?: DownloadArtifact
        app?: DownloadArtifact
      }
      arm64?: {
        dmg?: DownloadArtifact
        app?: DownloadArtifact
      }
    }
  }
}

export type ArtifactInfo = {
  os: string
  arch: string
  bundle: string
  file: string
  url: string
}
