import React from "react";
import { Svg, SvgProps } from "uikit";
const LinkSvg: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <path
        d="M11.3334 21.4L8.97344 23.6933C8.3546 24.3122 7.51528 24.6598 6.64011 24.6598C5.76494 24.6598 4.92561 24.3122 4.30677 23.6933C3.68794 23.0745 3.34028 22.2352 3.34028 21.36C3.34028 20.4848 3.68794 19.6455 4.30677 19.0266L10.3601 12.96C10.9543 12.3639 11.7548 12.019 12.5961 11.9967C13.4374 11.9743 14.2552 12.2763 14.8801 12.84L15.0401 12.9733C15.2929 13.2209 15.6338 13.3578 15.9876 13.3541C16.3414 13.3503 16.6792 13.2062 16.9268 12.9533C17.1743 12.7005 17.3113 12.3597 17.3075 12.0058C17.3038 11.652 17.1596 11.3142 16.9068 11.0666C16.8315 10.9693 16.7514 10.8759 16.6668 10.7866C15.5286 9.7964 14.0565 9.27578 12.5489 9.33024C11.0412 9.38471 9.61055 10.0102 8.54677 11.08L2.41344 17.1466C1.37125 18.281 0.807602 19.7742 0.840207 21.3143C0.872812 22.8544 1.49915 24.3224 2.58842 25.4117C3.67769 26.5009 5.14566 27.1273 6.68577 27.1599C8.22588 27.1925 9.71905 26.6288 10.8534 25.5867L13.1601 23.3333C13.3879 23.0849 13.5131 22.7593 13.5105 22.4223C13.508 22.0852 13.3779 21.7617 13.1464 21.5167C12.9149 21.2717 12.5992 21.1234 12.2629 21.1018C11.9265 21.0801 11.5944 21.1867 11.3334 21.4ZM25.5868 2.41332C24.4651 1.29866 22.9481 0.673035 21.3668 0.673035C19.7855 0.673035 18.2684 1.29866 17.1468 2.41332L14.8401 4.66665C14.6124 4.91512 14.4872 5.24062 14.4897 5.57767C14.4922 5.91472 14.6223 6.2383 14.8538 6.4833C15.0853 6.7283 15.401 6.87653 15.7374 6.89818C16.0737 6.91983 16.4058 6.81329 16.6668 6.59998L18.9734 4.30665C19.5923 3.68781 20.4316 3.34015 21.3068 3.34015C22.1819 3.34015 23.0213 3.68781 23.6401 4.30665C24.2589 4.92549 24.6066 5.76481 24.6066 6.63998C24.6066 7.51515 24.2589 8.35448 23.6401 8.97332L17.5868 15.04C16.9926 15.6361 16.1921 15.9809 15.3508 16.0033C14.5094 16.0256 13.6917 15.7237 13.0668 15.16L12.9068 15.0266C12.6539 14.7791 12.3131 14.6422 11.9593 14.6459C11.6055 14.6497 11.2676 14.7938 11.0201 15.0466C10.7726 15.2995 10.6356 15.6403 10.6394 15.9941C10.6431 16.3479 10.7873 16.6858 11.0401 16.9333C11.137 17.0324 11.2393 17.1259 11.3468 17.2133C12.4863 18.2006 13.9577 18.7192 15.4645 18.6648C16.9713 18.6104 18.4014 17.9869 19.4668 16.92L25.5334 10.8533C26.6552 9.73875 27.2904 8.22562 27.3004 6.64431C27.3104 5.06301 26.6944 3.54197 25.5868 2.41332Z"
        fill="#F40638"
      />
    </Svg>
  );
};
export default LinkSvg;
