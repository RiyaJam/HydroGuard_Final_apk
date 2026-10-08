# HydroGuard Android — Capacitor project

This folder packages the existing HydroGuard React/Vite frontend as an Android application using Capacitor.

## What is included

- Existing HydroGuard web UI in `www/`
- Capacitor configuration
- Android app generation/update scripts
- API base URL configuration
- Original FastAPI backend remains in `../backend/`

## Before opening Android Studio

Install on your Windows PC:

1. Node.js 20+ (Node 22 recommended)
2. Android Studio
3. Android SDK + Android SDK Platform/Build Tools recommended by Android Studio
4. Java 17 or the JDK bundled with Android Studio

Then open a terminal **inside this `android-app` folder** and run:

```bash
npm install
npm run prepare:android
```

This creates the native `android/` Android Studio project and syncs the HydroGuard web app into it.

After that:

```bash
npm run open
```

Android Studio will open the project.

## Build the APK

From Android Studio:

**Build → Generate App Bundles or APKs → Generate APKs → Debug**

The debug APK will normally be under:

`android/app/build/outputs/apk/debug/app-debug.apk`

Or from the terminal on Windows:

```bash
npm run apk:debug
```

## Updating the app after frontend changes

After changing the React frontend:

```bash
npm run update:android
```

Then rebuild the APK.

## Backend/API configuration

The Android app needs the FastAPI backend to be reachable from the phone.

If the backend is deployed at a public HTTPS URL, create `.env` in the web project before rebuilding and set:

```text
VITE_API_BASE_URL=https://YOUR-BACKEND-DOMAIN
```

The HydroGuard frontend already stores the JWT access token locally and sends it as a Bearer token. The backend therefore remains separate from the APK.

### Local PC backend

Do not use `localhost:8000` in the APK when testing on a physical phone. On a phone, `localhost` means the phone itself. Use your computer's LAN IP, for example:

`http://192.168.1.10:8000`

For production/demo use, HTTPS deployment of the backend is recommended.
