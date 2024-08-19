import { CircleBlurDiv, CoverContainer, RetangularBlurDiv } from "./styles";

import leftBackgroundImg from '../../assets/left-effect.svg';
import logoImg from '../../assets/logo.svg';
import rightBackgroundImg from '../../assets/right-effect.svg';

export function Cover() {
  return (
    <CoverContainer>
      <img src={leftBackgroundImg} alt="" style={{ width: "409px", height: "188px" }} />
      <div style={{ marginBottom: "40px" }}>
        <img src={logoImg} alt="" />
      </div>
      <img src={rightBackgroundImg} alt="" style={{ width: "371px", height: "236px" }} />


      <CircleBlurDiv style={{ left: '0', }} />
      <CircleBlurDiv style={{ right: '0', }} />
      <RetangularBlurDiv />
    </CoverContainer>
  )
}