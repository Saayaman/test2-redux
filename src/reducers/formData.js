import { addFormData } from "../actions/formData";

// constant file

function createData(id, title, state, url, createdAt, updatedAt) {
  return { id, title, state, url, createdAt, updatedAt };
}

const initialState = {
  rows: [
    // createData('123456789', "Random title1", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
    // createData('123456712', "Random title2", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
    // createData('223456789', "Random title3", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
    // createData('323456789', "Random title4", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
    // createData('423456789', "Random title5", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
  ]
}

// state => most updated data

// if threre is nothing in the state, use intialState
export default function formData(state = initialState, action) {
  //action.type > condition
  switch(action.type) {
    case 'GET_FORM_DATA':
      //1. update state
      //2. return the updated state
      return {
        ...state,
        rows: action.payload
      }
    case 'ADD_FORM_DATA':
      //all params sent are called payload
      // const result = state.rows.push(action.payload);
      // console.log('add_result', result);
      // initialState.push(action.payload)

      //the latest updated state
      let copiedRows = state.rows;
      copiedRows.push(action.payload)

      // console.log('reducers formdata', initialState.rows.push(action.payload));

      return {
        ...state,
        rows: copiedRows,
      };
    // case 'EDIT_FORM_DATA':
    // case 'DELETE_FORM_DATA':
    default:
      return state;
  }
}

