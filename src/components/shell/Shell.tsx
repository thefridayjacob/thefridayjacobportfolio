import TopBar from "./TopBar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="ambient" aria-hidden="true" />
      <div className="frame">
        <TopBar />
        <main className="frame-main">{children}</main>
      </div>
    </>
  );
}
