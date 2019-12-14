import React from 'react';
import { graphql } from 'gatsby';

import Img from 'gatsby-image';
import Layout from '../components/Layout';
import styled from 'styled-components';

/**
   color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.contrastColor};
  color: ${props => props.theme.secondaryFontColor};

 */

export const BlogTitle = styled.h1`
  font-family: 'Cooper';
  font-weight: bolder;
`;

export const BlogDate = styled.h2`
  font-family: 'Dank';
  font-weight: bolder;
`;

export const BlogContainer = styled.div`
  color: ${props => props.theme.primaryColor};
  max-width: 100%;
  display: block;
`;

export const BlogHeader = styled.div`
  margin-bottom: 40px;
`;

const StyledImg = styled(Img)`
  max-width: 70%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BlogContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  font-family: 'Cooper';
  font-weight: initial;
  color: ${props => props.theme.secondaryFontColor};
  font-size: 25px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  ol {
    counter-reset: li;
    margin-left: 0;
    padding-left: 0;
    position: relative;
    margin-left: 40px;
  }

  ol > li {
    position: relative;
    margin-bottom: 30px;
    list-style: none;
    word-wrap: break-word;
  }

  ol > li:before {
    color: ${props => props.theme.primaryColor};

    content: counter(li) '. ';
    counter-increment: li;
    position: absolute;
    top: -2px;

    margin-left: -50px;
    width: 45px;

    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    margin-right: 10px;

    @media (max-width: 768px) {
      margin-left: -35px;
      width: 40px;
    }
  }
`;

export default function Template({ data }) {
  const {
    markdownRemark: { frontmatter, html }
  } = data;

  return (
    <Layout>
      <BlogContainer>
        <BlogHeader>
          <StyledImg fluid={frontmatter.featuredImage.childImageSharp.fluid} />
          <BlogTitle>{frontmatter.title}</BlogTitle>
          <BlogDate>{frontmatter.date}</BlogDate>
        </BlogHeader>
        <BlogContent dangerouslySetInnerHTML={{ __html: html }} />
      </BlogContainer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
