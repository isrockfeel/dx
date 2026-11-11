---
description: "RIOTWORK sidebar identity and semantic palette for the shared dsh client."
kind: "package-reference"
---

# @deepseek-ai/dsh-client-ui-brand-official

English | [中文](README.zh.md)

## Summary

This package supplies RIOTWORK's sidebar patch mark and wordmark and applies the RIOTWORK semantic light/dark palette through the shared theme runtime. The shipped Web and Desktop compositions load it by default. It does not replace conversation content, alter session data, or add model requests. The internal package identifier is retained for runtime composition compatibility; it is a historical name, not a statement of DeepSeek affiliation or endorsement.

## Use this package

The shipped Web and Desktop compositions mount the plugin through the `ui-brand-official` row. No separate installation, profile flag, or Plugins-page toggle is required.

### Brand slots

The browser plugin registers `RiotworkBrandMark` in `sidebar.brand.mark` and `RiotworkBrandName` in `sidebar.brand.name`. Registration waits for the sidebar declarations and is removed when the plugin is disposed. The package does not occupy the conversation hero slot; conversation content and its fallbacks remain owned by their package.

### Theme palette

The plugin calls `ThemeRuntime.overrideTokens` under its package identity. It supplies paired light and dark values for base and raised surfaces, borders, primary brand actions, text, links, hover, and sidebar fill. Error, warning, success, and other semantic status colors remain owned by ui-theme. Font and layout preferences remain user-controlled. Disposing the plugin removes its override and restores the previous palette.

### Runtime behavior

The package contributes browser presentation only. Its Host entry remains an empty Loader seat and adds no Host API or persisted settings. Existing package ids, session formats, and the `dsh` protocol remain unchanged.

## Implementation

`src/client/Brand.tsx` owns the patch mark, wordmark, and semantic palette. `src/client/index.ts` declares the theme and slot services, installs the reversible palette override, and registers both sidebar occupants. The browser test covers service dependencies, palette registration and disposal, late slot declaration, and mark sizing.

## Model Experience

None. The package does not change prompts, model requests, token use, tool access, or session events.

## Known Limitations and Deferred Work

- The internal package id remains `ui-brand-official` for composition compatibility; user-facing branding is RIOTWORK.
- Branding covers the shared sidebar slots and semantic theme palette; product-specific artwork and third-party plugins retain their own owners.
- The package depends on the host-provided sidebar slots and ui-theme runtime.
