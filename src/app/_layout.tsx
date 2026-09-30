import "../global.css";
import { DMSerifDisplay_400Regular, useFonts } from "@expo-google-fonts/dm-serif-display";
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from "@expo-google-fonts/inter";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({ DMSerifDisplay_400Regular, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold });
  if (!loaded) return null;
  return <Stack screenOptions={{ headerShown: false }} />;
}
