import PropTypes from 'prop-types';
import React from 'react';
import { Box, Text, Image, Link } from '@chakra-ui/react';

import { ExternalLink, InternalLink } from '../components/ui';
import social from '../data/social';
import { SocialIcons } from './social';

const Header = ({ siteTitle }) => (
  <Box as="header" display="flex" marginBottom="30px">
    <Box
      fontFamily="body"
      d="inline-block"
      fontSize="24px"
      // color="gray.700"
      // color="gray.400"
      width="100%"
    >
      <Box
        fontFamily="special"
        as="span"
        // fontSize="5xl"
        fontSize="30px"
        letterSpacing="5px"
        fontWeight="bolder"
      >
        {/* TYLER BAINBRIDGE */}
        tyler bainbridge
      </Box>
      <br />
      <ExternalLink
        // fontSize="2xl"
        href="mailto:hello@tylerbainbridge.com"
      >
        hello@tylerbainbridge.com
      </ExternalLink>
      <br />
      <SocialIcons />
      {/* <br />
            <Box as="span">front end engineer</Box> @{' '}
            <ExternalLink href="https://www.facebook.com/">
              facebook
            </ExternalLink>
            <br />
            boston, ma 📌 (soon to be nyc) */}
    </Box>
  </Box>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
