import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { SocialIcons } from '../components/social';
import { press } from '../data/press';
import { stuff } from '../data/stuff';
import { playlists } from '../data/playlists';
import {
  HomePageExperience,
  HomePageLinkSection,
  HomePageIntro,
} from '../components/sections';

const VIEW_MODES = {
  FULL: 'FULL',
};

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "kitchen.jpg" }) {
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

  const showPhotoOnSide = breakpoint && !['sm', 'md'].includes(breakpoint);

  return (
    <Layout>
      <SEO title="Tyler's Website 😎" description="A Guy With A Newsletter" />
      <Box fontSize="20px" marginTop="15px" paddingBottom="50px" display="flex">
        {showPhotoOnSide && (
          <Box width="30%" height="auto" maxHeight="90%" marginRight="30px">
            <Img
              imgStyle={{
                border: '15px solid #FFFF00',
              }}
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </Box>
        )}
        <Box marginTop="15px">
          <HomePageIntro />
          {process.env.SHOW_EXPERIENCE || (showFull && <HomePageExperience />)}
          <br />
          <HomePageLinkSection title="press stuff" links={press} />
          <HomePageLinkSection title="other stuff" links={stuff} />
          <HomePageLinkSection title="playlists" links={playlists} />
          <SocialIcons />
          {!showPhotoOnSide && (
            <>
              <br />
              <Img
                // style={{ marginBottom: 20 }}
                imgStyle={{ border: '10px solid #FFFF00' }}
                fluid={data.placeholderImage.childImageSharp.fluid}
              />
              <br />
            </>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
