import React from 'react';
import { connect } from 'react-redux'

import Spinner from './Spinner'
import CatImage from './CatImage'
import { fetchImages } from '../store/actions'

import styles from '../../assets/css/images.css'

const Images = (props) => {

  function handleLoadMoreClick() {
    props.fetchImages()
  }

  if(props.selectedCategory) {
    return (
      <div className='images'>
        {props.images.map(image =>
          <CatImage src={image.url} key={image.id} />
        )}

        {props.imagesFetching && <Spinner />}

        <div className='button-container'>
          <button onClick={handleLoadMoreClick} className='action-load-more'>
              Load more cats
          </button>
        </div>
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
