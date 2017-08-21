class TrackService {
  constructor() {
    this._tracks = {};
    this._tracks[`track-${Date.now()}`] = {
      id: `track-${Date.now()}`,
      name: 'tc lili',
      amount: '200'
    };
    this._tracks[`track-${Date.now() + 1}`] = {
      id: `track-${Date.now() + 1}`,
      name: 'tc lilo',
      amount: '201'
    };
  };

  get() {
    return this._tracks;
  }

  update(updatedTrack) {
    this._tracks[updatedTrack.id] = { ...this._tracks[updatedTrack.id], ...updatedTrack }

    return this._tracks;
  }
}

export default new TrackService();