import React, { Component } from 'react'
import API from '../API'
// import API from "../API"


export default class AddNewShopForm extends Component {

    state = {
        image_url: "",
        name: "",
        phone_number: "",
        opening_hours: "",
        address: "",
        town: "",
        county: "",
        country: "",
        postcode: "",
        service: ""
    }


    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        API.addNewShop(this.state)
        .then( () => {})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="file" name="image" placeholder="upload image..." value={this.state.image_url} onChange={this.handleChange}/>
                <input type="text" name="name" placeholder="Add name..." value={this.state.name} onChange={this.handleChange} />
                <input type="text" name="phone_number" placeholder="Add phone number..." value={this.state.phone_number} onChange={this.handleChange}/>
                <input type="text" name="opening_hours" placeholder="Add opening hours..." value={this.state.opening_hours} onChange={this.handleChange} />
                <input type="text" name="address" placeholder="Add Address..." value={this.state.address} onChange={this.handleChange}/>
                <input type="text" name="town" placeholder="Add Town..." value={this.state.town} onChange={this.handleChange}/>
                <input type="text" name="county" placeholder="Add County..." value={this.state.county} onChange={this.handleChange}/>
                <input type="text" name="country" placeholder="Add Country..." value={this.state.country} onChange={this.handleChange}/>
                <input type="text" name="postcode" placeholder="Add Postcode..." value={this.state.postcode} onChange={this.handleChange} />
                <br></br>
                <label>Service:</label>
                <div className="radio" onChange={this.handleChange}>
                    <label>
                        <input type="radio" value="Hairdressing Salon" name="service" checked={this.state.service === 'Hairdressing Salon'} 
                      onChange={this.handleChange}/>
                        Hairdressing Salon
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="Barbershop" name="service" checked={this.state.service === 'Barbershop'} 
                      onChange={this.handleChange}/>
                        Barbershop
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="Afro Hair Care Shop" name="service" checked={this.state.service === 'Afro Hair Care Shop'} 
                      onChange={this.handleChange}/>
                        Afro Hair Care Shop
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
