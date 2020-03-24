module.exports = {
  layout: 'article',
  permalink: '{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}.html',
  tags: ['post', 'article'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.9,
  eleventyComputed: {
    target: '{{ page.url | prepend: app.url | pretty }}'
  }
};
