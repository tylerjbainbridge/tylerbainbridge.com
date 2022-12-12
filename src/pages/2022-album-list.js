import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

import { InternalLink, ExternalLink } from '../components/ui';

import Layout from '../components/layout';
import { AlbumListSection } from '../components/sections';
import SEO from '../components/seo';
import { SocialIcons } from '../components/social';
import { albums } from '../data/2022-album-list';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "2022-albums-graphic-wide.png" }
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

  return (
    <Layout>
      <SEO
        image={data.placeholderImage.childImageSharp.fluid.src}
        title="tyler's favorite albums of 2022"
        description="snow strippers, alex g, frost children, and more."
      />
      <Box maxWidth="800px">
        <Box fontSize="25px" fontWeight="bold" color="#FFFF00">
          tyler's favorite albums of 2022
        </Box>
        <br />
        <Box as="p">
          <p>these are my favorites albums of the year.</p>
          <p>they aren't ranked.</p>
          <p>i don't like numbers.</p>
          <p>
            you can find my favorite songs{' '}
            <ExternalLink
              href="https://open.spotify.com/playlist/39mVVJnr0BQtQKOXRwTgrf?si=fe7bb73ee48a4d8d"
              withColor
            >
              here
            </ExternalLink>
            .
          </p>
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
