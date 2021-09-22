function formatResults(data) {
  const formattedResults = [];
  const { webPages, items } = data;

  // If webPages key exists, means that is a Bing Search
  if (webPages) {
    const pages = webPages.value.map(({ name, displayUrl, snippet }) => {
      return {
        title: name,
        link: displayUrl,
        description: snippet,
        provider: "bing",
      };
    });
    formattedResults.push(...pages);
  }

  // If items key exists, means that is a Google Search
  if (items) {
    const pages = items.map(({ title, link, snippet }) => {
      return {
        title,
        link,
        description: snippet,
        provider: "google",
      };
    });
    formattedResults.push(...pages);
  }

  return formattedResults;
}

export default formatResults;
