import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import Spinner from './Spinner'
import { fetchCategories, selectCategory } from '../store/actions'

import styles from '../../assets/categories.css'

const Categories = (props) => {

  const [isFetching, setFetchingStatus] = useState(true);

  useEffect(() => {    
    if(props.categories.length > 0) {
      setFetchingStatus(false)
    } else {     
      props.fetchCategories()
    }
  }, [props.categories]);

  function handleCategorySelection(categoryId) {   
    props.selectCategory(categoryId)
  }

  return (
    <div className='categories'>
      {isFetching && <Spinner />}

      {props.categories.map(category =>
        <div onClick={() => handleCategorySelection(category.id)} className='category' key={category.id}>
          { category.name }
        </div>
      )}
    </div>
  )

}

const mapStateToProps = state => ({
  categories: state.categories
})
const mapDispatchToProps = { 
  fetchCategories,
  selectCategory
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories)
