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
  height: 325rem;
  width: 100%;
  margin-bottom: 20rem;
`;

const itemWrapper = css`
  position: sticky;
  top: 0px;
  z-index: 10000;
`;

const rightWrapper = css`
  text-align: right;
  margin-top: 42rem;
`;

const marginWrapper = css`
  margin-top: 68rem;
`;

const zIndexWrapper = css`
  position: relative;
  background-color: ${theme.color.warmBlack};
`;
