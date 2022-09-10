import styled from "styled-components";

interface Props {
  title: string;
  items: string[];
}

export const FooterList: React.FC<Props> = ({ items, title }) => {
  return (
    <StyledFooterList>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </StyledFooterList>
  );
};

const StyledFooterList = styled.div`
  width: 196px;
  color: white;
  font-size: 12px;
  h3 {
    margin: 0px;
    font-size: 12px;
    font-weight: 500;
  }
  ul {
    list-style: none;
    padding: 0;
    margin-top: 10px;
    color: #d2d2d7;
    li {
      margin-bottom: 12px;
      span:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
