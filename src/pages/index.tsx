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

  height: 100vw;
  width: 100vw;
  padding: 0 10%;
  margin: 0 auto;
  background-color: ${theme.color.warmBlack};
`;

const question = css`
  opacity: 1;
  transition: all 0.7s ease 0s;
  transform: translateY(0px) translateX(0px);
  background-color: ${theme.color.white};
  color: ${theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 5rem;
  background-color: hsla(0, 0%, 100%, 0.9);
  border-radius: 5rem 5rem 0 5rem;
  box-shadow: var(--box-shadow);
  line-height: 1;
  padding-top: 0.2rem;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const result = css`
  transition: all 0.7s ease 0s;
  transform: translateY(0px) translateX(0px);
  background-color: #fee500;
  color: ${theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 5rem;
  border-radius: 5rem 5rem 5rem 0;
  box-shadow: var(--box-shadow);
  line-height: 1;
  padding-top: 0.2rem;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
