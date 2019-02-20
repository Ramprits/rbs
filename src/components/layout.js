import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import classesName from "classnames";
import classes from "./layout.module.css";
import { Row, Col } from "react-flexbox-grid";
const Layout = ({ children }) => (
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
      <>
        <header className={classes.mainHeader}>
          <div>
            <Link to="/" className={classes.mainHeaderBrand}>
              Rbs
            </Link>
          </div>
          <nav className={classes.mainNav}>
            <ul className={classes.mainNavItems}>
              <li className={classes.mainNavItem}>
                <Link to="/about">About</Link>
              </li>
              <li className={classes.mainNavItem}>
                <Link to="/service">Service</Link>
              </li>
              <li
                className={classesName(
                  classes.mainNavItem,
                  classes.mainNavItemcta
                )}
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Row>
            <Col xs={12} md={10} mdOffset={1}>
              {children}
            </Col>
          </Row>
        </main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
