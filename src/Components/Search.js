import React, {Component} from "react";

class Search extends Component {

  state = {
    text: ""
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={e => this.onSubmit(e)}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.text} onChange={e => this.setState({text: e.target.value})} />
          </div>
        </form>
      </div>
    )
  }
}

export default Search;