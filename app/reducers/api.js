export default function api(state = { loading: false, error: '' }, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loading: false,
        error: ''
      };
    case 'API_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case 'API_START':
      return {
        ...state,
        loading: true
      };
    case 'API_SUCCESS':
      return {
        ...state,
        loading: false,
        error: ''
      };
    default:
      return state;
  }
}
