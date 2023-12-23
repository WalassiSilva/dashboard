import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <p>Products</p>
            <Link to="/" className='underline'>Back to Homepage</Link>
        </div>
    )
}

export { Products };