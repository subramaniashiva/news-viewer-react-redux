import * as newsList from 'redux/reducers/newsList';

describe('newsList reducer', () => {

  it('returns news list action creator', () => {

    const expectedAction = {
      type: newsList.SET_NEWS_LIST,
      payload: {
        data: 'abc'
      }
    }

    const actualAction = newsList.setNewsList('abc');
    expect(actualAction).toEqual(expectedAction);
  })
});
