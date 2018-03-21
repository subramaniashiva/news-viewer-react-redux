import NEWS_RESOURCES from '../../utils/newsResources';

const defaultState = NEWS_RESOURCES.ALL;

export const SET_CURRENT_SOURCE = 'set_current_source';

export function setCurrentSource(data) {
  return {
    type: SET_CURRENT_SOURCE,
    payload: {
      data
    }
  }
}

export default function currentSource(state = defaultState, action) {
  switch(action.type) {
    case SET_CURRENT_SOURCE:
      return action.payload.data;
    default:
      return state;
  }
}