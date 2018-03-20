import * as loading from 'redux/reducers/loading';

describe('loading reducer', () => {

  it('returns loading action creator', () => {

    const expectedAction = {
      type: loading.SET_LOADING,
      data: true
    }

    const actualAction = loading.set_loading(true);
    expect(actualAction).toEqual(expectedAction);
  })
});