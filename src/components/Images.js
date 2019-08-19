import React from 'react';
import { connect } from 'react-redux'

import Spinner from './Spinner'
import CatImage from './CatImage'
import { fetchImages } from '../store/actions'

const Images = (props) => {

  function handleLoadMoreClick() {
    props.fetchImages()
  }

  if(props.selectedCategory) {
    return (
      <div className='images-list'>
        {props.images.map(image =>
          <CatImage src={image.url} key={image.id} />
        )}

        {props.imagesFetching && <Spinner />}

        <button onClick={handleLoadMoreClick} className='action-load-more'>
          Load more cats
        </button>
      </div>
    )
  } else {
    return (
      <div className='no-category'>
        Please, select category
      </div>
    )
  }
}

const mapStateToProps = state => ({
  images: state.images,
  selectedCategory: state.selectedCategory,
  imagesFetching: state.imagesFetching
})
const mapDispatchToProps = {
  fetchImages
}
export default connect(mapStateToProps, mapDispatchToProps)(Images)
