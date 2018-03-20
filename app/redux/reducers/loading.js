/*
  Used to set the loading action
  When loading is set, the client can show / hide a spinner based on the value
*/

// Action Type - Used to set loading value
export const SET_LOADING = 'set_loading';

// Action creator
export function set_loading(data) {
  return {
    type: SET_LOADING,
    data
  }
}

// Actual reducer. Default value is false for loading
export default function loading(state = false, action) {
  switch(action.type) {
    case SET_LOADING:
      return action.data;
    default:
      return state;
  }
}
