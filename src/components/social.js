import React from 'react';
import social from '../data/social';
import { Box } from '@chakra-ui/react';
import { ExternalLink } from './ui';

export const SocialIcons = () => (
  <>
    --
    <Box
      style={{
        height: 40,
        width: social.length * 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#FFFF00',
      }}
    >
      {social.map(({ url, Icon }) => (
        <ExternalLink href={url} target="_blank" withUnderline={false}>
          <Icon />
        </ExternalLink>
      ))}
    </Box>
  </>
);
