import appReducer, { initialState } from '../src/store/reducer'

describe('appReducer', () => {

  it('has to return the initial state', () => {
    expect(appReducer(undefined, { type: 'Unrecognized' })).toMatchSnapshot()
  })

  it('should handle SET_SELECTED_CATEGORY', () => {
    expect(
      appReducer(initialState,
        {
          type: 'SET_SELECTED_CATEGORY',
          categoryId: 0
        })
    ).toMatchSnapshot()
  })

  it('should handle FETCH_CATEGORIES_SUCCESS', () => {
    expect(
      appReducer(initialState,
        {
          type: 'FETCH_CATEGORIES_SUCCESS',
          categories: [{
            id: 0,
            name: 'Test'
          }],
          pagesLoaded: 0
        })
    ).toMatchSnapshot()
  })

  it('should handle FETCH_IMAGES_SUCCESS', () => {
    expect(
      appReducer(initialState,
        {
          type: 'FETCH_IMAGES_SUCCESS',
          images: [{
            id: 0,
            url: 'url'
          }],
          pagesLoaded: 0,
          imagesFetching: false
        })
    ).toMatchSnapshot()
  })

  it('should handle FETCH_REQUEST_FAILURE', () => {
    expect(
      appReducer(initialState,
        {
          type: 'FETCH_REQUEST_FAILURE',
          error: 'Error'
        })
    ).toMatchSnapshot()
  })

})