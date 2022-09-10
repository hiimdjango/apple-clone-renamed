import styled from "styled-components";
import { PrimaryButton, TextBlock } from "../Components";
import fitnessImage from "../assets/fitness_image.jpeg";
import fitnessLogo from "../assets/fitness_logo.png";

interface Props {}

export const LastSection: React.FC<Props> = () => {
  return (
    <StyledLastSection>
      <img alt="watch_logo" src={fitnessLogo} />
      <TextBlock inverted width={570}>
        Now all you need is iPhone to subscribe and access the largest
        collection of 4K Ultra HD fitness and wellness content in the world.
        Stay motivated with onscreen coaching, timers, and trainer callouts as
        you work out. Available later this fall for all iPhone users.
        performance.
      </TextBlock>
      <StyledButtonContainer>
        <PrimaryButton inverted>Learn more</PrimaryButton>
        <PrimaryButton inverted>Notify me</PrimaryButton>
      </StyledButtonContainer>
      <img alt="watch" src={fitnessImage} />
    </StyledLastSection>
  );
};

const StyledButtonContainer = styled.div`
  margin-top: 24px;
  button:first-of-type {
    margin-right: 16px;
  }
`;

const StyledLastSection = styled.div`
  padding-bottom: 72px;
  background-color: #e6e6e6;
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
