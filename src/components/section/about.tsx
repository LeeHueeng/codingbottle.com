/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import personBoat from "assets/lottieJSON/personBoat.json";
import LottieWrapper from "components/lottieWrapper";
import Number from "components/text/number";
import Point from "components/text/point";
import SectionAbout from "components/text/sectionAbout";
import theme from "styles/theme/theme";
import Chat from "components/text/chat";

export default function About() {
  return (
    <section css={wrapper}>
      <div css={itemWrapper}>
        <div css={iphoenWapper}>
          <div css={iphoneScrin}>
            <p>스마트폰 영역</p>
          </div>
        </div>
        <div css={zIndexWrapper}>
          <SectionAbout
            title="What is coding Bottle?"
            subTitle="더 멀리 항해하자, 코딩보틀!"
          />
        </div>
      </div>

      <Chat title="question" date="사이드 프로젝트 할만한 곳없을까?" />
      <Chat title="result" date="coding bottle로 와!" />

      <Chat title="question" date="어떤 곳인데?" />
      <Chat title="result" date="3~4학년들이 많고 바로 프로젝트 할 수 있어" />

      <Chat title="question" date="어떤파트들 있는데?" />
      <Chat
        title="result"
        date="디자이너, 웹, 앱 모두 있어서 쉽게 프로젝트 할 수 있어"
      />

      <Chat title="question" date="어떤 사람을 뽑아?" />
      <Chat title="result" date="열정이 있는 사람을 뽑아" />
    </section>
  );
}

const wrapper = css`
  height: 100%;
  width: 100%;
`;

const itemWrapper = css`
  position: sticky;
  top: 0px;
`;

const zIndexWrapper = css`
  position: relative;
  background-color: ${theme.color.warmBlack};
`;

const iphoenWapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  height: 550px;
  background-color: black;
  border-radius: 30px;
`;
const iphoneScrin = css`
  width: 95%;
  height: 95%;
  background-color: white;
  border-radius: 30px;
  p {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.5;
  }
`;
