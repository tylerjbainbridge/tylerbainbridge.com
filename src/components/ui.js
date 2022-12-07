import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

const linkStyles = {
  letterSpacing: '1px',
  cursor: 'pointer',
  fontWeight: 'semibold',
  // borderBottom: '1px solid white',
  _hover: { color: '#FFFF00', borderBottom: '1px solid #FFFF00' },
};

export const ExternalLink = ({
  href,
  children,
  withUnderline = true,
  withColor = false,
  ...props
}) => (
  <Box
    as="a"
    href={href}
    {...linkStyles}
    {...(withColor ? { color: '#FFFF00' } : {})}
    paddingBottom="1px"
    _hover={{
      ...linkStyles._hover,
      ...(withUnderline
        ? { borderBottom: linkStyles._hover.borderBottom }
        : { borderBottom: null }),
    }}
    {...props}
    target="_blank"
  >
    {children}
  </Box>
);

export const InternalLink = ({
  to,
  children,
  withColor = false,
  withUnderline = true,
  ...props
}) => (
  <Box
    as={GatsbyLink}
    to={to}
    {...linkStyles}
    {...(withColor ? { color: '#FFFF00' } : {})}
    _hover={{
      ...linkStyles._hover,
      ...(withUnderline
        ? { borderBottom: linkStyles._hover.borderBottom }
        : { borderBottom: null }),
    }}
    {...props}
  >
    {children}
  </Box>
);
