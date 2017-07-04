import React, { Component } from 'react';
import '../assets/css/Tracker.css';
import TrackService from '../services/TrackService';
import Track from './Track';


class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tracks: TrackService.get(),
      editing: false
    }
    this.update = this.update.bind(this);
    this.changeEditingState = this.changeEditingState.bind(this);
  }

  update(track) {
    const updatedTracks = TrackService.update(track);
    this.setState({ tracks: updatedTracks});
  }

  changeEditingState(value) {
    this.setState({ editing: value })
  }

  render() {
    const { tracks } = this.state; 
    // const trackComponents = tracks
    //   .map((x, index) => {
    //     return <Track 
    //               key={index} 
    //               track={x} 
    //               changeEditingState={this.changeEditingState} 
    //               updateTrack={this.update}
    //               editing={this.state.editing}
    //             />
    //   }); 

    return (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>add</td>
            </tr>
          </tfoot>
        </table>
    );
  }
}

export default Tracker;