# Sijill

Live site: https://sijills.com/

A public photographic archive with a private dashboard. The public site (`index.html`)
reads from Firestore and Storage. The dashboard (`admin.html`) is gated by login and is
the only place photos get added or removed. Black-and-white conversion happens at upload,
so the stored file is already B&W.

## One-time setup

1. **Create a Firebase project** at console.firebase.google.com.
2. **Add a Web App** to it, copy the config object, and paste the values into
   `public/firebase-init.js` (replace every `PASTE_YOURS`).
3. In the console, enable three things:
   - **Authentication** → Sign-in method → **Email/Password**. Then add yourself as a user
     (Authentication → Users → Add user). This email/password is your dashboard login.
   - **Firestore Database** → create database (production mode).
   - **Storage** → get started.
4. **Lock writes to you.** Copy your user UID from Authentication → Users, and paste it in
   place of `YOUR_UID` in both `firestore.rules` and `storage.rules`.

## Deploy

```bash
npm install -g firebase-tools     # if you don't have it
firebase login
firebase use --add                # pick your project
firebase deploy
```

That publishes the site, the Firestore rules, and the Storage rules together.
Your archive is at `https://YOUR-PROJECT.web.app` and the dashboard at
`https://YOUR-PROJECT.web.app/admin.html`.

## Notes

- The accession counter (`meta/counter`) only ever counts up, so removing a photo never
  reuses its number — accession numbers stay permanent, like a real archive.
- Want the dashboard URL less guessable? Rename `admin.html` to something private. The
  security rules already protect the data either way.
- The `1600px` cap and JPEG quality `0.88` in `admin.html` keep file sizes reasonable;
  raise them if you want larger prints.
