import { useState } from "react";
import { Pressable, Text, View, useWindowDimensions } from "react-native";
import { navItems } from "../../data/content";
import { scrollToSection } from "../../utils/scroll-to-section";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";

export function Header() {
  const { width } = useWindowDimensions(); const desktop = width >= 980; const [open, setOpen] = useState(false);
  const goTo = (id: (typeof navItems)[number]["sectionId"]) => { scrollToSection(id); setOpen(false); };
  return <View className="z-20 border-b border-[#edf0e8] bg-[#fbfaf5]"><View className="mx-auto flex w-full max-w-[1200px] flex-row items-center justify-between px-5 py-4 md:px-8"><Pressable accessibilityRole="link" accessibilityLabel="Healthify home" onPress={() => goTo("home")}><Text className="font-display text-[25px] leading-6 text-[#183427]">Healthify</Text><Text className="font-inter text-[7px] font-bold tracking-[1.5px] text-[#5B6B2E]">HEALTHY LIVING</Text></Pressable>{desktop ? <View className="flex-row items-center gap-5">{navItems.map((item) => <Pressable key={item.label} accessibilityRole="link" onPress={() => goTo(item.sectionId)}><Text className="font-inter text-[11px] text-[#244132] hover:text-[#5B6B2E]">{item.label}</Text></Pressable>)}<Button label="Get Started" onPress={() => goTo("plans")} /></View> : <Pressable accessibilityRole="button" accessibilityLabel="Toggle navigation menu" accessibilityState={{ expanded: open }} onPress={() => setOpen(!open)} className="rounded-md border border-[#d9dfd3] p-2"><Icon name={open ? "x" : "menu"} color="#183427" /></Pressable>}</View>{!desktop && open && <View className="border-t border-[#edf0e8] bg-white px-5 pb-5"><View className="gap-1 pt-3">{navItems.map((item) => <Pressable key={item.label} accessibilityRole="link" onPress={() => goTo(item.sectionId)} className="rounded-md px-3 py-3 active:bg-[#eef2e7]"><Text className="font-inter text-[14px] text-[#183427]">{item.label}</Text></Pressable>)}<View className="mt-2 self-start"><Button label="Get Started" onPress={() => goTo("plans")} /></View></View></View>}</View>;
}
