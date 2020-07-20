/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { ServerStyleSheet } from 'styled-components';

export const replaceRenderer = ({ setHeadComponents }) => {
  const sheet = new ServerStyleSheet();

  setHeadComponents([sheet.getStyleElement()]);
};
