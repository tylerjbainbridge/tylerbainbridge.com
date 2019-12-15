import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import styled, {
  css,
  ThemeProvider,
  createGlobalStyle
} from 'styled-components';
import { Location } from '@reach/router';
import '../fonts/fonts.css';

import { BASE_THEME, LIGHT_THEME, DARK_THEME } from '../util/constants';

import { InlineButton, InlineLink } from '../components/UI';

const GlobalStyle = createGlobalStyle`
  body { background-color: ${props => props.theme.backgroundColor}; }

  html.wf-loading * {
    opacity: 0;
  }
`;

const Sticky = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;

  background-color: ${props => props.theme.backgroundColor};
`;

export const StickyPart = styled.span`
  padding: 20px;
`;

const Layout = ({ children, ...props }) => {
  const [isDark, setDark] = useState(
    window && window.localStorage.getItem('isDark')
      ? JSON.parse(window.localStorage.isDark)
      : true
  );

  useEffect(() => {
    window.localStorage.setItem('isDark', isDark);
  }, [isDark]);

  const theme = {
    ...BASE_THEME,
    ...(isDark ? DARK_THEME : LIGHT_THEME)
  };

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Location>
          {({ location }) =>
            console.log(location) || (
              <ThemeProvider theme={theme}>
                <Sticky>
                  <StickyPart>
                    {location.pathname !== '/' && (
                      <InlineLink to="/">Home</InlineLink>
                    )}
                    {location.pathname !== '/blog' && (
                      <InlineLink to="/blog">Blog</InlineLink>
                    )}
                  </StickyPart>
                  <StickyPart>
                    <InlineButton onClick={() => setDark(!isDark)}>
                      {isDark ? 'Light' : 'Dark'} theme
                    </InlineButton>
                  </StickyPart>
                </Sticky>
                <GlobalStyle whiteColor />
                <PageContainer>{children}</PageContainer>
              </ThemeProvider>
            )
          }
        </Location>
      )}
    />
  );
};

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 10px;
  margin-bottom: 150px;
  margin-top: 60px;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
