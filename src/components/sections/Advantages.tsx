import { Text, View } from "react-native";
import { advantages } from "../../data/content";
import { scrollToSection } from "../../utils/scroll-to-section";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import { Surface } from "../ui/Surface";
export function Advantages() { return <View className="bg-[#eaf0df]"><View className="mx-auto w-full max-w-[1200px] flex-col px-5 py-16 md:flex-row md:items-center md:gap-8 md:px-8"><View className="mb-8 md:mb-0 md:w-[31%]"><SectionHeading eyebrow="Our Advantages" title="Why Choose Healthify"/><Text className="mb-5 font-inter text-[11px] leading-5 text-[#526156]">More than just meals, we deliver a healthier, happier you with solutions that fit your lifestyle.</Text><Button label="Discover All Advantages" onPress={() => scrollToSection("advantages")}/></View><View className="flex-1 flex-row flex-wrap gap-3">{advantages.map(([icon, title, text]) => <Surface key={title} className="min-w-[45%] flex-1 items-center p-5 md:min-w-[21%]"><Icon name={icon} size={30}/><Text className="mt-3 text-center font-inter text-[11px] font-bold text-[#183427]">{title}</Text><Text className="mt-2 text-center font-inter text-[9px] leading-4 text-[#5a675d]">{text}</Text></Surface>)}</View></View></View>; }
