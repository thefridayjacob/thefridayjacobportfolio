import type { Metadata } from "next";
import AboutView from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "About — Friday Jacob",
  description:
    "Designer and builder in Port Harcourt. Roadside posters to AI-native products, eight years and counting.",
};

export default function AboutPage() {
  return <AboutView />;
}
