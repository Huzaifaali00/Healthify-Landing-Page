## Tech Stack

- Expo SDK 57, Expo Router, React Native for Web, and TypeScript
- NativeWind 4.2.7 with Tailwind CSS 3.4.17
- `@expo/vector-icons`
- DM Serif Display and Inter through `@expo-google-fonts`

## Folder Structure

```
src/
  app/                 Expo Router routes and root layout
  components/
    layout/            Header and footer
    sections/          Landing page sections
    ui/                Shared buttons, surfaces, icons, headings
  data/                Typed content and image references
assets/images/healthify/  Local optimized food images
```

## Setup

```bash

npm install
npx expo start --web
```

Create a static web build with:

```bash
npx expo export --platform web
```

No environment variables are required.

## Links

- GitHub: `https://github.com/Huzaifaali00/Healthify-Landing-Page.git`
- Vercel: `https://healthify.vercel.app`
