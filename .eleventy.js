require('dotenv').config()

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets')
    return {
      passthroughFileCopy: true,
      markdownTemplateEngine: 'njk',
      pathPrefix: process.env.PATH_PREFIX ?? ''
    }
  }