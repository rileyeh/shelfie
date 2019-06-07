import React, { Component } from 'react' 
import './Product.css'


class Product extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        let { id, name, imgurl, price } = this.props.item
        return (
            <div className="product-card"> 
                <img src={imgurl} alt="product" width="200"/>
                <div className="right-side">
                    <div>
                        <h3>{name}</h3>
                        <h4>${price}</h4>
                    </div>
                    <div className="product-buttons">
                        <button onClick={() => this.props.deleteProduct(id)}>Delete</button>
                        <button onClick={this.props.setProduct}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product