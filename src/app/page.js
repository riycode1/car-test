//components
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />   
      <div className="h-[4000px] "></div>   {/* imported header from header component to pages.js */}
    </main>
  );
}
