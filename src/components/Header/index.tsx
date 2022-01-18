import React from "react";
import styled from "styled-components";

import ConnectWalletButton from "components/ConnectWalletButton";
import Menu from "./components/menu";
import ShareLink from "components/SharaLink";
import Logo from "./components/logo";
import { Flex, LogoutIcon } from "uikit";
const HeaderWarp = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  padding: 0 20px;
  .small {
    display: block;
  }
  .big {
    display: none;
  }
  .small,
  .modal {
    .fl {
      float: left;
      padding-left: 3%;
    }
    .fr {
      float: right;
      padding-right: 3%;
    }
    .close {
      display: block;
      width: 34px;
      height: 38px;
      margin-left: 12px;
    }
    .logo {
      display: inline-block;
      vertical-align: middle;
      transition: all 0.3s ease;
      font-size: 18px;
      font-family: "Rokkitt", serif;
      &:hover {
        opacity: 0.8;
      }
      img {
        display: inline-block;
        vertical-align: middle;
        width: 48px;
        padding-right: 20px;
      }
      h2 {
        display: inline-block;
        vertical-align: middle;
        font-size: 28px;
        font-weight: 800;
      }
    }
  }
  .modal {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    z-index: 99;
    padding: 26px 0;
    background-color: #000;
  }
  // 370
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding: 0 40px;
    .small,
    .modal {
      display: none;
    }
    .big {
      display: block;
    }
  }
`;
const FrLink = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;
const Account = styled.div`
  > svg {
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
  .head_icon {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 2px;
  }
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  height: 38px;
  background-color: ${({ theme }) => `${theme.colors.primary}`};
  border: 1px solid #2f363b;
  border-radius: 4px;
  padding: 2px 10px;
  max-width: 80px;
  ${({ theme }) => theme.mediaQueries.xs} {
    padding: 2px 16px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 2px 16px;
    max-width: 150px;
  }
  > span {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  > img {
    margin-left: 14px;
  }
`;
const LinkArray: string[] = ["About", "Mint", "Rarity", "Roadmap", "Team", "FAQ"];

interface IProps {
  propsOnKey?: string;
  account: string;
  logout: any;
}
interface IState {
  showModal: boolean;
  onKey: string;
  About: number;
  Mint: number;
  Rarity: number;
  Roadmap: number;
  Team: number;
  FAQ: number;
}
export default class HeaderWidget extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showModal: false,
      onKey: "Home",
      About: 0,
      Mint: 0,
      Rarity: 0,
      Roadmap: 0,
      Team: 0,
      FAQ: 0,
    };
    this.changeOnKey = this.changeOnKey.bind(this);
    this.getScrollTop = this.getScrollTop.bind(this);
    this.setShowModal = this.setShowModal.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      // 获取元素距离顶部的高度
      const About = this.getScrollTop("About") || 0;
      const Mint = this.getScrollTop("Mint") || 0;
      const Rarity = this.getScrollTop("Rarity") || 0;
      const Roadmap = this.getScrollTop("Roadmap") || 0;
      const Team = this.getScrollTop("Team") || 0;
      const FAQ = this.getScrollTop("FAQ") || 0;
      this.setState({
        About,
        Mint,
        Rarity,
        Roadmap,
        Team,
        FAQ,
      });
      if (!this.props.propsOnKey) {
        window.addEventListener("scroll", () => {
          this.doScroll();
          const _scrollTop = document.documentElement.scrollTop;
          const { onKey } = this.state;
          if (_scrollTop > About && _scrollTop < Mint && onKey !== "About") {
            this.setState({
              onKey: "About",
            });
          } else if (_scrollTop > Mint && _scrollTop < Rarity && onKey !== "Mint") {
            this.setState({
              onKey: "Mint",
            });
          } else if (_scrollTop > Rarity && _scrollTop < Roadmap && onKey !== "Rarity") {
            this.setState({
              onKey: "Rarity",
            });
          } else if (_scrollTop > Roadmap && _scrollTop < Team + 400 && onKey !== "Roadmap") {
            this.setState({
              onKey: "RoadMap",
            });
          } else if (_scrollTop > Team && _scrollTop < FAQ + 400 && onKey !== "Roadmap") {
            this.setState({
              onKey: "RoadMap",
            });
          } else if (_scrollTop > FAQ && onKey !== "FAQ") {
            this.setState({
              onKey: "FAQ",
            });
          }
        });
        this.doScroll();
      } else {
        this.setState({
          onKey: this.props.propsOnKey,
        });
      }
    }, 200);
  }
  getScrollTop(idStr: string) {
    const _idStr = document.getElementById(idStr);
    const _idRect = _idStr?.getBoundingClientRect();
    return _idRect?.top;
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
  changeOnKey(_key: string) {
    document.body.style.overflow = "initial";
    switch (_key.replaceAll(" ", "")) {
      case "About":
      case "Rarity":
      case "Roadmap":
      case "Team":
      case "FAQ":
        window.location.href = `/#${_key}`;
        break;
      case "Mint":
        window.location.href = "/get";
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }
  }
  setShowModal(params) {
    this.setState({ showModal: params });
  }
  render() {
    const { onKey, showModal } = this.state;
    const { account, logout } = this.props;
    return (
      <HeaderWarp>
        <Logo />
        <div className="big">
          <Menu LinkArray={LinkArray} onKey={onKey} changeOnKey={this.changeOnKey} />
        </div>
        <FrLink>
          <div className="big">
            <ShareLink mr="72px" />
          </div>

          {account ? (
            <Account onClick={logout}>
              <span>{account}</span>
              <LogoutIcon onClick={logout} />
            </Account>
          ) : (
            <ConnectWalletButton />
          )}
          <div className="small">
            <img
              className="close"
              onClick={() => {
                const _show = !showModal;
                if (_show) {
                  document.body.style.overflow = "hidden";
                } else {
                  document.body.style.overflow = "initial";
                }
                this.setShowModal(_show);
              }}
              src={!showModal ? "/images/menu.png" : "/images/close.png"}
              alt="logo"
            />
          </div>
        </FrLink>

        {showModal ? (
          <div className="modal">
            <div className="menu" onClick={() => this.setShowModal(!showModal)}>
              <Menu LinkArray={LinkArray} onKey={onKey} changeOnKey={this.changeOnKey} />
              <ShareLink mr="72px" />
            </div>
          </div>
        ) : null}
      </HeaderWarp>
    );
  }
}
