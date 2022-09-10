import styled from "styled-components";
import title from "../assets/iphone_14_title_2.png";
import phone from "../assets/iphone_14_white.jpeg";
import { PrimaryButton } from "../Components";
import { useEffect, useState } from "react";

interface Props {}

export const IntroductionExtension: React.FC<Props> = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWith] = useState(window.innerWidth);

  const imageHeight = windowWidth > 1440 ? 780 : windowWidth - 661;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };
    const handleResize = () => {
      setWindowWith(window.innerWidth);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledIntroductionExtension>
      <StyledTextContainer>
        <img style={{ opacity: scrollY / 700 + 0.1 }} src={title} alt="title" />
        <StyledTextContent style={{ opacity: scrollY / 700 }}>
          Say hello to iPhone 14 and the new, supersized iPhone 14 Plus. With
          awesome all‑day battery life. Groundbreaking safety features designed
          to save lives. And even more spectacular low‑light shots.
        </StyledTextContent>
        <StyledButtonContainer style={{ opacity: scrollY / 700 }}>
          <PrimaryButton inverted>Learn more</PrimaryButton>
          <PrimaryButton inverted>View pricing</PrimaryButton>
        </StyledButtonContainer>
      </StyledTextContainer>
      <StyledResizableImage height={imageHeight} src={phone} alt="iphone" />
    </StyledIntroductionExtension>
  );
};

const StyledResizableImage = styled.img<{ height: number }>`
  height: ${({ height }) => `${height}px`};
`;

const StyledTextContainer = styled.div`
  text-align: center;
  width: 495px;
  button:nth-of-type(1) {
    margin-right: 16px;
  }

  img {
    margin-bottom: 12px;
  }
`;

const StyledTextContent = styled.div`
  max-width: 90%;
  color: #1d1d1f;
  font-size: 24px;
  font-weight: 500;
  margin: auto;
`;

const StyledButtonContainer = styled.div`
  margin-top: 24px;
`;

const StyledIntroductionExtension = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f7;
  padding-top: 112px;
  padding-left: 72px;
`;
