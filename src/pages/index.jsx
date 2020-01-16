import React, { useState } from "react";

import styled, { css } from "styled-components";

import experience, { tech as allTech } from "../data/experience";
import social from "../data/social";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import Me from "../images/me_jumping.jpg";

import {
  SectionContainer,
  SectionHeader,
  SectionText,
  SectionTextLargeMeta,
  SectionKeywordText,
  SectionKeywordLink,
  SectionKeywordIconLink,
  SectionMetaText,
  InlineButton,
  SectionTextLarge,
  AvatarImage,
  textStyling,
  importantStyling,
} from "../components/UI";

const ExperienceItem = ({
  isFirst = false,
  experience: {
    title,
    company,
    dates,
    location,
    preposition = "at",
    items = [],
    tech = [],
  },
}) => {
  const [isExpanded, setIsExpanded] = useState(isFirst);

  return (
    <>
      <ExperienceContainer isExpanded={isExpanded}>
        <div>
          <SectionText>
            <SectionKeywordLink href={company.url}>
              {company.name}
            </SectionKeywordLink>{" "}
            &rarr; <ExperienceTitle>{title}</ExperienceTitle>
            <SectionMetaText>
              {dates.join(" - ")} ({location})
            </SectionMetaText>
          </SectionText>
          {isExpanded && (
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <ExperienceItemList>
                {items.map((item, idx) => (
                  <ExperienceItemListItem key={idx}>
                    {item}
                  </ExperienceItemListItem>
                ))}
              </ExperienceItemList>
              {!!tech.length && (
                <ExperienceTech>[{tech.join(", ")}]</ExperienceTech>
              )}
            </div>
          )}
          {!!(items.length || tech.length) && (
            <InlineButton onClick={() => setIsExpanded(!isExpanded)}>
              show {isExpanded ? "less" : "more"}
            </InlineButton>
          )}
        </div>
      </ExperienceContainer>
    </>
  );
};

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: ${props => props.theme.lightGreyColor};
      padding-bottom: 20px;
    `}
`;

const ExperienceItemList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`;

const ExperienceItemListItem = styled.li`
  color: ${props => props.theme.primaryFontColor};
  font-family: "IBM Plex Mono";
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 15px;
  max-width: 90%;
  ::before {
    content: "• ";
    color: ${props =>
      props.theme.primaryColor}; /* or whatever color you prefer */
  }
`;

const ExperienceTech = styled.span`
  color: ${props => props.theme.secondaryFontColor};
  font-family: "IBM Plex Mono";
  font-size: 14px;
  font-weight: 500;
  line-height: 33px;
`;

const ExperienceTitle = styled.span`
  ${textStyling}
  ${importantStyling}
  font-style: italic;
  font-weight: 500;
`;

const AboutSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const IndexPage = () => {
  const [current, ...previous] = experience;

  return (
    <Layout>
      <SEO
        title='Tyler Bainbridge'
        image={Me}
        keywords={[
          ...allTech,
          "Tyler Bainbridge",
          "Full Stack",
          "Software Engineer",
          "Boston",
        ]}
      />
      <SectionContainer>
        <SectionHeader>Who am I-</SectionHeader>
        <AboutSection>
          <AvatarImage src={Me} style={{ marginBottom: "20px" }} />
          <div>
            <div style={{ marginBottom: "20px" }}>
              <SectionTextLarge>Tyler Bainbridge</SectionTextLarge>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <SectionText>
                I'm a{" "}
                <SectionKeywordText>
                  Full Stack Software Engineer
                </SectionKeywordText>{" "}
                living in <SectionKeywordText>Boston, MA.</SectionKeywordText>
              </SectionText>
            </div>
            <SectionKeywordText
              style={{
                height: 40,
                width: social.length * 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {social.map(({ url, Icon }) => (
                <SectionKeywordIconLink href={url} target="_blank">
                  <Icon />
                </SectionKeywordIconLink>
              ))}
            </SectionKeywordText>
          </div>
        </AboutSection>
        {/* <ExperienceTech>[{allTech.join(', ')}]</ExperienceTech> */}
      </SectionContainer>
      <SectionContainer>
        <SectionHeader>What I'm doing now-</SectionHeader>
        <ExperienceItem experience={current} isFirst />
        <SectionHeader>What I've done so far-</SectionHeader>
        {previous.map((experience, idx) => (
          <ExperienceItem key={idx} experience={experience} />
        ))}
      </SectionContainer>
    </Layout>
  );
};

export default IndexPage;
