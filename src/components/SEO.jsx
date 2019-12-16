import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function SEO({ description, lang, image, url, author, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const { siteMetadata: defaults } = data.site;

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title || defaults.title}
            titleTemplate={`%s | ${defaults.title}`}
            meta={[
              {
                name: `description`,
                content: description || defaults.description,
              },
              {
                property: `og:title`,
                content: title || defaults.title,
              },
              {
                property: `og:description`,
                content: description || defaults.description,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: "og:url",
                content: url || defaults.url,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:image`,
                content: image || defaults.image,
              },
              {
                name: `twitter:creator`,
                content: author || defaults.author,
              },
              {
                name: `twitter:title`,
                content: title || defaults.title,
              },
              {
                name: `twitter:description`,
                content: description || defaults.description,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        url
        image
        twitterUsername
      }
    }
  }
`;
