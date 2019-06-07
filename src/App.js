import React, { Component } from 'react'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: [],
      product: {}
    }
  }

  componentDidMount = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log(err))
  }
  
  render () {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="dash">
        <Dashboard 
          inventory={this.state.inventory}
          getInventory={this.componentDidMount} />
        <Form 
          getInventory={this.componentDidMount}
          currentProduct={this.state.product}/>
      </div>
    </div>
  )}
}

export default App;
