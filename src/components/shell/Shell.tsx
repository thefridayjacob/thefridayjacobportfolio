import TopBar from "./TopBar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <main className="frame-main">{children}</main>
    </>
  );
}
