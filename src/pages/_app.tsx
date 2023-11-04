/** @jsxImportSource @emotion/react */

import { css, ThemeProvider } from "@emotion/react";
import logo from "assets/images/logo.png";
import { domMax, LazyMotion } from "framer-motion";
import useWindowSize from "hooks/useWindowSize";
import type { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useEffect } from "react";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme/theme";
let vh = 0;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LazyMotion features={domMax}>
        <GlobalStyle />
        <Layout>
          <nav css={navCss}>
            <ul>
              <li class="on">
                <a href="/">메인</a>
              </li>
              <li class="">
                <a href="#solution">목적</a>
              </li>
              <li class="">
                <a href="#features">파트</a>
              </li>
              <li class="">
                <a href="#example">모집</a>
              </li>
              <li class="">
                <a href="#brand">FAQ</a>
              </li>
              <li class="">
                <a href="#use">항해자</a>
              </li>
              <li class="">
                <a href="#download">문의</a>
              </li>
            </ul>
          </nav>
          <Component {...pageProps} />
        </Layout>
      </LazyMotion>
    </ThemeProvider>
  );
}

function Layout({ children }: PropsWithChildren<{}>) {
  const windowSize = useWindowSize();

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [windowSize.height]);

  return <div css={layoutCss}>{children}</div>;
}

const layoutCss = css`
  height: calc(var(--var, 1vh) * 100);
  width: 100vw;
  margin: 0 auto;
  background-color: purple;
`;

const navCss = css`
  position: sticky;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;

  @media (max-width: 380px) {
    padding: 1rem 0.9rem;
  }

  h1 {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    color: black;
    display: inline-block;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 0;
    transform: skew(0.1deg);
    list-style: none;
    vertical-align: baseline;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
    margin: 0 1rem;
  }
  a {
    background-color: var(--color-primary);
    color: #fff;
  }
`;
