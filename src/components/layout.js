/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/core';

import '../fonts/fonts.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      // background="linear-gradient(180deg, rgba(0,148,174,1) 0%, rgba(28,205,66,1) 100%)"
      // backgroundColor="#00f"
      // backgroundColor="#4030ff"
    >
      <Box width="100%" as="main" d="flex" justifyContent="center">
        <Box width="1300px">{children}</Box>
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
