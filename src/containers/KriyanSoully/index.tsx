import React from "react";
import { KriyanSoullyStyle } from "./indexless";

function KriyanSoully() {
  return (
    <KriyanSoullyStyle>
      <div className="banner">
        <img className="logo" src="images/KriyanSoully/logo.png" alt="logo" />
        <h2>Kriyan-Soully</h2>
        <h4>This collection is an exclusive collection in collaboration with Spirit-Swap</h4>
      </div>
      <div className="buttom">
        <ul>
          <li>
            <img src="images/KriyanSoully/pc01.png" alt="pc01" />
          </li>
          <li>
            <img src="images/KriyanSoully/pc02.png" alt="pc02" />
          </li>
          <li>
            <img src="images/KriyanSoully/pc03.png" alt="pc03" />
          </li>
          <li>
            <img src="images/KriyanSoully/pc04.png" alt="pc04" />
          </li>
          <li>
            <img src="images/KriyanSoully/pc05.png" alt="pc05" />
          </li>
        </ul>
        <h3>Kriyan-Soully</h3>
        <p>Kriyan-Soully is a collection of 20 NFTs created by 0xLambert himself.</p>
        <p>These interesting Soullys have their own exclusive names, lines and backstories,</p>
        <p>and more importantly they are also proof of interest in the SoullyWorld NFT series.</p>
        <p>By holding a Kriyan-Soully you can enjoy a portion of the profits SoullyWorld generates during the development of the project.</p>
      </div>
    </KriyanSoullyStyle>
  );
}
export default KriyanSoully;
