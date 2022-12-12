import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';

import { ExternalLink, InternalLink } from './ui';

export const HomePageLinkSection = ({ title, links, max = 3 }) => {
  const [showAll, updateShowAll] = useState(false);

  return (
    <Box width="100%" marginBottom="30px">
      <Box as="p" marginBottom="10px" fontWeight="bold" fontStyle="italic">
        **{title}**{' '}
      </Box>
      {(showAll ? links : links.slice(0, max)).map(
        ({ link, text, isInternal }) => {
          const Component = isInternal ? InternalLink : ExternalLink;
          return (
            <Box key={link} marginBottom="10px">
              <Component href={link} withColor>
                {text}
              </Component>
            </Box>
          );
        }
      )}
      {links.length > max && !showAll && (
        <Button
          variant="ghost"
          size="xs"
          padding={0}
          color="#ff0"
          _hover={{ bg: '#0000ff' }}
          onClick={() => updateShowAll(true)}
        >
          show all
        </Button>
      )}
    </Box>
  );
};

export const HomePageExperience = () => {
  return (
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
        <ExternalLink href="https://www.perfectlyimperfect.fyi/" withColor>
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
  );
};

export const HomePageIntro = () => {
  return (
    <Box maxWidth="650px">
      {/* <Box fontFamily="special">who is</Box> */}
      {/* <Box fontSize="30px" letterSpacing="7px" fontWeight="bolder">
              tyler bainbridge
            </Box> */}

      <Box as="p" fontWeight="bold">
        hi there ❤️🤘😁🫶
      </Box>
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
        i'm a college dropout, the founder of{' '}
        <ExternalLink href="https://www.perfectlyimperfect.fyi/" withColor>
          perfectly imperfect
        </ExternalLink>
        , an occassional{' '}
        <ExternalLink
          href="https://open.spotify.com/playlist/1AwaYCxOOLx8sm0gDMXtqa?si=17ca3e2211824f57"
          withColor
        >
          DJ
        </ExternalLink>
        , and an{' '}
        <ExternalLink href="https://github.com/tylerjbainbridge" withColor>
          open-source web developer
        </ExternalLink>
        .
      </Box>
      <br />
      <Box as="p">
        shoot me an email at{' '}
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
  );
};

export function AlbumListSection({ albums }) {
  return (
    <Box fontSize="20px" margin="20px 20px 20px 0px">
      {albums.map(({ artist, album, embed = null }, index) => {
        return (
          <Box color="#FFFF00" marginBottom="2px">
            <ExternalLink
              fontWeight="normal"
              href={`http://www.google.com/search?q=${artist} ${album}`}
            >
              <Box as="span" fontWeight="bold">
                {artist.toLowerCase()}
              </Box>{' '}
              -{' '}
              <Box as="em" fontWeight="normal">
                {album.toLowerCase()}
              </Box>
            </ExternalLink>
            {/* {embed && (
        <Box
          dangerouslySetInnerHTML={{ __html: embed }}
          maxWidth="300px"
        />
      )} */}
          </Box>
        );
      })}
    </Box>
  );
}
