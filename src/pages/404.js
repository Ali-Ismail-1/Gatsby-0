import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// markup
const NotFoundPage = () => {
  return (
    
    <Layout>
      <SEO title={'404 Page'} />
      <div>The Big Empty. This Page does not exist.</div>
    </Layout>
  )
}

export default NotFoundPage
