/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import sunriseOcean from "assets/images/sunriseOcean.jpg";
import Inform from "components/text/inform";
import Image from "next/image";
import theme from "styles/theme/theme";

export default function Contect() {
  return (
    <>
      <div css={wrapper}>
        <h2 css={introTitle}>
          Ask us <br />
          anything
        </h2>

        <div css={informWrapper}>
          <Inform title="Email" inform="codingbottleskhu@gmail.com" />
          <Inform title="Instagram" inform="@codingBottle" />
          <Inform
            title="ChannelTalk"
            inform="하단의 채널톡으로도 문의가 가능해요."
          />
        </div>
      </div>
    </>
  );
}

const wrapper = css`
  padding: 1.2rem;
  margin: 5rem 0;
`;

const introTitle = css`
  font-size: 2.5rem;
  font-weight: ${theme.fontWeight.bold};
`;

const informWrapper = css`
  display: flex;
  flex-direction: column;
`;

const imgWrapper = css`
  position: relative;
  width: 100%;
  height: 15rem;
  object-fit: cover;
`;
