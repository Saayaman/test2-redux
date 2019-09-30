
// 1. Actions will dispatch 2 things: type and payload
// 2. You don't have to return payload, if there is no need


function createData(id, title, state, url, createdAt, updatedAt) {
  return { id, title, state, url, createdAt, updatedAt };
}

export function getFormData() {
  console.log('action fired!');

  //usually has API calls to get data from database

  //but for now, send back fake data
  
  // NOT a default export
  const rows = [
    createData('123456789', "Random title1", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
    createData('123456712', "Random title2", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
    createData('223456789', "Random title3", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
    createData('323456789', "Random title4", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
    createData('423456789', "Random title5", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
  ];

  return function(dispatch) {
    dispatch({
      type: 'GET_FORM_DATA',
      payload: rows
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