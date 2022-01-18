import React from "react";
import Header from "containers/Header";
import Footer from "containers/Footer";

// const Layout = ({ children }: { children: React.ReactNode }) => (
//   <>
//     <div className="animate animate__animated" data-animate="animate__fadeInDown">
//       <Header />
//     </div>
//     <main>{children}</main>
//     <Footer />
//   </>
// );

// export default Layout;

export default class Layout extends React.Component {
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
    const { children } = this.props;
    return (
      <>
        <div
          className="animate animate__animated"
          data-animate="animate__fadeInDown"
          style={{ position: "relative", zIndex: 10 }}
        >
          <Header />
        </div>
        <main style={{ minHeight: "1200px" }}>{children}</main>
        <Footer />
      </>
    );
  }
}
