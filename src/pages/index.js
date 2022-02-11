import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title={'Home Page'} />
      <div>Hello Wolrd</div>
    </Layout>
    
  )
}

export default IndexPage
