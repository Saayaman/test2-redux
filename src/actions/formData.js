
// 1. Actions will dispatch 2 things: type and payload
// 2. You don't have to return payload, if there is no need

export function getFormData() {
  return function(dispatch) {
    dispatch({
      type: 'GET_FORM_DATA',
    })
  }
}

export function addFormData(payload) {
  return function(dispatch) {
    dispatch({
      type: 'ADD_FORM_DATA',
      payload: payload
    })
  }
}