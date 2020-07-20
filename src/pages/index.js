import React from 'react';
import { Link } from 'gatsby';

import { Box, Text } from '@chakra-ui/core';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box p={8}>
      <Box
        fontFamily="body"
        d="inline-block"
        fontSize="24px"
        color="gray.700"
        // color="gray.400"
        marginBottom="60px"
        width="100%"
      >
        <Box fontFamily="special" color="brand1" as="span" fontSize="6xl">
          Tyler Bainbridge
        </Box>
        <br />
        FULL STACK ENGINEER BASED IN BOSTON, MA.
      </Box>
      <Box
        fontFamily="body"
        d="inline-block"
        fontSize="2xl"
        color="#000"
        width="100%"
      >
        <Box fontFamily="special" color="brand2" as="span" fontSize="4xl">
          Currently~
        </Box>
        <br />
        FRONT END ENGINEER @ FACEBOOK
      </Box>
    </Box>
  </Layout>
);

export default IndexPage;
