/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
            <p css={subTitle}>끊임없이 흘러가는 우리</p>
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

const wrapper = css`
  width: 100%;
  height: 100%;
`;

const inWrapper = css`
  height: auto;
`;

const contentWrapper = css`
  position: absolute;
  z-index: 3;
  margin-top: 10%;
  top: 10%;
  left: 10%;
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
  z-index: 2;
  position: absolute;
  right: 40%;
  top: 40%;
  width: 400px;
  height: 400px;
`;
const img_2 = css`
  z-index: 1;
  position: absolute;
  left: 60%;
  top: 20%;
  width: 400px;
  height: 400px;
`;
const main = css`
  width: 100%;
  height: 100%;
`;
