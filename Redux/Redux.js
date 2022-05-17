import { createStore } from 'redux';
import { auth } from '../config/firebase';

function userReducer(state = { value: false }, action) {
  switch (action.type) {
    case 'user/loggedIn':
      return { value: state.value = true }
    case 'user/loggedOut':
      return { value: state.value = false }
    default:
      return state
  }
}

let store = createStore(userReducer);
store.subscribe(() => console.log(store.getState()));
export default store;