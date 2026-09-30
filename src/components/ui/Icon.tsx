import { Activity, ArrowRight, Award, Check, CheckCircle, Coffee, Diamond, Globe2, Heart, Leaf, Link2, Menu, MessageCircle, Minus, Play, Plus, Share2, SlidersHorizontal, Star, Truck, Users, X } from "lucide-react-native";
import { ComponentType } from "react";
import { SvgProps } from "react-native-svg";

const icons: Record<string, ComponentType<SvgProps>> = { activity: Activity, "arrow-right": ArrowRight, award: Award, check: Check, "check-circle": CheckCircle, clipboard: CheckCircle, coffee: Coffee, diamond: Diamond, facebook: Globe2, heart: Heart, instagram: Share2, leaf: Leaf, linkedin: Link2, menu: Menu, "message-circle": MessageCircle, minus: Minus, plus: Plus, sliders: SlidersHorizontal, star: Star, truck: Truck, users: Users, x: X, youtube: Play };

export function Icon({ name, size = 20, color = "#5B6B2E" }: { name: string; size?: number; color?: string }) {
  const Glyph = icons[name] ?? Leaf;
  return <Glyph width={size} height={size} color={color} strokeWidth={1.8} />;
}
