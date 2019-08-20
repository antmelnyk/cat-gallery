const API = {
  categoriesURL: 'https://api.thecatapi.com/v1/categories',
  imagesURL: 'https://api.thecatapi.com/v1/images/search?order=ASC',
  imagesPerPage: 10,

  fetchCategories: async function() {
    const requestData = await fetch(this.categoriesURL);
    handleError(requestData);
    const categories = await requestData.json();    
    return categories
  },

  fetchImages: async function (categoryId, page) {
    const requestData = await fetch(`${this.imagesURL}&category_ids=${categoryId}&page=${page}&limit=${this.imagesPerPage}`);
    handleError(requestData);
    const images = await requestData.json();
    return images
  }
} 

function handleError(response) {
  if (!response.ok) {    
    throw Error('Something went wrong. Please, try again later.');
  }
  return response;
}

export default API
