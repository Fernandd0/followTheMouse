import RobotFace from "./components/Robot";

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-black font-sans">
      <h1 className="absolute top-8 left-8 text-white/60 text-[10px] font-mono tracking-[0.3em] uppercase z-10 pointer-events-none select-none">
        Move the mouse
      </h1>
      <RobotFace />
    </main>
  );
}