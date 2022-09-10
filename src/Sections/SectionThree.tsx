import styled from "styled-components";
import { PrimaryButton, TextBlock } from "../Components";
import watchImage from "../assets/double_watch.jpeg";
import watchLogo from "../assets/watch_8_logo.png";

interface Props {}

export const SectionThree: React.FC<Props> = () => {
  return (
    <StyledSectionThree>
      <div>
        <img alt="watch_logo" src={watchLogo} />
        <TextBlock width={420}>
          The future of health leaps further ahead. With temperature sensing for
          advanced cycle tracking. Crash Detection for help in an emergency. And
          new ways to train in the enhanced Workout app.
        </TextBlock>
        <StyledButtonContainer>
          <PrimaryButton>Learn more</PrimaryButton>
          <PrimaryButton>Order now</PrimaryButton>
        </StyledButtonContainer>
      </div>
      <img alt="watch" src={watchImage} />
    </StyledSectionThree>
  );
};

const StyledButtonContainer = styled.div`
  margin-top: 24px;
  button:first-of-type {
    margin-right: 16px;
  }
`;

const StyledSectionThree = styled.div`
  height: 925px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  img:first-of-type {
    font-size: 72px;
    margin-bottom: 16px;
  }
  color: white;
  text-align: center;
  overflow: hidden;
`;
