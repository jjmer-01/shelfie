import React, {Component} from 'react'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
     inventory: []
    }
  }

  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      // console.log(res)
      this.setState({inventory: res.data})
    })
    .catch(err => (console.log(err)))
  }

  render() {
   
    const inventory = this.state.inventory.map(element => {
      // console.log(element)
      return<Dashboard 
          id={element.id}
          key={element.id}
          img={element.img}
          name={element.name}
          price={element.price}
        />
      
    })
    // console.log (inventoryDummy)
    return(
      <div>
        <Header />
        {/* {inventoryDummy} */}
        <Form />
      </div>
    )
  }
}

export default App