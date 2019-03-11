export function apiStart() {
  return {
    type: 'API_START',
    payload: {}
  };
}

export function apiSuccess() {
  return {
    type: 'API_SUCCESS',
    payload: {}
  };
}

export function apiError(error) {
  return {
    type: 'API_ERROR',
    payload: { error }
  };
}
