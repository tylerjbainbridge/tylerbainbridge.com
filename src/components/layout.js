/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

import './layout.css';
import { InternalLink } from './ui';

const Layout = ({ children, withBack }) => {
  // return children;

  return (
    <Box
      backgroundColor="#0000ff"
      height="100vh"
      color="#fff"
      p="30px"
      fontFamily="Times New Roman"
    >
      {withBack && (
        <Box marginBottom="30px">
          <InternalLink to="/" withColor>
            &larr; back
          </InternalLink>
        </Box>
      )}
      {children}
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
