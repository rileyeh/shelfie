import React, { Component } from 'react' 
import Product from '../Product/Product'
import './Dashboard.css'
import axios from 'axios'


class Dashboard extends Component {
    constructor(props) {
        super(props)

    }

    deleteProduct = id => {
        const { getInventory } = this.props

        axios.delete(`/api/product/${id}`).then(res => {
            getInventory()
        }).catch(err => console.log(err))
    }

    render() {
        let mappedInventory = this.props.inventory.map(item => {
            return (
                <Product key={item.id}
                item={item}
                deleteProduct={this.deleteProduct}/>
            )
        })

        return (
            <div>
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard