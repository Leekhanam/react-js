import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

const DetailProduct = ({ products }) => {
    let { id } = useParams();
    console.log(id);
    const product = products.find(product => product.id === id)
    console.log(product);

    return (
        <div>
            <h1>ID: {id}</h1>
            <p>Tên sản phẩm: {product.name}</p>
            <p>Ảnh: <img src={product.image} alt="" width="100" /></p>
            <p>Giá: {product.price}</p>
        </div>
    )
}

DetailProduct.propTypes = {

}

export default DetailProduct
