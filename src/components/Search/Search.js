import React from 'react';
import './Search.css';
import debounce from 'lodash/debounce';

class Search extends React.Component {
  state = {
    inputField: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.inputField)
    // this.props.handleSearchEnter
  }

  handleChange = debounce((val) => {
    if (val !== "") {
      this.setState({
        inputField: val,
      })
    }
  }, 300);


  render() {
    return (
      <div id="search-box">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="city-input">Enter City or ZIP Code:</label>
          <div id="search-field">
            <input type="text"
              id="city-input"
              onChange={(e) => this.handleChange(e.target.value)} />
            <img id="search-img" src="search.png" alt="search" onClick={this.handleSubmit}/>
          </div>
        </form>
      </div>
    )
  }
}

export default Search;