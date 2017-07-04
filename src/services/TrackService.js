class TrackService {
  constructor() {
    this._tracks = {};
    this._tracks[`track-${Date.now()}`] = {
      name: 'tc lili',
      amount: '200'
    };
    this._tracks[`track-${Date.now()}`] = {
      name: 'tc lili',
      amount: '200'
    };
  };

  get() {
    return this._tracks;
  }

  update(track) {
    console.log(track)
    return this._tracks;
  }
}

export default new TrackService();