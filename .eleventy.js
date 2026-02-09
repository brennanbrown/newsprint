const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // RSS Plugin
  eleventyConfig.addPlugin(pluginRss);

  // Collections
  eleventyConfig.addCollection("articles", function(collection) {
    return collection.getFilteredByGlob("src/articles/**/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Category collections
  const categories = ["news", "opinion", "features", "culture", "business"];
  categories.forEach(category => {
    eleventyConfig.addCollection(category, function(collection) {
      return collection.getFilteredByGlob("src/articles/**/*.md").filter(item => {
        return item.data.category && item.data.category.toLowerCase() === category;
      }).sort((a, b) => b.date - a.date);
    });
  });

  // Featured articles
  eleventyConfig.addCollection("featured", function(collection) {
    return collection.getFilteredByGlob("src/articles/**/*.md").filter(item => {
      return item.data.featured === true;
    }).sort((a, b) => b.date - a.date);
  });

  // Pass through
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/images");

  // Custom filters
  eleventyConfig.addFilter("limit", function(arr, limit) {
    return arr.slice(0, limit);
  });

  eleventyConfig.addFilter("dateDisplay", function(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  });

  eleventyConfig.addFilter("dateShort", function(date) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  });

  eleventyConfig.addFilter("dateYear", function(date) {
    return new Date(date).getFullYear();
  });

  eleventyConfig.addFilter("dateISO", function(date) {
    return new Date(date).toISOString();
  });

  eleventyConfig.addFilter("readTime", function(content) {
    const wordsPerMinute = 200;
    const words = content ? content.split(/\s+/).length : 0;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes === 1 ? "1 min read" : `${minutes} min read`;
  });

  eleventyConfig.addFilter("emailSafe", function(content) {
    if (!content) return "";
    // Basic email-safe transformations
    let safe = content;
    // Wrap in email-friendly container
    safe = `<div style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.6; color: #2f2f2f; max-width: 600px; margin: 0 auto;">${safe}</div>`;
    return safe;
  });

  eleventyConfig.addFilter("absoluteUrl", function(url, base) {
    try {
      return new URL(url, base).toString();
    } catch(e) {
      return url;
    }
  });

  eleventyConfig.addFilter("excerpt", function(content) {
    if (!content) return "";
    const stripped = content.replace(/<[^>]*>/g, "");
    return stripped.substring(0, 200) + (stripped.length > 200 ? "..." : "");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
