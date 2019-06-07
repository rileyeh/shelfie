import React, { Component } from 'react' 
import axios from 'axios'
import './Form.css'


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            name: "",
            price: 0,
            imgurl: '',
        }
    }

    // componentDidUpdate(prevProps) {
    //     let { name, price, imgurl } = this.props.currentProduct
    //     if (this.props.currentProduct !== prevProps.currentProduct) {
    //         this.setState({
    //             name,
    //             price, 
    //             imgurl
    //         })
    //     }
    // }

    handleChange = e => {
        let { value, name } = e.target
        this.setState({
            [name]: value
        }) 
    }

    handleCancel = e => {
        this.setState({
            name: "",
            price: 0,
            imgurl: '',
        })
        this.props.editFalse()
    }

    createProduct = () => {
        const { getInventory } = this.props
        const { name, price, imgurl } = this.state

        axios.post('/api/product', { name: name, price: price, img: imgurl}).then(res => {
            getInventory()
        }).catch(err => console.log(err))

        this.handleCancel()
    }

    render() {
        return (
            <div className="form"> 
                {this.props.edit 
                ?
                <div className="save-changes">
                    <img src={this.state.imgurl} alt="none" />
                    <div className="inputs"> 
                        <input 
                            type="text" 
                            placeholder="imageURL"
                            name="imgurl"
                            value={this.state.imgurl}
                            onChange={this.handleChange}></input>
                        <input 
                            type="text" 
                            placeholder="productName"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}></input>
                        <input 
                            type="number" 
                            placeholder="0"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}></input>
                    </div>

                    <div className="form-buttons">
                        <button onClick={this.handleCancel}>Cancel</button>
                        <button onClick={this.componentDidUpdate}>Save Changes</button>
                    </div>
                </div>
                :
                <div className="add-new">
                     <img src={this.state.imgurl} alt="none" />
                    <div className="inputs"> 
                        <input 
                            type="text" 
                            placeholder="imageURL"
                            name="imgurl"
                            value={this.state.imgurl}
                            onChange={this.handleChange}></input>
                        <input 
                            type="text" 
                            placeholder="productName"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}></input>
                        <input 
                            type="number" 
                            placeholder="0"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}></input>
                    </div>

                    <div className="form-buttons">
                        <button onClick={this.handleCancel}>Cancel</button>
                        <button onClick={this.createProduct}>Add to Inventory</button>
                    </div>
                </div>
                }
         </div>
        )
    }
}

export default Form