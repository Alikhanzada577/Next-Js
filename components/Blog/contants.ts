const DEV_USERNAME = 'danishkhanzaada';
const BASE_URL = 'https://dev.to/api'; 

export const endpoints = {

    articles: `${BASE_URL}/articles?username=${DEV_USERNAME}`,
    article: (articleId: number) => `${BASE_URL}/articles/${articleId}`,
  
  }