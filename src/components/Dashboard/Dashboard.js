import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prodList: []
        }
    }

    componentDidMount() {
        axios.get('/api/inventory').then(res => {
            this.setState({prodList: res.data})
        })
    }

    render() {
        // console.log(this.props)
        const prodList = this.state.prodList.map(element => {
            return(
                <Product 
                    id={element.id}
                    key={element.id}
                    prodImg={element.prodImg}
                    prodName={element.prodName}
                    prodPrice={element.prodPrice}
                />
            )
        })

        return(
            <div>
                Dashboard.js
                {/* {prodList} */}
                {this.props.name} //this works somehow?
                {this.props.prodImg}
            </div>
        )
    }
}

export default Dashboard