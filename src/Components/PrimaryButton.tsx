import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  inverted?: boolean;
}

export const PrimaryButton: React.FC<PropsWithChildren & Props> = ({
  children,
  inverted,
}) => {
  return inverted ? (
    <StyledInvertedPrimaryButton>{children}</StyledInvertedPrimaryButton>
  ) : (
    <StyledPrimaryButton>{children}</StyledPrimaryButton>
  );
};

const StyledPrimaryButton = styled.button`
  background: none;
  color: white;
  padding: 12px 22px;
  font-size: 17px;
  border: 2px solid white;
  border-radius: 24px;
  appearance: none;
  transition: 600ms;
  transition-delay: 100ms;
  min-width: 26px;
  font-weight: 400;

  :hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;

const StyledInvertedPrimaryButton = styled.button`
  background: none;
  color: black;
  padding: 12px 22px;
  font-size: 17px;
  border: 2px solid black;
  border-radius: 24px;
  appearance: none;
  transition: 600ms;
  transition-delay: 100ms;
  min-width: 26px;
  font-weight: 400;

  :hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;
