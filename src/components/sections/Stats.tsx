import { Text, View } from "react-native";
import { stats } from "../../data/content";
import { Icon } from "../ui/Icon";
export function Stats() { return <View className="bg-[#eef2e7]"><View className="mx-auto w-full max-w-[1200px] flex-row flex-wrap px-5 py-7 md:px-8">{stats.map(([number, label, icon]) => <View key={label} className="mb-4 min-w-[50%] flex-1 flex-row items-center justify-center gap-3 border-[#d9dfd3] md:mb-0 md:border-r last:border-r-0"><Icon name={icon} size={25}/><View><Text className="font-display text-[24px] text-[#183427]">{number}</Text><Text className="font-inter text-[9px] text-[#526156]">{label}</Text></View></View>)}</View></View>; }
