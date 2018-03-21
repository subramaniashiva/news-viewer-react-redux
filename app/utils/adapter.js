import NEWS_RESOURCES from './newsResources';

export function getNormalizedData(apiCategory, data) {
  let result = [];
  if (apiCategory && data) {
    switch(apiCategory.name) {
      case NEWS_RESOURCES.GUARDIAN:
        result = parseGuardianData(data);
        break;
      case NEWS_RESOURCES.OPENNEWS:
        result = parseOpenNewsData(data);
        break;
    }
  }
  return result;
}

export function getFetchUrl(apiCategory) {
  let url = '';
  if (apiCategory) {
    switch(apiCategory.name) {
      case NEWS_RESOURCES.GUARDIAN:
        url = `${apiCategory.url}?api-key=${apiCategory.apiKey}`;
        break;
      case NEWS_RESOURCES.OPENNEWS:
        url = `${apiCategory.url}&apiKey=${apiCategory.apiKey}`;
        break;
    }
  }
  return url;
}

function parseGuardianData(data) {
  let processedResults = [];
  if (data && data.response && data.response.status === 'ok') {
    processedResults = data.response.results.map((rawResult) => {
      const processedResult = {};
      processedResult.title = rawResult.webTitle;
      processedResult.url = rawResult.webUrl;
      processedResult.date = rawResult.webPublicationDate;
      processedResult.newsSourceCategory = NEWS_RESOURCES.GUARDIAN;
      return processedResult;
    });
  }
  return processedResults;
}

function parseOpenNewsData(data) {
  let processedResults = [];
  if (data && data.status === 'ok') {
    processedResults = data.articles.map((rawResult) => {
      const processedResult = {};
      processedResult.title = rawResult.title;
      processedResult.url = rawResult.url;
      processedResult.date = rawResult.publishedAt;
      processedResult.newsSourceCategory = NEWS_RESOURCES.OPENNEWS;
      return processedResult;
    });
  }
  return processedResults;
}