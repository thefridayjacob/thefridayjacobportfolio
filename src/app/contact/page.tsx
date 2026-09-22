import type { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact — Friday Jacob",
  description: "Start a project with Friday Jacob. Port Harcourt, Nigeria. Available for work.",
};

export default function ContactPage() {
  return <ContactView />;
}
