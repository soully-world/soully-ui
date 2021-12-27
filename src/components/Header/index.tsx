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
  padding: 0 40px;
  height: 80px;
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
      fill: #1fc7d4;
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
  }

  componentDidMount() {
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
      });
      this.doScroll();
    } else {
      this.setState({
        onKey: this.props.propsOnKey,
      });
    }
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
    if (!this.props.propsOnKey) {
    } else {
      window.location.href = "/";
    }
  }
  render() {
    const { onKey } = this.state;
    const { account, logout } = this.props;
    return (
      <HeaderWarp>
        <Logo />
        <Menu LinkArray={LinkArray} onKey={onKey} changeOnKey={this.changeOnKey} />

        <FrLink>
          <ShareLink mr="72px" />
          {account ? (
            <Account onClick={logout}>
              <span>{account}</span>
              <LogoutIcon onClick={logout} />
            </Account>
          ) : (
            <ConnectWalletButton />
          )}
        </FrLink>
      </HeaderWarp>
    );
  }
}
