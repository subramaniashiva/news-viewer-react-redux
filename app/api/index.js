import NEWS_RESOURCES from '../utils/newsResources';

const API = {
  resources: [{
    name: NEWS_RESOURCES.GUARDIAN,
    id: 1,
    url: 'https://content.guardianapis.com/search',
    apiKey: '7d493599-dc70-49df-8dd3-8e44aeecfa3c'
  }, {
    name: NEWS_RESOURCES.OPENNEWS,
    id: 2,
    url: 'https://newsapi.org/v2/top-headlines?country=us',
    apiKey: '5a88d92b3c4d44ff85a0db5439581c97'
  }]
}
export default API;
