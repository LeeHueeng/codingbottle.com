/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { defaultFadeInUpVariants } from "constants/motion";
import { m } from "framer-motion";
import theme from "styles/theme/theme";

interface Props {
  title: string;
  date: string;
}

export default function Chat({ title, date }: Props) {
  if (title === "question") {
    return (
      <div css={wrapperleft}>
        <div css={question}>
          <p>{date}</p>
        </div>
      </div>
    );
  }
  if (title === "result") {
    return (
      <div css={wrapperright}>
        <div css={result}>
          <p>{date}</p>
        </div>
      </div>
    );
  }
}

const wrapperleft = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8rem;
`;

const wrapperright = css`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: 1rem;
`;

const question = css`
  transition: all 0.7s ease 0s;
  transform: translateY(0px) translateX(0px);

  background-color: ${theme.color.white};
  color: ${theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 5rem;
  background-color: hsla(0, 0%, 100%, 0.9);
  border-radius: 5rem 5rem 0 5rem;
  box-shadow: var(--box-shadow);
  line-height: 1;
  padding-top: 0.2rem;
  animation: fadein 3s;
  p {
    font-size: 1.3rem;
    font-weight: ${theme.fontWeight.semiBold};
    letter-spacing: 0.4px;
    color: #black;
  }

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
  width: 40vw;
  height: 5rem;
  border-radius: 5rem 5rem 5rem 0;
  box-shadow: var(--box-shadow);
  line-height: 1;
  padding-top: 0.2rem;
  animation: fadein 3s;

  p {
    font-size: 1.3rem;
    font-weight: ${theme.fontWeight.semiBold};
    letter-spacing: 0.4px;
    color: #black;
  }
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
