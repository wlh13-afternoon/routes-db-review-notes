import React from 'react';
import './App.css';
import Header from './Components/Header'
import routes from './routes'
import {Switch, Route }from 'react-router-dom'
import axios from 'axios'
import Home from './Components/Home'
import Add from './Components/Add'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        products: []
    }
}
componentDidMount(){

  this.getProducts()
  // console.log(this.state.products)
}
deleteProduct = (id) => {
    axios.delete(`/api/products/${id}`).then(res => {
      this.setState({
        products: res.data
      })
    })
}
addProduct = (body) => {
  axios.post(`/api/products`, body).then(res => {
    console.log(res.data)
      this.setState({
          products: res.data
      })
  })
}
getProducts = () => {
    axios.get(`/api/products`).then(res => {
      // console.log(res.data)
      this.setState({
        products: res.data
      })
    })
}
render(){
  console.log(this.state.products)
  return(
    <div className='App'>
      <Header/>
     {routes}
     <Switch>
     <Route exact path='/'render={(props) => {
       return <Home {...props} delete={this.deleteProduct} products={this.state.products}/>
    }} />
    <Route path='/add' render={(props) => {
      return <Add {...props} add={this.addProduct}/>
    }} />
     </Switch>
    </div>
  )
}
}

export default App;
