import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Products } from '../components'

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    },
    allStripeSku{
      edges{
        node{
          id,
          price,
          product {
            id,
            name,
            metadata {
              img
              description
              wear
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Products products={data.allStripeSku.edges} />
  </>
)

export default IndexPage
