import { Header } from "@/components/header";
import { MainContent } from "@/components/mainContent";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <MainContent />
      </div >
    </>
  );
}
