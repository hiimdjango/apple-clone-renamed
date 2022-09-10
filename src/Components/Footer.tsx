import styled from "styled-components";
import { FooterList } from "./FooterList";

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledFooterText>
          iPhone 14, iPhone 14 Plus, iPhone 14 Pro, and iPhone 14 Pro Max are
          subject to FCC rules as well as consumer protection, contractual, and
          other provisions of federal or state law. They cannot be sold or
          delivered until the FCC’s authorization process is complete.
        </StyledFooterText>
        <StyledLinksBlock>
          <FooterList
            title="Shop and Learn"
            items={[
              "Store",
              "Mac",
              "iPad",
              "iPhone",
              "Watch",
              "Airpods",
              "TV & Home",
              "AirTag",
              "Accessories",
              "Gift Cards",
            ]}
          />
          <MultipleMenusBlock>
            <FooterList
              title="Services"
              items={[
                "Apple Music",
                "Apple TV+",
                "Apple Fitness+",
                "Apple News+",
                "Apple Arcade",
                "iCloud",
                "Apple One",
                "Apple Card",
                "Apple Books",
                "Apple Podcasts",
                "App Store",
              ]}
            />
            <FooterList
              title="Account"
              items={[
                "Manage Your Apple ID",
                "Apple Store Account",
                "iCloud.com",
              ]}
            />
          </MultipleMenusBlock>
          <FooterList
            title="Apple Store"
            items={[
              "Find a Store",
              "Genius Bar",
              "Today at Apple",
              "Apple Camp",
              "Apple Store App",
              "Refurbished and Clearance",
              "Financing",
              "Apple Trade in",
              "Order Status",
              "Shopping Help",
            ]}
          />
          <MultipleMenusBlock>
            <FooterList
              title="For Business"
              items={["Apple and Business", "Shop for Business"]}
            />
            <FooterList
              title="For Education"
              items={[
                "Apple and Education",
                "Shop for K-12",
                "Shop for College",
              ]}
            />
            <FooterList
              title="For Healthcare"
              items={[
                "Apple in Healthcare",
                "Health on Apple Watch",
                "Health Records on iPhone",
              ]}
            />
            <FooterList
              title="For Government"
              items={["Shop for Government", "Shop for Veterans and Military"]}
            />
          </MultipleMenusBlock>
          <MultipleMenusBlock>
            <FooterList
              title="Apple Values"
              items={[
                "Accessibility",
                "Education",
                "Environment",
                "Inclusion and Diversity",
                "Privacy",
                "Racial Equity and Justice",
                "Supplier Responsibility",
              ]}
            />
            <FooterList
              title="About Apple"
              items={[
                "Newsroom",
                "Apple Leadership",
                "Career Opportunities",
                "Investors",
                "Ethics & Compliance",
                "Events",
                "Contact Apple",
              ]}
            />
          </MultipleMenusBlock>
        </StyledLinksBlock>
        <StyledFooterText>
          More ways to shop: <span>Find an Apple Store</span> or{" "}
          <span>other retailer</span> near you. Or call 1-800-MY-APPLE.
        </StyledFooterText>
        <StyledFooterBottomContainer>
          <div>
            <StyledText>
              Copyright © 2022 Apple Inc. All rights reserved.
            </StyledText>
            <StyledLinkButton>Privacy Policy</StyledLinkButton>
            <StyledLinkButton>Terms of Use</StyledLinkButton>
            <StyledLinkButton>Sales and Refuns</StyledLinkButton>
            <StyledLinkButton>Legal</StyledLinkButton>
            <StyledLinkButton $noBorder>Site Map</StyledLinkButton>
          </div>
          <StyledLinkButton $noBorder>United States</StyledLinkButton>
        </StyledFooterBottomContainer>
      </StyledContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  background-color: #1d1d1f;
`;

const StyledContainer = styled.div`
  color: #86868b;
  width: 980px;
  padding-bottom: 24px;
  letter-spacing: 0.01em;
`;

const StyledFooterText = styled.div`
  font-size: 12px;
  margin: 12px 0px;
  padding-bottom: 12px;
  border-bottom: 1px solid #424245;
  span {
    color: #2997ff;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

const StyledLinksBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MultipleMenusBlock = styled.div`
  div:not(:last-of-type) {
    margin-bottom: 24px;
  }
`;
const StyledText = styled.p`
  display: inline;
  margin-right: 36px;
`;

const StyledFooterBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -4px;
`;

const StyledLinkButton = styled.a<{ $noBorder?: boolean }>`
  color: #d2d2d7;
  padding: 0px 8px;
  border-right: ${({ $noBorder }) =>
    $noBorder ? "none" : "1px solid #424245"};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
