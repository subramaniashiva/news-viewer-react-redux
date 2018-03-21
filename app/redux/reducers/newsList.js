const defaultState = [];

export const SET_NEWS_LIST = 'SET_NEWS_LIST';

export const LOAD_NEWS_LIST = 'LOAD_NEWS_LIST';

export function setNewsList(data) {
  return {
    type: SET_NEWS_LIST,
    payload: {
      data
    }
  }
}

export function loadNewsList(data) {
  return {
    type: LOAD_NEWS_LIST,
    payload: {
      data
    }
  }
}

export default function newsList(state = defaultState, action) {
  switch(action.type) {
    case SET_NEWS_LIST:
      return [...action.payload.data];
    default:
      return state;
  }
}