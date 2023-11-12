/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import bgLottie from "assets/lottieJSON/wave.json";
import LottieWrapper from "components/lottieWrapper";
import theme from "styles/theme/theme";
import developimg from "assets/images/develop.png";
import designimg from "assets/images/design.png";
import Image from "next/image";

export default function Intro() {
  return (
    <section css={wrapper}>
      <div css={inWrapper}>
        <div css={main}>
          <div css={contentWrapper}>
            <h1 css={title}>CodingBottle</h1>
            <p css={subTitle}>쉼없이 흘러가는 시간</p>
            <p css={subTitle}>이대로 보낼 수는 없잖아</p>
            <p css={subTitle}>Developer X Designer 코딩보틀</p>
          </div>
          <div css={img_1}>
            <Image src={developimg} alt="developimg" />
          </div>
          <div css={img_2}>
            <Image src={designimg} alt="designimg" />
          </div>
        </div>
      </div>
    </section>
  );
}

const moveUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
`;
const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-20px);
  }
`;

const wrapper = css`
  width: 100%;
  height: 50%;
`;

const inWrapper = css`
  height: auto;
`;

const contentWrapper = css`
  position: relative;
  z-index: 3;
  margin-top: 3%;
  top: 10%;
  left: 10%;
  animation: ${moveUp} 2s infinite alternate;
`;

const title = css`
  font-size: 3.6rem;
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: 0.6px;
  margin-bottom: 2rem;
`;
const subTitle = css`
  font-size: 3rem;
  color: ${theme.color.white};
  font-weight: ${theme.fontWeight.light};
`;
const img_1 = css`
  z-index: 1;
  position: relative;
  left: 40vw;
  bottom: 15vw;
  width: 400px;
  height: 400px;
  animation: ${moveLeft} 2s infinite alternate;
`;
const img_2 = css`
  z-index: 2;
  position: relative;
  left: 50vw;
  bottom: 30vw;
  width: 400px;
  height: 400px;
  animation: ${moveLeft} 2s infinite alternate;
`;
const main = css`
  width: 100%;
  height: 100%;
`;
