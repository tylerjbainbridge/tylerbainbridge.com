import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

export const PostLinkContainer = styled.div`
  display: flex;
  margin: 20px;
  margin-top: 200px;
`;

export const PostLink = styled(Link)`
  color: ${props => props.theme.primaryColor};
  font-family: "Cooper";
  font-size: 25px;
`;

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <PostLink to={edge.node.frontmatter.path} key={edge.node.id}>
        &rarr; {edge.node.frontmatter.title} ({edge.node.frontmatter.date})
      </PostLink>
    ));

  return (
    <Layout>
      <SEO
        title='Blog'
        keywords={[
          "Tyler Bainbridge",
          "Full Stack",
          "Software Engineer",
          "Boston",
          "Blog",
        ]}
      />
      <PostLinkContainer>{Posts}</PostLinkContainer>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
