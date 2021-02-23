import React, { useEffect, useRef } from 'react';
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from '@chakra-ui/core';

import { ExternalLink } from '../components/ui';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { SocialIcons } from '../components/social';

const VIEW_MODES = {
  FULL: 'FULL',
};

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "selfie.jpg" }) {
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

  return (
    <Layout>
      <SEO title="about" />
      <Box fontSize="20px">
        <Box maxWidth="450px">
          <Box>
            <Box fontFamily="special">who is</Box>
            <Box fontSize="30px" letterSpacing="7px" fontWeight="bolder">
              tyler bainbridge
            </Box>
            <br />
            <Img
              // style={{ marginBottom: 20 }}
              imgStyle={{ border: '10px solid #FFFF00' }}
              fluid={data.placeholderImage.childImageSharp.fluid}
            />

            <br />
            <Box>
              tyler is a{' '}
              <Box as="span" fontWeight="bold">
                software engineer
              </Box>{' '}
              and{' '}
              <Box as="span" fontWeight="bold">
                photographer
              </Box>{' '}
              located in{' '}
              <Box as="span" fontWeight="bold">
                brooklyn
              </Box>
            </Box>
            <br />
            <Box>
              you can also find him talking about music, movies, clothing, and
              more at{' '}
              <ExternalLink
                href="https://www.perfectlyimperfect.fyi/"
                withColor
              >
                perfectly imperfect
              </ExternalLink>
            </Box>
          </Box>

          <br />

          <SocialIcons />

          {process.env.SHOW_EXPERIENCE ||
            (showFull && (
              <>
                <br />
                <Box width="100%" marginBottom="30px">
                  <Box fontFamily="special" as="span">
                    currently ~
                  </Box>
                  <br />
                  <Box fontFamily="bodyItalic" as="span" fontSize="25px">
                    senior front end engineer
                  </Box>{' '}
                  @{' '}
                  <ExternalLink href="https://www.facebook.com/" withColor>
                    facebook
                  </ExternalLink>
                  <br />
                  {/* <Box fontFamily="bodyItalic" as="span" fontSize="25px">
                    founder
                  </Box>{' '}
                  @{' '}
                  <ExternalLink href="https://www.cataloged.co/" withColor>
                    cataloged
                  </ExternalLink>
                  <br /> */}
                  <Box fontFamily="bodyItalic" as="span" fontSize="25px">
                    writing
                  </Box>{' '}
                  @{' '}
                  <ExternalLink
                    href="https://www.perfectlyimperfect.fyi/"
                    withColor
                  >
                    perfectly imperfect
                  </ExternalLink>
                </Box>
                <Box
                  // color="#000"
                  // color="gray.700"
                  width="100%"
                  marginBottom="30px"
                  // fontSize="25px"
                >
                  <Box fontFamily="special" as="span">
                    previously ~
                  </Box>
                  <br />
                  <Box fontFamily="bodyItalic" as="span" fontSize="25px">
                    senior javascript engineer
                  </Box>{' '}
                  @{' '}
                  <ExternalLink href="https://www.cargurus.com/" withColor>
                    cargurus
                  </ExternalLink>
                  <br />
                  <Box fontFamily="bodyItalic" as="span" fontSize="25px">
                    director of product eng
                  </Box>{' '}
                  @{' '}
                  <ExternalLink href="https://www.conduithq.com/" withColor>
                    conduit
                  </ExternalLink>
                  <br />
                  <Box fontFamily="bodyItalic" as="span" fontSize="25px">
                    front end engineer
                  </Box>{' '}
                  @{' '}
                  <ExternalLink href="https://www.higherme.com/" withColor>
                    higherme
                  </ExternalLink>
                  <br />
                  <Box fontFamily="bodyItalic" as="span" fontSize="25px">
                    founder
                  </Box>{' '}
                  @{' '}
                  <ExternalLink href="https://www.prsmphoto.com/" withColor>
                    prism
                  </ExternalLink>
                  <br />
                  <ExternalLink
                    alt="resume"
                    href="https://drive.google.com/file/d/1wP-hCegvRzUT6wD4NcTEyk0i1RSMmIdU/view?usp=sharing"
                    withColor
                  >
                    ...
                  </ExternalLink>
                </Box>
              </>
            ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
