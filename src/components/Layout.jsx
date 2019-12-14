import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import styled, { ThemeProvider } from 'styled-components';

import '../fonts/fonts.css';

import { BASE_THEME, LIGHT_THEME, DARK_THEME } from '../util/constants';

import { InlineButton } from '../components/UI';

const Layout = ({ children }) => {
  const [isDark, setDark] = useState(true);

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
        <ThemeProvider theme={theme}>
          <>
            <div
              style={{
                right: 0,
                top: 0,
                position: 'fixed',
                padding: 20
              }}
            >
              <InlineButton onClick={() => setDark(!isDark)}>
                {isDark ? 'Light' : 'Dark'} theme
              </InlineButton>
            </div>
            <Helmet>
              <style>{`
                    body { background-color: ${theme.backgroundColor} }

                    html.wf-loading * {
                      opacity: 0;
                    }
                  `}</style>
            </Helmet>
            <PageContainer>{children}</PageContainer>
          </>
        </ThemeProvider>
      )}
    />
  );
};

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 700px;
  margin-bottom: 150px;
  margin-top: 30px;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
