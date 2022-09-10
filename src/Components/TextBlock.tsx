import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  inverted?: boolean;
  width?: number;
}

export const TextBlock: React.FC<PropsWithChildren & Props> = ({
  children,
  inverted,
  width,
}) => {
  return (
    <StyledTextBlock width={width} inverted={inverted}>
      {children}
    </StyledTextBlock>
  );
};

const StyledTextBlock = styled.div<{ width?: number; inverted?: boolean }>`
  width: ${({ width }) => `${width}px`};
  font-size: 24px;
  font-weight: 500;
  margin: auto;
  color: ${({ inverted }) => (inverted ? "black" : "white")};
`;
