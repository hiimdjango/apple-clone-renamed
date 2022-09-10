import styled from "styled-components";
import { PrimaryButton, TextBlock } from "../Components";
import airpods from "../assets/airpods_pro.jpeg";

interface Props {}

export const SectionOne: React.FC<Props> = () => {
  return (
    <StyledSectionOne>
      <h2>AirPods Pro</h2>
      <TextBlock width={730}>
        Reengineered for even richer audio. Next‑level Active Noise Cancellation
        and Adaptive Transparency. Personalized Spatial Audio. And six hours of
        battery life from a single charge.
      </TextBlock>
      <StyledButtonContainer>
        <PrimaryButton>Learn more</PrimaryButton>
        <PrimaryButton>View pricing</PrimaryButton>
      </StyledButtonContainer>
      <img alt="airpods" src={airpods} />
    </StyledSectionOne>
  );
};

const StyledButtonContainer = styled.div`
  margin-top: 24px;
  button:first-of-type {
    margin-right: 16px;
  }
`;

const StyledSectionOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 72px;
    margin-bottom: 16px;
  }
  color: white;
  text-align: center;
  img {
    margin-top: 92px;
  }
`;
