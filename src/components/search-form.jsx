import React from 'react';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleIputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
    event.target.value;
  }


  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} type="text" />
        <button type="submit">Search</button>
      </div>
    );
  }
}

export default SearchForm;
