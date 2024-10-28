import React from 'react'
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div>
        <p>category component</p>
        <Link to={'/category/Add_category'}>Add_category</Link>
    </div>
  )
}

export default Category;