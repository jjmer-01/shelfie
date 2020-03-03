import React, {Component} from 'react'
// import express from 'express'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prodImg: '',
            prodName: '',
            prodPrice: 0,
        }
        
    }

    handleImg = (e) => {
        this.setState({
            prodImg: e.target.value
        })
    }

    handleName = (e) => {
        this.setState({
            prodName: e.target.value
        })
    }

    handlePrice = (e) => {
        this.setState({
            prodPrice: e.target.value
        })
    }

    clearForm = (e) => { //cancel button not working yet. 
        this.setState({
            prodImg: '',
            prodName: '',
            prodPrice: 0
        })
    }


    render() {
        console.log(this.state)
        return(
            <div className="AddForm">
                <div className="ImgPreview">
                    <img src="https://i.imgflip.com/1jf0tx.jpg" alt="placeholder" />
                </div>
                <br />
                <div className="InputSection">
                    <label for="prodImg">Image URL:</label>
                        <br />
                    <input 
                        className="FormInput" 
                        id="prodImg" 
                        type="text" 
                        value={this.state.prodImg}
                        placeholder="Image" 
                        onChange={this.handleImg} />
                        <br />
                    <label for="prodName">Product Name:</label>
                        <br />
                    <input 
                        className="FormInput" 
                        id="prodName" 
                        type="text" 
                        value={this.state.prodName} 
                        placeholder="Product"
                        onChange={this.handleName} />
                        <br />
                    <label for="prodPrice">Price:</label>
                        <br />
                    <input 
                        className="FormInput" 
                        id="prodPrice" 
                        type="text" 
                        value={this.state.prodPrice} 
                        placeholder="Price"
                        onChange={this.handlePrice} />
                </div>
                <br />
                <div className="FormButtons">
                    <button className="Butts CancelButt" onClick={() => this.clearForm()}>Cancel</button>
                    <button className="Butts AddButt">Add to Inventory</button>
                </div>  
            </div>
        )
    }
}

export default Form