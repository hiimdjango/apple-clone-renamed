import styled from "styled-components";
import { AiFillApple, AiOutlineSearch } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";

export const MenuItems = [
  { label: "Store" },
  { label: "Mac" },
  { label: "iPad" },
  { label: "iPhone" },
  { label: "Watch" },
  { label: "AirPods" },
  { label: "TV & Home" },
  { label: "Only on Apple" },
  { label: "Accessories" },
  { label: "Support" },
];

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledMenu>
        <StyledIconContainer>
          <AiFillApple style={{ fontSize: 20 }} />
        </StyledIconContainer>
        {MenuItems.map((item) => (
          <StyledMenuItem>{item.label}</StyledMenuItem>
        ))}
        <StyledIconContainer>
          <AiOutlineSearch style={{ transform: "translateY(1px)" }} />
        </StyledIconContainer>
        <StyledIconContainer>
          <IoBagOutline />
        </StyledIconContainer>
      </StyledMenu>
    </StyledHeader>
  );
};

const StyledIconContainer = styled.div`
  width: 30px;
  opacity: 0.8;
  cursor: pointer;
  svg {
    font-size: 17px;
    color: white;
  }
  :hover {
    opacity: 1;
  }
`;

const StyledMenu = styled.div`
  width: 996px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const StyledMenuItem = styled.div`
  letter-spacing: 0.045em;
  font-weight: 400;
  color: white;
  padding: 0px 8px;
  font-size: 12px;
  opacity: 0.8;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
