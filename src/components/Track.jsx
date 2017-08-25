import React, { Component } from 'react';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.handleEditingChange = this.handleEditingChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEditingChange() {
    this.setState({editing: !this.state.editing})
  }

  handleChange(e) {
    const updatedTrack = {}
    updatedTrack[e.target.name] = e.target.value ;
    updatedTrack['id'] = this.props.track.id;
    this.props.updateTrack(updatedTrack)
  }

  render() {
    let { id, name, amount } = this.props.track;
    if (!this.state.editing) {
    
      return (
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <div onClick={this.handleEditingChange}>edit</div>
            <div>delete</div>
          </td>
        </tr>
      );
    }
    return (
        <tr>
          <td>{id}</td>
          <td><input type="text" name="name" value={name} onChange={this.handleChange}/></td>
          <td><input type="text" name="amount" value={amount} onChange={this.handleChange}/></td>
          <td>
            <div onClick={this.handleEditingChange}>Save</div>
            <div>cancel</div>
          </td>
        </tr>
    )
  }
}

export default Track;