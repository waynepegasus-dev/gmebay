import TickerBar from "@/components/TickerBar";
import Hero from "@/components/Hero";
import WhyItMatters from "@/components/WhyItMatters";
import DealTracker from "@/components/DealTracker";
import NewsFeed from "@/components/NewsFeed";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08010f] text-white">
      <TickerBar />
      <Hero />
      <WhyItMatters />
      <DealTracker />
      <NewsFeed />
      <EmailCapture />
      <Footer />
    </main>
  );
}
