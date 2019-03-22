/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: '100%',
                }}
                imgStyle={{
                  borderRadius: '50%',
                }}
              />
              <p>
                <strong>{author}</strong> - Student at Texas Tech University. <br /> He likes to build cool apps and is learning how to cook food.<br />
                <a href={`https://twitter.com/${social.twitter}`}>
                  Checkout my twitter
                </a>
              </p>
            </div>
            <div
              style={{
                marginBottom: rhythm(2.5),
                textAlign: 'center',
              }}
            >
              <a href='mailto:ynigoreyes@gmail.com?Subject=Hi!' target='_blank' rel='noopener noreferrer'>email</a> • <a href='https://storage.googleapis.com/devsight.appspot.com/resume.pdf' target='_blank' rel='noopener noreferrer'>resume</a>  •  <a href='https://github.com/ynigoreyes' target='_blank' rel='noopener noreferrer'>github</a>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
