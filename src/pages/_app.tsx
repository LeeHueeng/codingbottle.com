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
              <li className="navbar">
                <a href="/">메인</a>
              </li>
              <li className="navbar">
                <a href="#solution">목적</a>
              </li>
              <li className="navbar">
                <a href="#features">파트</a>
              </li>
              <li className="navbar">
                <a href="#example">모집</a>
              </li>
              <li className="navbar">
                <a href="#brand">FAQ</a>
              </li>
              <li className="navbar">
                <a href="#use">항해자</a>
              </li>
              <li className="navbar">
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
  height: 10%;
  width: 100vw;
  margin: 0 auto;
  background-color: ${theme.color.warmBlack};
`;

const navCss = css`
  position: sticky;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 0;
    transform: skew(0.1deg);
    list-style: none;
    vertical-align: baseline;

    padding-inline-start: 40px;
  }

  .navbar {
    display: flex;
    justify-content: center;
    padding: 0.5rem 2rem;
    border-radius: 10rem;
    margin: 0 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s;

    a {
      color: ${theme.color.text};
      text-decoration: none;
    }
    &:hover {
      background-color: ${theme.color.warmGray};
      a {
        color: ${theme.color.black};
      }
    }
  }
`;
