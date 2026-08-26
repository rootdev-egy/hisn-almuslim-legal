# Hisn Al-Muslim — Legal pages

Bilingual (Arabic / English) Privacy Policy and Terms of Use for the iOS app
**حصن المسلم** (`com.rootdev.hisnalmuslim`), published by RootDev.

Served as a static site from GitHub Pages.

## Live URLs

- https://rootdev-egy.github.io/hisn-almuslim-legal/privacy/
- https://rootdev-egy.github.io/hisn-almuslim-legal/terms/

Append `?lang=en` or `?lang=ar` to force a language. Without it the page follows
the browser language and falls back to Arabic. The app links with the parameter set.

## Publishing (one time)

The files are uploaded to `rootdev-egy/hisn-almuslim-legal` through the GitHub
website — no git needed.

1. Open https://github.com/rootdev-egy/hisn-almuslim-legal → **Add file → Upload files**
   (on an empty repo: the "uploading an existing file" link).
2. In Finder, open this folder, select `index.html`, `README.md`, and the three folders
   `assets`, `privacy`, `terms`, and drag them all onto the GitHub upload area.
   Use Chrome or Edge — folder drag-and-drop is unreliable in Safari.
3. Commit directly to `main`.
4. Add `.nojekyll`: **Add file → Create new file**, name it `.nojekyll`, leave it empty,
   commit. (Optional but avoids Jekyll surprises later.)
5. **Settings → Pages** → Source: *Deploy from a branch*, Branch: `main`, folder:
   `/ (root)`. Wait ~1 minute, then open the URLs above.

To update a page later: open the file on GitHub, click the pencil icon, edit, commit.
Pages redeploys automatically.

## Layout

```
index.html          landing page linking both documents
privacy/index.html  privacy policy (AR + EN in one file)
terms/index.html    terms of use (AR + EN in one file)
assets/style.css    shared styling, light + dark
assets/lang.js      language switching
.nojekyll           serve files as-is, no Jekyll processing
```

## Editing

Each document holds both languages: one `<section data-lang="ar">` and one
`<section data-lang="en">`. **Edit both when changing a clause**, and bump the
"Last updated" date in the page header.

## App wiring

The URLs are defined once in `HisnAlmulsim/Common/Base/Globals.swift`
(`LEGAL_BASE_URL`, `privacyPolicyURL`, `termsOfUseURL`) and opened from the
subscription screen. If the domain ever changes, that constant is the only edit.
