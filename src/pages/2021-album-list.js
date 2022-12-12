import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

import { InternalLink } from '../components/ui';

import Layout from '../components/layout';
import { AlbumListSection } from '../components/sections';
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
      placeholderImage: file(
        relativePath: { eq: "2021-albums-graphic-wide.png" }
      ) {
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
      <SEO
        image={data.placeholderImage.childImageSharp.fluid.src}
        title="tyler's favorite albums of 2021"
        description="rx papi, dry cleaning, cfcf, and more."
      />
      <Box maxWidth="800px">
        <Box fontSize="25px" fontWeight="bold">
          tyler's favorite albums of 2021
        </Box>
        <br />
        <Box as="p">
          people seem to like numbered lists. but just consider this a very
          loosely ranked set of albums i enjoyed this year and don't take it too
          seriously. enjoy :)
        </Box>
        <br />

        <Img
          // style={{ maxWidth: '50%' }}
          imgStyle={{ border: '10px solid #FFFF00' }}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />

        <AlbumListSection albums={albums} />

        <br />
        <InternalLink href="/" fontStyle="italic" withColor>
          back home...
        </InternalLink>
        <br />
        <SocialIcons />
      </Box>
    </Layout>
  );
};

export default About;
