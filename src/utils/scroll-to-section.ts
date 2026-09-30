import { Platform } from "react-native";

export type SectionId = "home" | "about" | "services" | "advantages" | "plans" | "testimonials" | "contact";

export function scrollToSection(id: SectionId) {
  if (Platform.OS === "web") {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
