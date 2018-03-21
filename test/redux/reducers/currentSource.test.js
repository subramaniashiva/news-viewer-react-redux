import * as currentSource from 'redux/reducers/currentSource';

describe('currentSource reducer', () => {

  it('returns current source action creator', () => {

    const expectedAction = {
      type: currentSource.SET_CURRENT_SOURCE,
      payload: {
        data: 'abc'
      }
    }

    const actualAction = currentSource.setCurrentSource('abc');
    expect(actualAction).toEqual(expectedAction);
  })
});
