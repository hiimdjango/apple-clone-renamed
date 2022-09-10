import styled from "styled-components";
import { PrimaryButton, TextBlock } from "../Components";
import watchImage from "../assets/watch_image.jpeg";
import watchLogo from "../assets/watch_logo.png";

interface Props {}

export const SectionTwo: React.FC<Props> = () => {
  return (
    <StyledSectionTwo>
      <img alt="watch_logo" src={watchLogo} />
      <TextBlock inverted width={600}>
        Introducing the most rugged and capable Apple Watch ever. Made to
        withstand extreme conditions. Designed for athletes of all kinds, with
        specialized bands for endurance training, outdoor adventures, and water
        sports.
      </TextBlock>
      <StyledButtonContainer>
        <PrimaryButton inverted>Learn more</PrimaryButton>
        <PrimaryButton inverted>View pricing</PrimaryButton>
      </StyledButtonContainer>
      <img alt="watch" src={watchImage} />
    </StyledSectionTwo>
  );
};

const StyledButtonContainer = styled.div`
  margin-top: 24px;
  button:first-of-type {
    margin-right: 16px;
  }
`;

const StyledSectionTwo = styled.div`
  background-color: #f5f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img:first-of-type {
    font-size: 72px;
    margin-bottom: 16px;
    margin-top: 72px;
  }
  color: white;
  text-align: center;
  img:last-of-type {
    margin-top: 92px;
  }
`;
