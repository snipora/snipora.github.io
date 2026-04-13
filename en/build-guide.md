# ::code:: Build from Source

This guide explains how to build Snipora locally for development and testing.

## Requirements

Make sure the following tools are installed:

- [Node.js](https://nodejs.org/en/download) (LTS recommended)
- [Rust](https://rust-lang.org/tools/install/) (stable toolchain)
- [Tauri prerequisites](https://v2.tauri.app/start/prerequisites/) (platform-specific)

## Clone repository

```shell
git clone https://github.com/snipora/snipora.git
cd snipora
```

## Install dependencies

```shell
npm clean-install
```

## Build application

```shell
npm run tauri build
```

The compiled binaries will be available in the `src-tauri/target/` directory.

### Notes
- Build times may vary depending on your system and Rust setup
- First build will take longer due to dependency compilation
- Errors are often related to missing system dependencies ([see requirements](#requirements))

