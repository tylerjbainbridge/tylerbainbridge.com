import React from 'react';
import { Link as GatsbyLink, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Text, Image, Link } from '@chakra-ui/core';

import { ExternalLink, InternalLink } from '../components/ui';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import { SocialIcons } from '../components/social';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "buzz-full.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="about" />
      <Box fontSize="20px">
        <Box maxWidth="450px">
          <Box>
            <Box fontFamily="special">who is</Box>
            <Box fontSize="30px" letterSpacing="5px" fontWeight="bolder">
              tyler bainbridge
            </Box>
            <br />
            <Img
              // style={{ marginBottom: 20 }}
              // imgStyle={{ width: 200, height: 200 }}
              fluid={data.placeholderImage.childImageSharp.fluid}
            />

            <br />
            <Box>
              i'm a{' '}
              <Box as="span" fontWeight="bold">
                software engineer
              </Box>{' '}
              and{' '}
              <Box as="span" fontWeight="bold">
                photographer
              </Box>{' '}
              located in{' '}
              <Box as="span" fontWeight="bold">
                boston
              </Box>{' '}
              (soon to be{' '}
              <Box as="span" fontWeight="bold">
                nyc
              </Box>
              )
            </Box>
            <br />
            <Box>
              outside of work i'm usually nerding out over music, movies,
              fashion, film photography, food, or design.
            </Box>
          </Box>

          <br />

          <SocialIcons />

          <br />
          <Box
            // color="#000"
            // color="gray.700"
            width="100%"
            marginBottom="30px"
            // fontSize="25px"
          >
            <Box fontFamily="special" as="span">
              currently ~
            </Box>
            <br />
            <Box fontFamily="bodyItalic" as="span" fontSize="25px">
              front end engineer
            </Box>{' '}
            @{' '}
            <ExternalLink href="https://www.facebook.com/" withColor>
              facebook
            </ExternalLink>
            <br />
            <Box fontFamily="bodyItalic" as="span" fontSize="25px">
              founder
            </Box>{' '}
            @{' '}
            <ExternalLink href="https://www.cataloged.co/" withColor>
              cataloged
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
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
