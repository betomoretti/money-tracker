import React, { Component } from 'react';

class AddTrack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addingFlag: false,
            track: {}
        }
        this.add = this.add.bind(this);
        this.adding = this.adding.bind(this);
        this.canceling = this.canceling.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    add() {
        this.props.addTrack(this.state.track);
        this.setState({ addingFlag: false, track: {} });
    }

    adding() {
        this.setState({ addingFlag: true });
    }

    canceling() {
        this.setState({ addingFlag: false, track: {} });
    }

    handleChange(e) {
        const track = {...this.state.track};
        track[e.target.name] = e.target.value ;
        this.setState({ track });
      }

    render() {
        if (this.state.addingFlag) {
            return (
                <tr>
                    <td></td>
                    <td><input type="text" name="name" value={this.state.track.name} onChange={this.handleChange}/></td>
                    <td><input type="text" name="amount" value={this.state.track.amount} onChange={this.handleChange}/></td>
                    <td>
                        <div onClick={this.add}>add</div>
                        <div onClick={this.canceling}>cancel</div>
                    </td>
                </tr>
            )
        }

        return (
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><div onClick={this.adding}>add</div></td>
            </tr>
        )
    }
}

export default AddTrack;