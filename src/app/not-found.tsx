import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="flex flex-col items-center justify-center px-6 text-center"
      style={{ minHeight: "100vh" }}
    >
      <span
        className="uppercase tracking-[0.16em]"
        style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
      >
        404
      </span>
      <h1
        className="font-extrabold mt-5"
        style={{
          fontSize: "var(--fs-section)",
          fontFamily: "var(--font-display)",
        }}
      >
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-5 max-w-[480px]" style={{ color: "var(--text-mid)" }}>
        The page you&apos;re looking for isn&apos;t here. It may have moved,
        or the link might be off.
      </p>
      <Link
        href="/"
        className="rounded-full px-7 py-3.5 font-medium mt-10 inline-block"
        style={{ background: "var(--pink)", color: "#0c0c0c" }}
      >
        Back to home
      </Link>
    </main>
  );
}
