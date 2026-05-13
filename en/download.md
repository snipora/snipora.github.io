---

---

<script setup>
import { data as downloadManifest } from "../lib/download-manifest.data.ts";
import { getOsArch, flatArtifacts, resolveRecommendedArtifacts, osToDisplay, bundleToDisplay, archToDisplay } from "../lib/utils.ts"; 
import {ref, onMounted} from "vue"; 

const ua = navigator.userAgent;
const allArtifacts = flatArtifacts(downloadManifest);

const os = ref("unknown");
const arch = ref("unknown");
const recommendedArtifacts = ref([]);

onMounted(() => {
  const oa = getOsArch();
  os.value = oa.os;
  arch.value = oa.arch;
  recommendedArtifacts.value = resolveRecommendedArtifacts(downloadManifest, oa.os, oa.arch);
});
</script>

# ::download:: Download

> [!INFO]
> ::snipora:: Snipora {{ downloadManifest.version }} is now available for ::social/windows:: Windows, ::social/apple:: macOS, and ::social/linux:: Linux.

## ::package:: Download Snipora

<div>
  {{ JSON.stringify({ ua, os, arch }) }}
</div>
<ClientOnly>
<div>
  {{ JSON.stringify({ ua, os, arch }) }}
</div>
<div v-if="os === 'macos'">

::: warning
::social/apple:: macOS support is currently provided on a best-effort basis and may receive less testing than Windows or Linux releases.
:::

</div>

<div v-if="recommendedArtifacts.length" class="grid gap-4 my-8">
 <a
  v-for="artifact in recommendedArtifacts"
  :key="artifact.url"
  :href="artifact.url"
  class="rounded-lg px-4 py-3 font-medium bg-(--vp-button-brand-bg) text-white! hover:bg-(--vp-button-brand-hover-bg) transition-colors grid place-items-center no-underline! [&_p]:my-0!"
 >

   ::download:: Download for {{ osToDisplay(artifact.os) }}

   <span class="text-xs opacity-60">
    {{ archToDisplay(artifact.arch) }}
    -
    {{ bundleToDisplay(artifact.bundle) }}
   </span>
  
 </a>
</div>
<div v-else>

::: info
No official release is currently available for your operating system or architecture. [({{ os }} - {{ arch }})]{.note}
:::

</div>
</ClientOnly>

<details class="cursor-pointer">
<summary>
All Downloads
</summary>

<table class="[&_p]:!m-0">
<tbody>
<tr v-for="{ os, arch, bundle, file, url } of allArtifacts" :key="file">
<td v-if="os === 'windows'">

::social/windows:: **Windows**      

</td>
<td v-else-if="os === 'macos'">

::social/apple:: **macOS**

</td>
<td v-else-if="os === 'linux'">

::social/linux:: **Linux**

</td>
<td v-else></td>
<td>
{{ archToDisplay(arch) }}
</td>
<td>
{{ bundleToDisplay(bundle) }}
</td>
<td>
<a :href="url">

::download:: Download

</a>
</td>
</tr>
</tbody>
</table>

For older versions or other information, check the [::social/github:: GitHub Releases](https://github.com/snipora/snipora/releases) page.

</details>

## ::mailbox:: Stay updated

Follow development on [::social/github:: GitHub](https://github.com/snipora/snipora) and get notified about releases.

If you like this project you can ::star::{.text-yellow-400} the repository to show your support.

## ::shield-check:: Why Snipora is Safe to Use

Snipora is safe to use for several reasons:

### ::code-xml:: Open Source
All source code is publicly available on [::social/github:: GitHub](https://github.com/snipora/snipora). You can ::scan-eye:: review, ::search-check:: audit, and ::badge-check:: verify the code yourself.

### ::search-code:: Transparent Development
You can see exactly what ::git-branch-plus:: changes are made by checking the ::git-graph:: commit history. Report any concerns via [::social/github:: GitHub Issues](https://github.com/snipora/snipora/issues).

---

> [!IMPORTANT] Security warning - Unsigned Binaries
> Official binaries are **not code-signed** by a trusted certificate authority. Here's why:

### ::signature:: Why binaries are not signed

- ::coins:: **Cost**: Code signing certificates cost $100-500/year from trusted authorities
- ::user-round-minus:: **Independent development**: Snipora is maintained independently and is not backed by a large commercial organization
- ::clock-2:: **Early stage**: As an early-stage project, resources are limited

### ::user:: What this means for you

| Platform                                       | Warning                                          | How to proceed                                                          |
|------------------------------------------------|--------------------------------------------------|-------------------------------------------------------------------------|
| [::social/windows:: **Windows**]{.text-nowrap} | SmartScreen may show "Windows protected your PC" | Click "More info" ::arrow-right:: "Run anyway"                          |
| [::social/apple:: **macOS**]{.text-nowrap}     | Gatekeeper may block the app                     | Right-click app ::arrow-right:: "Open" ::arrow-right:: "Open" in dialog |
| [::social/linux:: **Linux**]{.text-nowrap}     | Usually no warning                               | Run `chmod +x` on AppImage if needed                                    |

### ::package-check:: How to verify safety

1. ::eye:: Check the source code on [::social/github:: GitHub](https://github.com/snipora/snipora)
2. ::hammer:: Build from source yourself
3. ::scan-line:: Use virus/malware scanners on the downloaded file

The ::code-xml:: source code is always available if you want to build your own version or verify the application's behavior.
