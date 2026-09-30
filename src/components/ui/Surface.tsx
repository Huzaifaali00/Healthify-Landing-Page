import { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
export function Surface({ children, className = "", style }: PropsWithChildren<{ className?: string; style?: StyleProp<ViewStyle> }>) { return <View className={`rounded-lg bg-white shadow-sm ${className}`} style={style}>{children}</View>; }
