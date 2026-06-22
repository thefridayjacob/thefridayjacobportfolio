import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import CaseNav from "@/components/case-study/CaseNav";
import CaseCover from "@/components/case-study/CaseCover";
import CaseProblem from "@/components/case-study/CaseProblem";
import CaseDecisions from "@/components/case-study/CaseDecisions";
import CaseGallery from "@/components/case-study/CaseGallery";
import CaseReflection from "@/components/case-study/CaseReflection";
import CaseFooterCta from "@/components/case-study/CaseFooterCta";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.name} — Friday Jacob`,
    description: study.lede,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <CaseNav label={`${study.name} — Case study`} />
      <main>
        <CaseCover study={study} />
        <CaseProblem study={study} />
        <CaseDecisions study={study} />
        <CaseGallery study={study} />
        <CaseReflection study={study} />
        <CaseFooterCta currentSlug={study.slug} />
      </main>
    </>
  );
}
