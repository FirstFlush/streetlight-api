

export const spiderRegistry = {
  bc211: {
    searchResults: {
      key: 'bc211.json.search',
      url: 'https://bc.211.ca/result/?topics=438:439:440:441:442:443:444:445:446:447:448',
      label: 'Search Results Page',
    },
    pdf: {
      key: 'bc211.pdf.shelters',
      url: 'https://shelters.bc211.ca/bc211shelters',
      label: 'Shelter PDF Page, updated twice daily',
    },
  },
} as const;

export type SpiderRegistry = typeof spiderRegistry;