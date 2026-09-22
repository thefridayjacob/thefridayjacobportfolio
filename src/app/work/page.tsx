import type { Metadata } from "next";
import WorkView from "@/components/work/WorkView";

export const metadata: Metadata = {
  title: "Work — Friday Jacob",
  description:
    "Selected work across healthcare, fintech, civic tech, and AI-native builds. Six shipped products, plus live sites across five countries.",
};

export default function WorkPage() {
  return <WorkView />;
}
