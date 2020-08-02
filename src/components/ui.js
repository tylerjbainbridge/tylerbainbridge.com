import React from 'react';
import { PseudoBox } from '@chakra-ui/core';
import { Link as GatsbyLink } from 'gatsby';

const linkStyles = {
  letterSpacing: '1px',
  cursor: 'pointer',
  // borderBottom: '1px solid white',
  _hover: { color: '#1201ff', borderBottom: '1px solid #1201ff' },
};

export const ExternalLink = ({
  href,
  children,
  withUnderline = true,
  withColor = false,
  ...props
}) => (
  <PseudoBox
    as="a"
    href={href}
    {...linkStyles}
    {...(withColor ? { color: '#1201ff' } : {})}
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
  </PseudoBox>
);

export const InternalLink = ({ to, children, withColor = false, ...props }) => (
  <PseudoBox
    as={GatsbyLink}
    to={to}
    {...linkStyles}
    {...(withColor ? { color: '#1201ff' } : {})}
    {...props}
  >
    {children}
  </PseudoBox>
);
