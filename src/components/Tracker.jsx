import React, { Component } from 'react';
import '../assets/css/Tracker.css';
import TrackService from '../services/TrackService';
import Track from './Track';
import AddTrack from './AddTrack';


class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: TrackService.get()
    }
    this.update = this.update.bind(this);
    this.add = this.add.bind(this);
  }

  update(track) {
    const updatedTracks = TrackService.update(track);
    this.setState({ tracks: updatedTracks});
  }

  add(track) {
    const tracks = TrackService.add(track);
    this.setState({ tracks });    
  }

  render() {
    const { tracks } = this.state;
    const trackComponents = Object
      .keys(tracks)
      .map((idTrack, index) => {
        return <Track
                  key={index}
                  track={tracks[idTrack]}
                  updateTrack={this.update}
                />
      });

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
            { trackComponents }
          </tbody>
          <tfoot>
            <AddTrack addTrack={this.add}/>
          </tfoot>
        </table>
    );
  }
}

export default Tracker;