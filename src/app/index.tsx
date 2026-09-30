import { Platform, ScrollView, View } from "react-native";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Stats } from "../components/sections/Stats";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Advantages } from "../components/sections/Advantages";
import { Pricing } from "../components/sections/Pricing";
import { Process } from "../components/sections/Process";
import { Testimonials } from "../components/sections/Testimonials";
import { Faq } from "../components/sections/Faq";
import { Cta } from "../components/sections/Cta";
import { Icon } from "../components/ui/Icon";

const sectionStyle = Platform.OS === "web" ? ({ scrollMarginTop: 76 } as never) : undefined;
export default function HomeScreen() { return <View className="flex-1 bg-[#fbfaf5]"><Header/><ScrollView showsVerticalScrollIndicator={false}><View nativeID="home" style={sectionStyle}><Hero/></View><Stats/><View nativeID="about" style={sectionStyle}><About/></View><View nativeID="services" style={sectionStyle}><Services/></View><View nativeID="advantages" style={sectionStyle}><Advantages/></View><View nativeID="plans" style={sectionStyle}><Pricing/></View><Process/><View nativeID="testimonials" style={sectionStyle}><Testimonials/></View><Faq/><Cta/><View nativeID="contact" style={sectionStyle}><Footer/></View></ScrollView><View className="absolute bottom-5 right-5 rounded-full bg-[#25D366] p-4 shadow-lg"><Icon name="message-circle" size={24} color="#FFFFFF"/></View></View>; }
