import API from '../services/api/api'

import {
  SET_SELECTED_CATEGORY,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_REQUEST_FAILURE
} from './constants'

export function fetchCategories() { 
  return async (dispatch) => {
        
    dispatch({ type: FETCH_CATEGORIES_REQUEST });

    try {
      const categories = await API.fetchCategories();      
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, categories });
    } catch(error) {
      dispatch({ type: FETCH_REQUEST_FAILURE, error });
    }

  }
}

export function selectCategory(categoryId) {
  return (dispatch) => {
    
    dispatch({ type: SET_SELECTED_CATEGORY, categoryId });

    return dispatch(fetchImages(categoryId));

  }
}

export function fetchImages(categoryId) {
  return async (dispatch, getState) => {

    const category = categoryId ? categoryId : getState().selectedCategory;
    
    dispatch({ type: FETCH_IMAGES_REQUEST });

    try {
      const images = await API.fetchImages(category, getState().pagesLoaded);
      dispatch({ type: FETCH_IMAGES_SUCCESS, images });
    } catch (error) {      
      dispatch({ type: FETCH_REQUEST_FAILURE, error });
    }

  }
}
