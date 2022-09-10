import styled from "styled-components";
import heroImg from "../assets/hero_xlarge.jpeg";
import { PrimaryButton } from "../Components";

interface Props {}

export const Hero: React.FC<Props> = () => {
  return (
    <StyledHero backgroundImg={heroImg}>
      <StyledHeroTextContainer>
        <StyledTextContent>
          Introducing an all-new iPhone lineup, rebuilt AirPods Pro, three new
          Apple Watch models, {<br />} and an exciting update to Apple Fitness+.
        </StyledTextContent>
        <PrimaryButton>Watch the event</PrimaryButton>
      </StyledHeroTextContainer>
    </StyledHero>
  );
};

const StyledHeroTextContainer = styled.div`
  text-align: center;
  letter-spacing: 0.01em;
  line-height: 1.1428571429;
  margin-bottom: 72px;
  > div {
    margin-bottom: 28px;
  }
`;

const StyledTextContent = styled.div`
  width: 600px;
  font-size: 28px;
  font-weight: 500;
`;

const StyledHero = styled.div<{ backgroundImg: string }>`
  margin-top: 52px;
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-size: auto;
  background-position: center;
  height: 927px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
`;
