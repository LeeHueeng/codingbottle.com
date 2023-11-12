/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { defaultFadeInUpVariants } from "constants/motion";
import { m } from "framer-motion";
import theme from "styles/theme/theme";

interface Props {
  title: string;
  subTitle?: string;
}

export default function SectionAbout({ title, subTitle }: Props) {
  return (
    <m.div
      css={aboutCss}
      variants={defaultFadeInUpVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <span css={titleCss}>{title}</span>
      <p css={subTitleCss}>{subTitle}</p>
    </m.div>
  );
}

const aboutCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 3rem 0;
`;

const titleCss = css`
  text-align: center;
  font-size: 2.2rem;
  font-weight: ${theme.fontWeight.semiBold};

  @media (max-width: 380px) {
    font-size: 1.8rem;
  }
`;

const subTitleCss = css`
  font-size: 1.2rem;
  font-weight: ${theme.fontWeight.light};
  color: ${theme.color.text};
`;
