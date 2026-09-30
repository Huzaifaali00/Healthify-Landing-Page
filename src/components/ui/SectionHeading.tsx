import { Text, View } from "react-native";

export function SectionHeading({ eyebrow, title, align = "left" }: { eyebrow: string; title: string; align?: "left" | "center" }) {
  return <View className={align === "center" ? "mb-8 items-center" : "mb-7"}><Text className="mb-2 font-inter text-[10px] font-bold tracking-[2px] text-[#5B6B2E]">{eyebrow.toUpperCase()}</Text><Text className="font-display text-[28px] leading-[34px] text-[#183427]">{title}</Text></View>;
}
