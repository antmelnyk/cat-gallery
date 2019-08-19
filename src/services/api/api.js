const API = {
  categoriesURL: 'https://api.thecatapi.com/v1/categories',
  imagesURL: 'https://api.thecatapi.com/v1/images/search?order=ASC',

  fetchCategories: async function() {
    const requestData = await fetch(this.categoriesURL);
    handleError(requestData);
    const categories = await requestData.json();    
    return categories
  }
} 

function handleError(response) {
  if (!response.ok) {    
    throw Error('Something went wrong. Please, try again later.');
  }
  return response;
}

export default API
