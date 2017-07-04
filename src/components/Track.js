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
    this.props.changeEditingState(!this.props.editing);
  }

  handleChange(e) {
    const updatedTrack = {}
    updatedTrack[e.target.name] = e.target.value ;
    updatedTrack['id'] = this.props.id;
    this.props.updateTrack(updatedTrack)
  }

  render() {
    let { id, name, amount } = this.props.track;
    if (!this.props.editing) {
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
          <td><input ref={(input) => this.name = input.value} type="text" name="name" value={name} onChange={this.handleChange}/></td>
          <td><input ref={(input) => this.amount = input.value} type="text" name="amount" value={amount} onChange={this.handleChange}/></td>
          <td>
            <input type="submit" value='Save'/>
            <div onClick={this.handleEditingChange}>cancel</div>
          </td>
        </tr>
    ) 
  }
}

export default Track;