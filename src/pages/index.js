import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

import { ExternalLink } from '../components/ui';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { SocialIcons } from '../components/social';

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

  console.log(breakpoint);

  const showPhotoOnSide = !['sm', 'md'].includes(breakpoint);

  return (
    <Layout>
      <SEO title="about" />
      <Box fontSize="23px" display="flex">
        {showPhotoOnSide && (
          <Box width="450px" height="auto" marginRight="30px">
            <Img
              // style={{ marginBottom: 20 }}
              width="450px"
              height="auto"
              imgStyle={{
                border: '15px solid #FFFF00',
              }}
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </Box>
        )}
        <Box>
          <Box maxWidth="600px">
            {/* <Box fontFamily="special">who is</Box> */}
            {/* <Box fontSize="30px" letterSpacing="7px" fontWeight="bolder">
              tyler bainbridge
            </Box> */}

            <Box as="p">hi there.</Box>
            <br />
            <Box as="p">
              my name is{' '}
              <ExternalLink
                href="https://www.instagram.com/tubbytyinthetub/"
                fontWeight="bold"
                withColor
              >
                tyler bainbridge
              </ExternalLink>{' '}
              and i live in nyc.
            </Box>
            <br />
            <Box as="p">
              i'm a{' '}
              <Box as="span" fontWeight="bold">
                software engineer
              </Box>{' '}
              and co-founder of{' '}
              <ExternalLink
                href="https://www.perfectlyimperfect.fyi/"
                withColor
              >
                perfectly imperfect
              </ExternalLink>
              , a twice weekly recommendation newsletter.
            </Box>
            <br />
            <Box as="p">
              you can email me at{' '}
              <ExternalLink href="mailto:hello@tylerbainbridge.com" withColor>
                hello@tylerbainbridge.com
              </ExternalLink>
              .
            </Box>
          </Box>
          <br />
          <Box
            width="100%"
            marginBottom="30px"
            fontSize="20px"
            // maxWidth="600px"
          >
            <Box as="span">press...</Box>
            <br />
            <ExternalLink
              href="https://coolstuff.nyc/Cool-Friends-Tyler-Bainbridge-Perfectly-Imperfect"
              fontStyle="italic"
              withColor
            >
              Cool Friends: Tyler Bainbridge (coolstuff.nyc)
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://lithiumagazine.com/2021/04/06/are-tastemakers-the-new-influencers/"
              fontStyle="italic"
              withColor
            >
              Are Tastemakers the New Influencers? (Lithium Magazine)
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://on.substack.com/p/what-to-read-tyler-alex-and-serey"
              fontStyle="italic"
              withColor
            >
              What To Read: Tyler, Alex, and Serey are recommending things
              (Substack)
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://siftsiftsift.substack.com/p/dinner-plans-33"
              fontStyle="italic"
              withColor
            >
              Perfectly Imperfect Recommends Recipes (Sifted)
            </ExternalLink>
          </Box>

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
                <Box width="100%" marginBottom="30px">
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
