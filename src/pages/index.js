import React, { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Box } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

import { ExternalLink, InternalLink } from "../components/ui";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { SocialIcons } from "../components/social";

const VIEW_MODES = {
  FULL: "FULL",
};

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "balloon-head.jpg" }) {
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

  const showFull = urlParamsRef.current?.get("mode") === VIEW_MODES.FULL;

  const breakpoint = useBreakpointValue({
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  console.log({ breakpoint });

  const showPhotoOnSide = breakpoint && !["sm", "md"].includes(breakpoint);

  return (
    <Layout>
      <SEO
        title="Tyler's Website 😎"
        description="Newsletter Guy & Software Engineer"
      />
      <Box fontSize="20px" display="flex">
        {showPhotoOnSide && (
          <Box width="700px" height="auto" marginRight="30px">
            <Img
              // style={{ marginBottom: 20 }}
              width="700px"
              height="auto"
              imgStyle={{
                border: "15px solid #FFFF00",
              }}
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </Box>
        )}
        <Box paddingTop="15px">
          <Box maxWidth="600px">
            {/* <Box fontFamily="special">who is</Box> */}
            {/* <Box fontSize="30px" letterSpacing="7px" fontWeight="bolder">
              tyler bainbridge
            </Box> */}

            <Box as="p">hi there.</Box>
            <br />
            <Box as="p">
              my name is{" "}
              <ExternalLink
                href="https://www.instagram.com/tubbytyinthetub/"
                fontWeight="bold"
                withColor
              >
                tyler bainbridge
              </ExternalLink>{" "}
              and i live in new york city.
            </Box>
            <br />
            <Box as="p">
              i'm a{" "}
              <ExternalLink
                href="https://github.com/tylerjbainbridge"
                withColor
              >
                software engineer
              </ExternalLink>{" "}
              and founder of{" "}
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
              shoot me an email me at{" "}
              <ExternalLink href="mailto:hello@tylerbainbridge.com" withColor>
                hello@tylerbainbridge.com
              </ExternalLink>{" "}
              or message me on{" "}
              <ExternalLink
                href="https://www.instagram.com/tubbytyinthetub/"
                withColor
              >
                instagram
              </ExternalLink>
              .
            </Box>
          </Box>
          <br />
          <Box
            width="100%"

            // maxWidth="600px"
          >
            <Box as="span">**press and more**</Box>
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
              href="https://open.spotify.com/playlist/56JudP6hJScQuJlaMz9RFE?si=d622936fcca74de9"
              fontStyle="italic"
              withColor
            >
              Music to Clean to Vol 13 (Intramural Shop)
            </ExternalLink>
            <br />
            <ExternalLink
              href="https://mailchi.mp/publicannouncement/wednesday-stills-with-tyler-bainbridge"
              fontStyle="italic"
              withColor
            >
              2021 Stills (Public Announcement)
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
          <br />
          <Box
            width="100%"
            marginBottom="30px"
            // maxWidth="600px"
          >
            <Box as="span">**other stuff**</Box>
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
                imgStyle={{ border: "10px solid #FFFF00" }}
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
                  <Box fontFamily="bodyItalic" as="span" fontSize="20px">
                    senior front end engineer
                  </Box>{" "}
                  @{" "}
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
                    writing
                  </Box>{" "}
                  @{" "}
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
                  </ExternalLink>
                  <br />
                  <Box fontFamily="bodyItalic" as="span" fontSize="20px">
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
