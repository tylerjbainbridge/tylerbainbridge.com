import styled, { css } from 'styled-components';

export const SectionContainer = styled.div`
  margin-bottom: 30px;
`;

export const SectionHeader = styled.h2`
  color: ${props => props.theme.primaryColor};
  font-family: 'Staatliches';
  letter-spacing: 2px;
  font-style: italic;
  margin-bottom: 25px;
`;

export const importantStyling = css`
  padding: 1px;
  color: ${props => props.theme.contrastColor};
  font-weight: 600;
`;

export const textStyling = css`
  color: ${props => props.theme.secondaryFontColor};
  font-family: 'Aleo';
  letter-spacing: 3px;
  line-height: 34px;
  font-size: 30px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const keywordTextStyling = css`
  ${textStyling}
  ${importantStyling}
  line-height: 25px;
`;

export const SectionText = styled.span`
  ${textStyling}
`;

export const SectionKeywordText = styled.span`
  ${textStyling}
  ${importantStyling}
  line-height: 25px;
`;

export const SectionTextLargeMeta = styled.span`
  ${keywordTextStyling}
  color: ${props => props.theme.secondaryFontColor};
  font-size: 50px;
  line-height: 52px;
`;

export const SectionTextLarge = styled.span`
  ${textStyling}
  color: ${props => props.theme.contrastColor};
  font-size: 50px;
  line-height: 52px;
`;

export const SectionKeywordLink = styled.a`
  ${importantStyling}
  text-decoration: underline;
`;

export const SectionKeywordIconLink = styled.a`
  ${importantStyling}
`;

export const SectionMetaText = styled.span`
  color: ${props => props.theme.secondaryFontColor};
  font-size: 23px;
  font-weight: 500;
  vertical-align: middle;
  display: flex;
  align-items: center;
`;

export const InlineButton = styled.span`
  padding: 5px;
  color: ${props => props.theme.primaryColor};
  font-family: 'Staatliches';
  font-size: 12px;
  letter-spacing: 3px;
  font-weight: 300;
  vertical-align: middle;
  cursor: pointer;
`;

export const AvatarImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 0.5;
  padding-right: 15px;
`;
