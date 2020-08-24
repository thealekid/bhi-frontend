import React, { Component } from "react";
import API from "../../API";
import "./AddNewShopForm.css";
import AddShop from "../../assets/AddShop.png"

export default class AddNewShopForm extends Component {
  state = {
    image_url:
      "https://res.cloudinary.com/dy9ugu5ex/image/upload/v1595795786/I%20Love%20Chuk/default-store-350x350_gtjp8z.jpg",
    name: "",
    phone_number: "",
    opening_hours: "",
    address: "",
    town: "",
    county: "",
    country: "",
    postcode: "",
    service: "",
    disabled: false,
    errors: "",
    loading: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      disabled: true,
    });
    API.addNewShop(this.state).then((data) => {
      data.error
        ? this.setState({
            errors: data.error,
            disabled: false,
          })
        : this.props.history.push("/received");
    });
  };

  fileChange = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "chukchuk");
    this.setState({ loading: true });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dy9ugu5ex/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    this.setState({ image_url: file.secure_url, loading: false });
  };

  render() {
    return (
      <div className="Add-shop-form">
        <div className="Add-shop-image">
          <img src={AddShop} alt="new-shop" />
        </div>
        <form
          onSubmit={(event) => {
            !this.state.loading
              ? this.handleSubmit(event)
              : event.preventDefault();
          }}
        >
          <h2>Add A New Place</h2>
          <input
            type="file"
            name="files"
            content="Upload a photo"
            onChange={(e) => this.fileChange(e)}
            accept=".png, .jpg, .jpeg"
          />
          <input
            type="text"
            name="name"
            placeholder="Add name..."
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Add phone number..."
            value={this.state.phone_number}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="opening_hours"
            placeholder="Add opening hours..."
            value={this.state.opening_hours}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Add Address..."
            value={this.state.address}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="town"
            placeholder="Add Town..."
            value={this.state.town}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="county"
            placeholder="Add County..."
            value={this.state.county}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Add Country..."
            value={this.state.country}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="postcode"
            placeholder="Add Postcode..."
            value={this.state.postcode}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Service:</label>
          <div className="radio" onChange={this.handleChange}>
            <label>
              <input
                type="radio"
                value="Hairdressing Salon"
                name="service"
                checked={this.state.service === "Hairdressing Salon"}
                onChange={this.handleChange}
              />
              Hairdressing Salon
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Barbershop"
                name="service"
                checked={this.state.service === "Barbershop"}
                onChange={this.handleChange}
              />
              Barbershop
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Afro Hair Care Shop"
                name="service"
                checked={this.state.service === "Afro Hair Care Shop"}
                onChange={this.handleChange}
              />
              Afro Hair Care Shop
            </label>
          </div>
          <button type="submit" disabled={this.state.disabled}>
            Submit
          </button>
          <div className="Errors">
            {this.state.errors.length > 0
              ? this.state.errors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))
              : null}
          </div>
        </form>
      </div>
    );
  }
}
