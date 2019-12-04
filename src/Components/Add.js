import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Add extends React.Component{
    constructor(){
        super()
        this.state = {
            product_name: '',
            price: 0, 
            image: ''
        }
    }
    addProduct = () => {
        const {product_name, price, image} = this.state
        axios.post(`/api/products`, {product_name, price, image}).then(res => {
            this.setState({
                [this.props.products]: res.data,
                product_name: '',
                price: 0,
                image: ''
            })
        })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        // console.log(this.state)
        const {product_name, price, image} = this.state
        return(
            <div className='Home'>
                <h2>Add a Product to Your Inventory!</h2>
                <input onChange={e => this.handleChange(e)} placeholder='product' value={product_name} name='product_name' type="text"/>
                <input onChange={e => this.handleChange(e)} placeholder='price'  name='price' type="text"/>
                <input onChange={e => this.handleChange(e)} placeholder='image' value={image} name='image' type="text"/>
                <Link to='/'>
                    <button onClick={this.addProduct}>Submit</button>
                </Link>
            </div>
        )
    }
}