import styled from "styled-components";
import title from "../assets/iphone_14_title.png";
import phone from "../assets/iphone_14_pro.jpeg";
import { PrimaryButton } from "../Components";
import { useEffect, useState } from "react";

interface Props {}

export const Introduction: React.FC<Props> = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledIntroduction>
      <div>
        <img style={{ opacity: scrollY / 700 + 0.1 }} src={title} alt="title" />
        <StyledTextContent style={{ opacity: scrollY / 700 }}>
          Meet Dynamic Island, a magical new way to interact with iPhone.
          Groundbreaking safety features designed to save lives. And an
          innovative 48MP camera for mind‑blowing detail. All powered by the
          ultimate smartphone chip.
        </StyledTextContent>
        <StyledButtonContainer style={{ opacity: scrollY / 700 }}>
          <PrimaryButton>Learn more</PrimaryButton>
          <PrimaryButton>View pricing</PrimaryButton>
        </StyledButtonContainer>
        <img src={phone} alt="iphone" />
      </div>
    </StyledIntroduction>
  );
};

const StyledTextContent = styled.div`
  width: 640px;
  font-size: 24px;
  font-weight: 500;
  margin: auto;
`;

const StyledButtonContainer = styled.div`
  margin-top: 24px;
`;

const StyledIntroduction = styled.div`
  text-align: center;
  padding-top: 112px;
  color: white;

  button:nth-of-type(1) {
    margin-right: 16px;
  }

  img:first-of-type {
    margin-bottom: 12px;
  }
  img:last-of-type {
    margin-top: 94px;
  }
`;
