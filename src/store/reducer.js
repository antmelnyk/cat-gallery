import {
  SET_SELECTED_CATEGORY,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_REQUEST_FAILURE
} from './constants'

const initialState = {
  categories: [],
  images: [],
  selectedCategory: null,
  imagesFetching: false,
  pagesLoaded: 0,
  error: ''
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_IMAGES_REQUEST:
      return {
        ...state,
        imagesFetching: true
      }

    case SET_SELECTED_CATEGORY:     
      return {
        ...state,
        selectedCategory: action.categoryId,
        images: []
      }
    
    case FETCH_CATEGORIES_SUCCESS:           
      return {
        ...state,
        categories: action.categories,
        pagesLoaded: 0
      }

    case FETCH_IMAGES_SUCCESS:      
      console.log(state.images);
      console.log(action.images);

      return {
        ...state,
        images: [...state.images, ...action.images],
        pagesLoaded: state.pagesLoaded + 1,
        imagesFetching: false
      }

    case FETCH_REQUEST_FAILURE:
      return {
        ...state,
        error: action.error
      }
  
    case FETCH_CATEGORIES_REQUEST:
    default:
      return state

  }
}
