import React from "react";
import { graphql } from "gatsby";
import { SectionHeader, SectionText, textStyling } from "../components/UI";

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
`;

export const BlogHeader = styled.div`
  margin-bottom: 15px;
`;

export const BlogContent = styled.div`
  font-family: "Cooper";
  font-weight: initial;
  color: ${props => props.theme.secondaryFontColor};
  font-size: 25px;

  /* Tell the list-items to not display numbers, but keep track of what the numbers should be */
  ol li {
    counter-increment: list;
    list-style-type: none;
    position: relative;
    margin-bottom: 15px;
  }

  /* Output the numbers using the counter() function, but use a custom color, and position the numbers how we want */
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
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <BlogContainer>
        <BlogHeader>
          <BlogTitle>{frontmatter.title}</BlogTitle>
          <BlogDate>{frontmatter.date}</BlogDate>
        </BlogHeader>
        <BlogContent
          className="blog-post-content"
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
      }
    }
  }
`;
