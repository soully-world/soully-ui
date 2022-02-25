import React from "react";
import Banner from "./components/banner";
import About from "./components/About";
import TheRarity from "./components/TheRarity";
import SoullyWorld from "./components/SoullyWorld";
import CommunityDrivenRoadmap from "./components/CommunityDrivenRoadmap";
import FAQ from "./components/FAQ";
import MeetOurTeam from "./components/MeetOurTeam";
import WagmiSoullyBanner from "components/WagmiSoullyBanner";
import Partners from "./components/Partners";

export default class HomeIndex extends React.Component {
  componentDidMount() {
    this.doScroll();
    window.addEventListener("scroll", this.doScroll);
  }
  doScroll = () => {
    const animates: NodeListOf<Element> = document.querySelectorAll(".animate");
    for (const dom of animates as any) {
      const top = dom.offsetTop;
      const scrollTop = window.scrollY;
      const innerHeight = window.innerHeight;
      if (scrollTop + innerHeight - innerHeight / 10 > top) {
        dom.className = dom.className.replace("animate", dom.dataset.animate);
      }
    }
  };
  render() {
    return (
      <>
        <Banner />
        <WagmiSoullyBanner />
        <div className="animate  animate__animated" data-animate="animate__fadeInUp">
          <About />
        </div>
        <div className="animate animate__animated" data-animate="animate__fadeInUp">
          <TheRarity />
        </div>
        <div className="animate animate__animated" data-animate="animate__fadeInUp">
          <SoullyWorld />
        </div>
        <div className="animate animate__animated" data-animate="animate__fadeInUp">
          <CommunityDrivenRoadmap />
        </div>
        <div className="animate animate__animated" data-animate="animate__fadeInUp">
          <FAQ />
        </div>
        <div className="animate animate__animated" data-animate="animate__fadeInUp">
          <MeetOurTeam />
        </div>
        <div className="animate animate__animated" data-animate="animate__fadeInUp">
          <Partners />
        </div>
      </>
    );
  }
}
