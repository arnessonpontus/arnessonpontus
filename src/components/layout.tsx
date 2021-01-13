/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../theme';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            paddingTop: '10vh',
          }}
        >
          <main>{children}</main>
        </div>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
