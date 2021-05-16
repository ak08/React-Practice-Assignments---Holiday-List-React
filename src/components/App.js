import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.cityList = [
      { name: "Goa", country: "India" },
      { name: "Amsterdam", country: "Netherlands" },
      { name: "New York", country: "USA" },
      { name: "Darjeeling", country: "India" },
      { name: "Tokyo", country: "Japan" },
      { name: "Lonavala", country: "India" },
      { name: "Brandenburg Gate", country: "Germany" },
      { name: "Reichstag Building", country: "Germany" },
      { name: "Museum Island", country: "Germany" },
      { name: "Munnar", country: "India" },
      { name: "Leh Ladakh", country: "India" },
      { name: "Goa", country: "India" },
      { name: "Agra", country: "India" },
      { name: "Dalhousie", country: "India" },
      { name: "Coorg", country: "India" },
      { name: "Rome", country: "Italy" },
      { name: "Milan", country: "Italy" },
      { name: "Venice", country: "Italy" },
      { name: "Varanasai", country: "India" },
      { name: "Jaipur", country: "India" },
      { name: "The Hofburg", country: "Austria" },
      { name: "Belvedere Palace", country: "Austria" },
      { name: "St. Stephen Cathedral", country: "Austria" },
      { name: "Kahna National Park", country: "India" },
      { name: "Amritsar", country: "India" },
      { name: "Mussoorie", country: "India" },
      { name: "Mount Abu", country: "India" },
      { name: "Tirupati", country: "India" },
    ];
  }

  render() {
    const citiesWithKey = this.cityList.map((city, index) => ({
      ...city,
      key: index + 1,
    }));
    console.log(citiesWithKey);
    const validCities = citiesWithKey
      .filter((city) => city.country === "India")
      .map((city) => ({ name: city.name, key: city.key }));
    console.log(validCities);
    //const uniqueCities = [...new Set(validCities)];
    //console.log(uniqueCities);
    const orderedList = validCities.map((city) => (
      <li key={`location${city.key}`}>{city.name}</li>
    ));
    console.log(orderedList);
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol type="a">{orderedList}</ol>
      </div>
    );
  }
}

// const Cities = (props) => {
//   const {cityList} = props;
//   const validCities = cityList.filter(city => city.country === "India").map(city => city.name);
//   const uniqueCities = [...new Set(validCities)];
//   const orderedList = uniqueCities.map((city, index) => <li key={`location${index + 1}`}>{city}</li>);
//   console.log(orderedList);
//   return <ol key="orderedList">{orderedList}</ol>
// }

// const City = (props) => {
//   const {city, index}= props;
//   return <li>{city}</li>
// }

export default App;
