import React from 'react';
import { Link as GatsbyLink, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Text, Image, Link } from '@chakra-ui/react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ExternalLink, InternalLink } from '../components/ui';
import Header from '../components/header';

// import me from '../images/buzz-square.jpg';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Box as="nav">
        <Box marginBottom="10px">
          <InternalLink to="/about" withColor>
            &rarr; about
          </InternalLink>
        </Box>
        {/* <Box marginBottom="10px">
          <InternalLink to="/photography" withColor>
            &rarr; photography
          </InternalLink>
        </Box> */}
      </Box>
    </Layout>
  );
};

export default IndexPage;
