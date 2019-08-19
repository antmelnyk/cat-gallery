import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import Spinner from './Spinner'
import { fetchCategories } from '../store/actions'

const CategoriesList = (props) => {

  const [isFetching, setFetchingStatus] = useState(true);

  useEffect(() => {    
    if(props.categories.length > 0) {
      setFetchingStatus(false)
    } else {     
      props.fetchCategories()
    }
  }, [props.categories]);

  function handleCategorySelection() {
    props.selectCategory()
  }

  return (
    <div className='categories-list'>
      {isFetching && <Spinner />}

      {props.categories.map(category =>
        <div onClick={handleCategorySelection} className='category' key={category.id}>
          { category.name }
        </div>
      )}
    </div>
  )

}

const mapStateToProps = state => ({
  categories: state.categories
})
const mapDispatchToProps = { fetchCategories, selectCategory }
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList)
