module.exports = {
    siteMetadata: {
      title: `Blog Course`,
      description: "My Personal Blog",
      twitter: "MyHandle",
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/posts`,
          name: `posts`,
        }
      },
      `gatsby-plugin-mdx`
    ]
}