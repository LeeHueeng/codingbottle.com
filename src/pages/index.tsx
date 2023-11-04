/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Footer from "components/footer";
import About from "components/section/about";
import Contect from "components/section/contect";
import Core from "components/section/core";
import Faq from "components/section/faq";
import Intro from "components/section/intro";
import Schedule from "components/section/schedule";
import Team from "components/section/team";
import Number from "components/text/number";
import Head from "next/head";
import theme from "styles/theme/theme";

export default function Home() {
  return (
    <>
      <Head>
        <title>codingBottle</title>
        <meta name="description" content="Let's sail further" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="codingBottle" />
        <meta property="og:description" content="Let's sail further" />
        {/* <meta property="og:image" content="image" /> */}
        <meta property="og:url" content="codingBottle.com" />
      </Head>
      <main css={wrapper}>
        <Intro />
        <About />
        <div id="team">
          <Number num="2" title="Team composition" />
          <Team />
        </div>
        <div id="recruit">
          <Number num="3" title="Recruitment schedule" />
          <Schedule />
        </div>
        <div id="faq">
          <Number num="4" title="FAQ" />
          <Faq />
        </div>
        <div id="core">
          <Number num="5" title="Sailors" />
          <Core />
        </div>
        <div id="contect">
          <Contect />
        </div>
        <Footer />
      </main>
    </>
  );
}

const wrapper = css`
  overflow-y: scroll;
  height: calc(var(--var, 1vh) * 300);
  width: 100vw;
  margin: 0 auto;
  background-color: yellow;
`;
