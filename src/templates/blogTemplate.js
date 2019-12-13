import React from "react";
import { graphql } from "gatsby";

import Img from "gatsby-image"
import Layout from "../components/Layout";
import styled from "styled-components";

/**
   color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.contrastColor};
  color: ${props => props.theme.secondaryFontColor};

 */

export const BlogTitle = styled.h1`
  font-family: "Cooper";
  font-weight: bolder;
`;

export const BlogDate = styled.h2`
  font-family: "Dank";
  font-weight: bolder;
`;

export const BlogContainer = styled.div`
  color: ${props => props.theme.primaryColor};
  max-width: 90%;
  display: block;
`;

export const BlogHeader = styled.div`
  margin-bottom: 15px;
`;

export const BlogContent = styled.div`
  font-family: "Cooper";
  font-weight: initial;
  color: ${props => props.theme.secondaryFontColor};
  font-size: 25px;
  margin: 20px;

  ol li {
    counter-increment: list;
    list-style-type: none;
    position: relative;
    margin-bottom: 15px;

    @media (max-width: 768px) {
    font-size: 20px;
  }
  }

  ol li:before {
    color: ${props => props.theme.primaryColor};
    content: counter(list) ".";
    left: -32px;
    position: absolute;
    text-align: right;
    width: 26px;
  }

  li::before {
    content: counter(li);
    color: red;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

export default function Template({
  data
}) {
  const { markdownRemark: { frontmatter, html } } = data;

  return (
    <Layout>
      <BlogContainer>
        <BlogHeader>
          <Img style={{ maxWidth: '90%' }} fluid={frontmatter.featuredImage.childImageSharp.fluid} />
          <BlogTitle>{frontmatter.title}</BlogTitle>
          <BlogDate>{frontmatter.date}</BlogDate>
        </BlogHeader>
        <BlogContent
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
