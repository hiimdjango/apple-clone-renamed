import styled from "styled-components";
import { PrimaryButton, TextBlock } from "../Components";
import watchImage from "../assets/watch_se_many.jpeg";
import watchLogo from "../assets/watch_se_logo.png";

interface Props {}

export const SectionFour: React.FC<Props> = () => {
  return (
    <StyledSectionFour>
      <img alt="watch_logo" src={watchLogo} />
      <TextBlock inverted width={570}>
        Now with more capability and an even lower price. Stylish new case
        colors. Powerful sensors for insights about your health and fitness.
        Innovations for safety. And a new dual‑core processor for faster
        performance.
      </TextBlock>
      <StyledButtonContainer>
        <PrimaryButton inverted>Learn more</PrimaryButton>
        <PrimaryButton inverted>Order now</PrimaryButton>
      </StyledButtonContainer>
      <img alt="watch" src={watchImage} />
    </StyledSectionFour>
  );
};

const StyledButtonContainer = styled.div`
  margin-top: 24px;
  button:first-of-type {
    margin-right: 16px;
  }
`;

const StyledSectionFour = styled.div`
  padding-bottom: 72px;
  background-color: #f5f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img:first-of-type {
    font-size: 72px;
    margin-bottom: 20px;
    margin-top: 72px;
  }
  color: white;
  text-align: center;
  img:last-of-type {
    margin-top: 92px;
  }
`;
