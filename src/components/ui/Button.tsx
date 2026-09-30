import { Pressable, Text } from "react-native";
import { Icon } from "./Icon";

export function Button({ label, light = false, onPress, icon = "arrow-right" }: { label: string; light?: boolean; onPress?: () => void; icon?: string }) {
  return <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} className={light ? "flex-row items-center gap-2 rounded-lg border border-[#1F3A2A] px-5 py-3 hover:bg-[#eef2e7] focus:ring-2 focus:ring-[#8d9c66] active:opacity-75" : "flex-row items-center gap-2 rounded-lg bg-[#1F3A2A] px-5 py-3 hover:bg-[#35522f] focus:ring-2 focus:ring-[#8d9c66] active:opacity-75"}>
    <Text className={light ? "font-inter text-[12px] font-semibold text-[#1F3A2A]" : "font-inter text-[12px] font-semibold text-white"}>{label}</Text><Icon name={icon} size={15} color={light ? "#1F3A2A" : "#FFFFFF"} />
  </Pressable>;
}
