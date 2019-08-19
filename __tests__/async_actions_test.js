import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import fetch from 'isomorphic-fetch'

import {
  fetchCategories,
  selectCategory,
  fetchImages
} from '../src/store/actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Async actions', () => {
  let store;
  const fetchCategoriesData = [
    {
      'id': 1,
      'name': 'Test'
    }
  ];
  const fetchImagesData = [];

  beforeEach(() => {
    store = mockStore({
      selectedCategory: 1,
      pagesLoaded: 0
    });
  })

  afterEach(() => {
    nock.cleanAll();
  })

  it('dispatches FETCH_TODO_SUCCESS when categories are fetched', () => {
    nock('https://api.thecatapi.com')
      .get('/v1/categories')
      .reply(200, fetchCategoriesData);

    return store.dispatch(fetchCategories())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      })
  })

  it('dispatches FETCH_TODO_FAILURE when categories are not fetched', () => {
    nock('https://api.thecatapi.com')
      .get('/v1/categories')
      .reply(404);

    return store.dispatch(fetchCategories())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      })
  })

  it('dispatches FETCH_IMAGES_SUCCESS when category is selected', () => { 
    nock('https://api.thecatapi.com')
      .get('/v1/images/search?order=ASC&category_ids=1&page=0&limit=8')
      .reply(200, fetchImagesData);
      
    return store.dispatch(selectCategory(1))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      })
  })

  it('dispatches FETCH_IMAGES_SUCCESS when images are fetched', () => {
    nock('https://api.thecatapi.com')
      .get('/v1/images/search?order=ASC&category_ids=1&page=0&limit=8')
      .reply(200, fetchImagesData);

    return store.dispatch(fetchImages())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      })
  })
})
