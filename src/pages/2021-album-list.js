import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

import { ExternalLink } from '../components/ui';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { SocialIcons } from '../components/social';
import { albums } from '../data/2021-album-list';

const VIEW_MODES = {
  FULL: 'FULL',
};

const IMAGE_RIGHT = true;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "steps.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const urlParamsRef = useRef(null);

  useEffect(() => {
    urlParamsRef.current = new URLSearchParams(window.location.search);
  }, []);

  const showFull = urlParamsRef.current?.get('mode') === VIEW_MODES.FULL;

  const breakpoint = useBreakpointValue({
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
  });

  const showPhotoOnSide = !['sm', 'md'].includes(breakpoint);

  return (
    <Layout>
      <SEO />
      <Box fontSize="23px" display="flex">
        <ul>
          {albums.map(({ artist, album }) => {
            return <li>{album}</li>;
          })}
        </ul>
      </Box>
    </Layout>
  );
};

export default About;
