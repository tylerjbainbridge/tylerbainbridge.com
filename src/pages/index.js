import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

import { ExternalLink, InternalLink } from '../components/ui';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { SocialIcons } from '../components/social';

const VIEW_MODES = {
  FULL: 'FULL',
};

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "breeders.png" }) {
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
      <SEO
        title="Tyler's Website 😎"
        description="Newsletter Guy & Software Engineer"
      />
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
          <Box maxWidth="650px">
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
              and i live in new york city.
            </Box>
            <br />
            <Box as="p">
              i'm a college dropout,{' '}
              <ExternalLink
                href="https://github.com/tylerjbainbridge"
                withColor
              >
                open-source web developer
              </ExternalLink>
              , ocassional writer,{' '}
              <ExternalLink
                href="https://www.instagram.com/tubbytyinthetub/"
                withColor
              >
                photographer
              </ExternalLink>
              , and the founder of{' '}
              <ExternalLink
                href="https://www.perfectlyimperfect.fyi/"
                withColor
              >
                perfectly imperfect
              </ExternalLink>
              .
            </Box>
            <br />
            <Box as="p">
              shoot me an email me at{' '}
              <ExternalLink href="mailto:hello@tylerbainbridge.com" withColor>
                hello@tylerbainbridge.com
              </ExternalLink>{' '}
              or message me on{' '}
              <ExternalLink
                href="https://www.instagram.com/tubbytyinthetub/"
                withColor
              >
                instagram
              </ExternalLink>
              .
            </Box>
          </Box>
          {process.env.SHOW_EXPERIENCE ||
            (showFull && (
              <>
                <br />
                <Box width="100%">
                  <Box fontFamily="special" as="span">
                    **work**
                  </Box>
                  <br />
                  <Box fontFamily="bodyItalic" as="span" fontSize="20px">
                    senior front end engineer
                  </Box>{' '}
                  @{' '}
                  <ExternalLink href="https://www.facebook.com/" withColor>
                    facebook
                  </ExternalLink>
                  <br />
                  {/* <Box fontFamily="bodyItalic" as="span" fontSize="20px">
                    founder
                  </Box>{' '}
                  @{' '}
                  <ExternalLink href="https://www.cataloged.co/" withColor>
                    cataloged
                  </ExternalLink>
                  <br /> */}
                  <Box fontFamily="bodyItalic" as="span" fontSize="20px">
                    founder
                  </Box>{' '}
                  @{' '}
                  <ExternalLink
                    href="https://www.perfectlyimperfect.fyi/"
                    withColor
                  >
                    perfectly imperfect newsletter
                  </ExternalLink>
                  {/* <br />
                  <Box fontFamily="bodyItalic" as="span" fontSize="20px">
                    senior javascript engineer
                  </Box>{" "}
                  @{" "}
                  <ExternalLink href="https://www.cargurus.com/" withColor>
                    cargurus
                  </ExternalLink>
                  <br />
                  <Box fontFamily="bodyItalic" as="span" fontSize="20px">
                    director of product eng
                  </Box>{" "}
                  @{" "}
                  <ExternalLink href="https://www.conduithq.com/" withColor>
                    conduit
                  </ExternalLink> */}
                  <br />
                  {/* <Box fontFamily="bodyItalic" as="span" fontSize="20px">
                    front end engineer
                  </Box>{" "}
                  @{" "}
                  <ExternalLink href="https://www.higherme.com/" withColor>
                    higherme
                  </ExternalLink>
                  <br />
                  <Box fontFamily="bodyItalic" as="span" fontSize="20px">
                    founder
                  </Box>{" "}
                  @{" "}
                  <ExternalLink href="https://www.prsmphoto.com/" withColor>
                    prism
                  </ExternalLink>
                  <br /> */}
                  <ExternalLink
                    alt="resume"
                    href="https://drive.google.com/file/d/1wP-hCegvRzUT6wD4NcTEyk0i1RSMmIdU/view?usp=sharing"
                    withColor
                  >
                    ...full resume
                  </ExternalLink>
                </Box>
              </>
            ))}
          <br />
          <Box
            width="100%"

            // maxWidth="600px"
          >
            <Box as="span">**press and more**</Box>
            <br />
            <ExternalLink
              href="https://www.nytimes.com/2022/10/25/style/perfectly-imperfect-party-newsletter.html"
              fontStyle="italic"
              withColor
            >
              What the "Cool Kids" Are Super Into (The New York Times)
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://www.vanityfair.com/style/2022/01/perfectly-imperfect-and-the-growing-currency-of-the-personal-recommendation"
              fontStyle="italic"
              withColor
            >
              Perfectly Imperfect and the Growing Currency of the Personal
              Recommendation (Vanity Fair)
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://nymag.com/strategist/2022/07/san-francisco-and-mendocino-itinerary-of-things-to-do.html"
              fontStyle="italic"
              withColor
            >
              Steal My Vacation: Tyler Bainbridge (New York Magazine)
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://blog.stp.world/2022/09/06/a-perfectly-imperfect-an-interview-with-tyler-bainbridge/"
              fontStyle="italic"
              withColor
            >
              Perfectly Imperfect: An Interview with Tyler Bainbridge (Serving
              The People)
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://whyisthisinteresting.substack.com/p/the-monday-media-diet-with-tyler"
              fontStyle="italic"
              withColor
            >
              Tyler Bainbridge's Media Diet (Why is this interesting?)
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://open.spotify.com/episode/0uSewEq3nyNvEKI6j3yphC"
              fontStyle="italic"
              withColor
            >
              Sound Radio Podcast Episode #24
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://embedded.substack.com/p/the-newsletter-breaking-you-out-of"
              fontStyle="italic"
              withColor
            >
              The newsletter breaking you out of your algorithm bubble{' '}
              (Embedded)
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://coolstuff.nyc/Cool-Friends-Tyler-Bainbridge-Perfectly-Imperfect"
              fontStyle="italic"
              withColor
            >
              Cool Friends: Tyler Bainbridge (coolstuff.nyc)
            </ExternalLink>
            <br />
            {/* <ExternalLink
              href="https://lithiumagazine.com/2021/04/06/are-tastemakers-the-new-influencers/"
              fontStyle="italic"
              withColor
            >
              Are Tastemakers the New Influencers? (Lithium Magazine)
            </ExternalLink>
            <br /> */}
            {/* <ExternalLink
              href="https://open.spotify.com/playlist/56JudP6hJScQuJlaMz9RFE?si=d622936fcca74de9"
              fontStyle="italic"
              withColor
            >
              Music to Clean to Vol 13 (Intramural Shop)
            </ExternalLink>
            <br /> */}
            <ExternalLink
              href="https://mailchi.mp/publicannouncement/wednesday-stills-with-tyler-bainbridge"
              fontStyle="italic"
              withColor
            >
              2021 Stills (Public Announcement)
            </ExternalLink>
            {/* <br />
            <ExternalLink
              href="https://on.substack.com/p/what-to-read-tyler-alex-and-serey"
              fontStyle="italic"
              withColor
            >
              What To Read: Tyler, Alex, and Serey are recommending things
              (Substack)
            </ExternalLink> */}
          </Box>
          <br />
          <Box
            width="100%"
            marginBottom="30px"
            // maxWidth="600px"
          >
            <Box as="span">**other stuff**</Box>
            <br />
            <ExternalLink
              href="https://open.spotify.com/playlist/2nLaFRDNmrxntaZXJWaccQ?si=e1dca435796e4244"
              fontStyle="italic"
              withColor
            >
              NYC Beat Playlist (Spotify)
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://www.instagram.com/p/CZ2SDSDlBtW/"
              fontStyle="italic"
              withColor
            >
              Wife Guys: Thoughts on Love, Marriage, and Long Term Commitment.
              (The Drunken Canal)
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://dirt.substack.com/p/dirt-comic-stans"
              fontStyle="italic"
              withColor
            >
              A brief look at a misunderstood typeface, Comic Sans. (Dirt)
            </ExternalLink>
            <br />
            <InternalLink href="/2021-album-list" fontStyle="italic" withColor>
              My 2021 Albums of the Year
            </InternalLink>
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
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
