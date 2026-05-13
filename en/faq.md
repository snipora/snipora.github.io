---
outline: deep
---

# ::help-circle:: Frequently Asked Questions

## General

### ::snipora:: What is Snipora?

Snipora is a lightweight, local-first snippet manager designed for fast capture, simple organization, and quick search. It keeps your everyday text at your fingertips without relying on cloud services.

### ::computer:: What platforms does Snipora support?

- ::social/windows:: Windows
- ::social/linux:: Linux
- ::social/apple:: macOS

### ::coins:: Is Snipora free?

Yes, Snipora is free and open-source. You can find the source code on [::social/github:: GitHub](https://github.com/snipora/snipora).

## ::shield:: Installation & Security

### ::triangle-alert:: Why does ::social/windows:: Windows show a SmartScreen warning?

Official binaries are **not code-signed**. Windows SmartScreen will display a warning the first time you run the installer.

**To proceed:**
1. Click "More info" on the warning screen
2. Click "Run anyway"

This is normal for open-source software that hasn't been code-signed. The source code is available on GitHub if you want to verify the application.

### ::ban:: Why does ::social/apple:: macOS block the app?

macOS Gatekeeper may block Snipora because the app is not code-signed. The reason is explained in [Download](download.md#why-binaries-are-not-signed).

**To bypass:**
1. Right-click the Snipora app
2. Select "Open"
3. Click "Open" in the dialog

Alternatively, go to System Settings ::arrow-right:: Privacy & Security and click "Allow" next to the security warning.

### ::globe:: Does Snipora require an internet connection?

No. Snipora works entirely ::globe-off:: offline.
All your snippets are stored locally on your device.  
By default, Snipora periodically checks for app updates when connected to the internet, but this can be disabled in ::settings:: settings.

## Usage

### ::app-window-mac:: How do I open the Snipora popup?

Press the global shortcut:

- **::social/windows:: Windows / ::social/linux:: Linux:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd>
- **::social/apple:: macOS:** <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd>

### ::hard-drive:: Where is my data stored?

Snipora stores all data locally. The exact location depends on your operating system:
- **::social/windows:: Windows:** `%APPDATA%\com.snipora.snipora\`
- **::social/apple:: macOS:** `~/Library/Application Support/com.snipora.snipora/`
- **::social/linux:: Linux:** `~/.local/share/com.snipora.snipora/`

### ::cloud-sync:: Can I sync snippets between devices?

Not currently. Snipora is designed as a local-first application. Future sync capabilities may be added.

### ::file-archive:: Can I import/export my snippets?

Import/export functionality is planned for a future version.


## ::sparkles:: Features

### ::tags:: Why tags instead of folders?

Tags provide more flexibility than folders:
- A snippet can have multiple tags
- No hierarchical structure to navigate
- Quick filtering by clicking tags
- Faster search across all tags

### ::code-xml:: Does Snipora support code snippets?

Yes! Snipora preserves all formatting, including code indentation. Just copy your code into the snippet content.

### ::settings:: Can I customize the global shortcut?

Yes. Open settings and navigate to Shortcuts to customize the global hotkey.

### ::keyboard:: Does Snipora support keyboard-only navigation?

Yes. The ::app-window-mac:: popup is fully keyboard-navigable:
- Global shortcut to open from anywhere
- Arrow keys to navigate
- Enter to insert
- Escape to close

The ::app-window:: main window is fully keyboard navigable, but is not optimized for keyboard-only use.


## ::bug:: Troubleshooting

### ::circle-x:: Snipora won't start

1. Check if another instance is already running (look for the tray icon)
2. Check the application logs for errors
3. Try restarting your computer
4. Reinstall the application

### ::eye-closed:: The popup doesn't appear when I press the shortcut

1. Verify the shortcut in Settings
2. Make sure Snipora is running [(check the system tray)]{.note}
3. Try restarting Snipora or your PC

### ::clipboard-paste:: Snippets aren't inserting into my application

Snipora may not auto-type into all applications. Check your ::settings:: Settings for the current usage behavior. If set to "Copy to clipboard", your snippet is only pasted to your ::clipboard:: clipboard rather than auto-typed. Try switching to a different insertion method in ::settings:: Settings.

### ::app-window:: How do I access the main window?

Launch Snipora from your system start menu or app launcher. You can also right-click the ::bell:: tray icon and select "Open Snipora".


## ::git-graph:: Contributing & Development

### ::git-commit-horizontal:: How can I contribute?

Check out this [guide on egghead.io ::external-link::](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) to learn how to contribute to Snipora.

### ::square-chart-gantt:: Is there a roadmap?

Not currently. You can track progress via GitHub ::circle-dot:: issues and ::git-pull-request-arrow:: pull requests.

### ::bug:: I found a bug. How do I report it?

Please open an issue on [::github:: GitHub Issues](https://github.com/snipora/snipora/issues) with details about the problem.

---

::circle-question-mark:: Still have questions?

- Open an issue on [::github:: GitHub](https://github.com/snipora/snipora/issues)
