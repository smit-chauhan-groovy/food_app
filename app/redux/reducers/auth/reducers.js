import types from './actions';

const initialStore = {
  accessToken: '',
};

export default function reducer(state = initialStore, action) {
  switch (action.type) {
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };

    default:
      return state;
  }
}
