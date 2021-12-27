import Banner from "./components/banner";
import About from "./components/About";
import TheRarity from "./components/TheRarity";
import SoullyWorld from "./components/SoullyWorld";
import CommunityDrivenRoadmap from "./components/CommunityDrivenRoadmap";
import FAQ from "./components/FAQ";
import MeetOurTeam from "./components/MeetOurTeam";
import WagmiSoullyBanner from "./components/components/WagmiSoullyBanner";
const Homepage = (): JSX.Element => {
  return (
    <>
      <Banner />
      <WagmiSoullyBanner />
      <About />
      <TheRarity />
      <SoullyWorld />
      <CommunityDrivenRoadmap />
      <FAQ />
      <MeetOurTeam />
      <WagmiSoullyBanner />
    </>
  );
};

export default Homepage;
