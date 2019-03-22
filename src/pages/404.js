import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function NotFoundPage({ data, location }) {
  const { title } = data.site.siteMetadata

  return (
    <Layout location={location} title={title}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

NotFoundPage.propTypes = {
  location: PropTypes.shape({}),
  data: PropTypes.shape({}),
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
