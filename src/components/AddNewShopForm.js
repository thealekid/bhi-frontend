import React, { Component } from 'react'



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
        service: [
            {
                id: 0,
                title: "Hairdressing Salon",
                key: "service"
            },
            {
                id: 1,
                title: "Barbershop",
                key: "service"
            },
            {
                id: 2,
                title: "Afro Hair Care Shop",
                key: "service"
            }
        ]
    }

    render() {
        return (
            <div>
                <input type="file" name="image" palceholder="" value={this.state.image_url}/>
                <input type="text" name="name" value={this.state.name} />
                <input type="text" name="phone_number" value={this.state.phone_number} />
                <input type="text" name="opening_hours" value={this.state.opening_hours} />
                <input type="text" name="address" value={this.state.address} />
                <input type="text" name="town" value={this.state.town} />
                <input type="text" name="county" value={this.state.county} />
                <input type="text" name="country" value={this.state.country} />
                <input type="text" name="postcode" value={this.state.postcode} />
                
            </div>
        )
    }
}
