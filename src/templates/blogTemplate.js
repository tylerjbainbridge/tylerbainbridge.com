import React from "react";
import { graphql } from "gatsby";
import { SectionHeader, textStyling } from "../components/UI";

import Layout from "../components/Layout";
import styled from "styled-components";

export const BlogContainer = styled.div`
  color: ${props => props.theme.primaryColor};
`;

export const BlogContent = styled.div`
  ${textStyling}
  font-size: 20px;
  li {
    margin-bottom: 15px;
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
        <SectionHeader>{frontmatter.title}</SectionHeader>
        <h2>{frontmatter.date}</h2>
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
