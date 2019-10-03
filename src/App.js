import React from 'react';
import SimpleTable from './SimpleTable';
import Header from './Header';
import Modal from './Modal';
import './App.css';
import { rows } from './formDataContents'; 

// Redux Step 1 > import 2 things
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Redux Step: import actions
import {
  getFormData,
  addFormData,
  deleteFormData,
  editFormData
} from './actions/formData';

function App(props) {

  // [1,2] 1 = statename, 2 = setState
  // userState(3) 3 means default value

  // data type: boolean
  const [open, setOpen] = React.useState(false);
  const [isAddButton, setIsAddButton] = React.useState(true);

  // data type: number
  const [formDataId, setFormDataId] = React.useState(null);

  //fires function right away when component loads
  React.useEffect(() => {
    if(props.formDataRows.length === 0) {
      props.getFormData();
    } 
  })

  //Does not fire right away. Needs to be called from UI
  // const getFormData = () => props.getFormData();

  //object
  const emptyDefault = {
    id: '', //means null
    title: '',
    state: '',
    url: '',
    createdAt: '',
    updatedAt: '',
  }

  //function
  const getDataFromId = () => {
    // find the index of the object containing the right id
    const index = rows.findIndex((row) => formDataId === row.id)

    console.log('index', index); 
    return rows[index];
  }

  console.log('formDataRows', props.formDataRows);

  return (
    <div className="App">
      <Header />
      <SimpleTable
        openModal={() => setOpen(true)}
        setIsAddButton={setIsAddButton}
        setFormDataId={setFormDataId}
        rows={props.formDataRows}
        deleteFormData={props.deleteFormData}
      />

      {/* when we click edit or plus button, Modal component renders */}
      {open && (
        <Modal handleClose={() => setOpen(false)}
          // open={open}
          editFormData={props.editFormData}
          isAddButton={isAddButton}
          addFormData={props.addFormData}
          formData={isAddButton ? emptyDefault : getDataFromId()}
        />
      )}

    </div>
  );
}


//gets stuff from the store and returns in the component as props
function mapStateToProps(store) {
  //returning as props object
  return {
    formDataRows: store.formDataReducer.rows
  }
}

//gets action from redux and returns in the component as props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getFormData,
    addFormData,
    deleteFormData,
    editFormData,
  }, dispatch)
}

export default connect(
  //1. getting states
  mapStateToProps,
  //2. getting actions
  mapDispatchToProps,
)(App);
