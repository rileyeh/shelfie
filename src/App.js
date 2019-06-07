import React, { Component } from 'react'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'
import { HashRouter } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: [],
      product: {},
      edit: false
    }
  }

  componentDidMount = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log(err))
  }

  setProduct = product => {
    this.setState({
      product: product,
      edit: true
    })
  }

  editFalse = () => {
    this.setState({
      edit: false
    })
  }
  
  render () {
  return (
    <HashRouter>
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="dash">
        <Dashboard 
          inventory={this.state.inventory}
          getInventory={this.componentDidMount}
          setProduct={this.setProduct} />
        <Form 
          getInventory={this.componentDidMount}
          currentProduct={this.state.product}
          edit={this.state.edit}
          editFalse={this.editFalse}/>
      </div>
    </div>
    </HashRouter>
  )}
}

export default App;
