import Hero from '../components/Home/Hero';
import StatsBar from '../components/Home/StatsBar';
import OverviewCards from '../components/Home/OverviewCards';
import Timeline from '../components/Home/Timeline';

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 sm:gap-14 md:gap-20 w-full max-w-7xl mx-auto py-4">
      <Hero />
      <StatsBar />
      <OverviewCards />
      <Timeline />
    </main>
  );
}
