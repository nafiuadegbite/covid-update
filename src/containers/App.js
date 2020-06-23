import React from "react";
import { CardList } from "../components/card/CardList.jsx";
import { SearchBox } from "../components/card/SearchBox.jsx";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cases: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then(response => response.json())
      .then(data => this.setState({ cases: data.Countries }));
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { cases, searchField } = this.state;
    const filteredCases = cases.filter(value =>
      value.Country.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="container">
        <h1 className="text-center text-success mt-2">Covid-19 Update</h1>
        <SearchBox
          placeholder="Search Country"
          handleChange={this.handleChange}
        />
        <CardList cases={filteredCases} />
      </div>
    );
  }
}

export default App;
