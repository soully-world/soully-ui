import React from "react";
import { KriyanSoullyStyle } from "./indexless";

function KriyanSoully() {
  return (
    <KriyanSoullyStyle>
      <div className="banner">
        <img className="logo" src="images/KriyanSoully/logo.png" alt="logo" />
        <h2>Unique SOULLY</h2>
        <h4>This collection is an exclusive collection in collaboration with</h4>
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
        <h3>Unique SOULLY</h3>
        <p>I will be releasing my latest collection, Unique SOULLY.</p>
        <p>Total 20 NFTs. </p>
        <p>It will be available at https://artion.io when it launches. </p>
        <p>This collection is an exclusive collection in collaboration with .</p>
      </div>
    </KriyanSoullyStyle>
  );
}
export default KriyanSoully;
