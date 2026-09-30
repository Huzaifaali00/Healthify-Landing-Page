import { ImageSourcePropType } from "react-native";

import { SectionId } from "../utils/scroll-to-section";

export const navItems: readonly { label: string; sectionId: SectionId }[] = [
  { label: "Home", sectionId: "home" }, { label: "About Us", sectionId: "about" }, { label: "Our Services", sectionId: "services" }, { label: "Advantages", sectionId: "advantages" }, { label: "Growth Plans", sectionId: "plans" }, { label: "Blogs", sectionId: "testimonials" }, { label: "Contact Us", sectionId: "contact" },
];
export const heroIndicators = [
  ["leaf", "Fresh Ingredients"], ["award", "Nutritionist Approved"], ["truck", "Delivered to Your Door"],
] as const;
export const stats = [
  ["1M+", "Meals Delivered", "activity"], ["30K+", "Happy Customers", "heart"], ["4.8/5", "Customer Satisfaction", "star"], ["550+", "Corporate Clients", "users"],
] as const;
export const aboutFeatures = ["Freshly Prepared Daily", "Balanced Nutrition", "Great Taste"];
export const services: { title: string; text: string; image: ImageSourcePropType }[] = [
  { title: "Ready-To-Eat Meals", text: "Fresh, balanced meals prepared daily and ready to enjoy.", image: require("../../assets/images/healthify/service-ready.jpg") },
  { title: "Customized Meal Plans", text: "Personalized nutrition plans designed around your goals.", image: require("../../assets/images/healthify/service-custom.jpg") },
  { title: "Weight Management Plans", text: "Delicious meals to support your healthy weight journey.", image: require("../../assets/images/healthify/service-weight.jpg") },
  { title: "High-Protein Meal Plans", text: "Nutrient-rich fuel for active lifestyles and fitness goals.", image: require("../../assets/images/healthify/service-protein.jpg") },
];
export const advantages = [
  ["diamond", "Premium Quality", "High-quality, fresh ingredients"], ["heart", "Health Focused", "Nutritionist-designed meals"], ["truck", "Convenient Delivery", "To your home or office"], ["sliders", "Flexible Plans", "Options for every dietary need"],
] as const;
export const plans = [
  { name: "Essential", price: "299", note: "Great for individuals starting their healthy journey.", items: ["Fresh daily meals", "Balanced nutrition", "Flexible delivery"] },
  { name: "Balanced", price: "499", note: "Our best value plan for a healthier lifestyle.", items: ["Customized meal options", "Wide variety of meals", "Nutritionist support", "Flexible delivery"], popular: true },
  { name: "Performance", price: "699", note: "For fitness enthusiasts and active lifestyles.", items: ["High-protein meals", "Performance-focused nutrition", "Personalized plans", "Priority support"] },
];
export const steps = [
  ["01", "clipboard", "Choose Your Plan", "Select the meal plan that fits your goals."], ["02", "coffee", "We Prepare Fresh Meals", "Our chefs prepare nutritious meals with care."], ["03", "truck", "Enjoy Convenient Delivery", "Receive your meals and enjoy a healthier you."],
] as const;
export const testimonials = [
  ["SR", "Sara M.", "Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!"], ["AR", "Ahmed R.", "Finally a healthy meal service that tastes amazing. It fits perfectly into my busy lifestyle!"], ["FK", "Fatima K.", "Great quality, variety, and customer service. I feel healthier and more energized every day."],
] as const;
export const faqs = [
  ["What are your meal plans?", "Our plans are chef-prepared weekly menus built around balanced nutrition, with options for a range of wellness goals."],
  ["How does delivery work?", "We deliver chilled meals directly to your Dubai address on your selected schedule, ready to heat and enjoy."],
  ["Can I customize my meals?", "Yes. Balanced and Performance plans include meal preferences and dietary adjustments."],
  ["What payment methods do you accept?", "We accept major debit and credit cards through our secure checkout."],
  ["Do you have a mobile app?", "Our mobile app is coming soon. In the meantime, your plan is easy to manage online."],
] as const;
