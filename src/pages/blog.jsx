import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import styled from "styled-components";

export const PostLinkContainer = styled.div`
  font-family: "Cooper";
  font-weight: bolder;
  font-size: 30px;
  margin: 30px;
`;

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.path}>
    {post.frontmatter.title} ({post.frontmatter.date})
  </Link>
);

const Blog = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return <PostLinkContainer>{Posts}</PostLinkContainer>;
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
