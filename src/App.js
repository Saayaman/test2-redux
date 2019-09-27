import React from 'react';
import SimpleTable from './SimpleTable';
import Header from './Header';
import Modal from './Modal';
import './App.css';
import { rows } from './formDataContents'; 

// Redux Step 1 > import 2 things
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function App(props) {
  console.log('formData', props.formData);

  // [1,2] 1 = statename, 2 = setState
  // userState(3) 3 means default value

  // data type: boolean
  const [open, setOpen] = React.useState(false);
  const [isAddButton, setIsAddButton] = React.useState(true);

  // data type: number
  const [formDataId, setFormDataId] = React.useState(null);

  console.log('formDataId', formDataId);
  //object
  const emptyDefault = {
    id: '',
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

  return (
    <div className="App">
      <Header />
      <SimpleTable
        openModal={() => setOpen(true)}
        setIsAddButton={setIsAddButton}
        setFormDataId={setFormDataId}
      />

      {/* when we click edit or plus button, Modal component renders */}
      {open && (
        <Modal handleClose={() => setOpen(false)}
          // open={open}
          // isAddButton={isAddButton}
          formData={isAddButton ? emptyDefault : getDataFromId()}
        />
      )}

    </div>
  );
}


//gets stuff from the store and returns in the component as props
function mapStateToProps(store) {
  console.log('store', store);

  //returning as props object
  return {
    formDataRows: store.formDataReducer.rows
  }
}

function mapDispatchToProps() {

}

export default connect(
  //1. getting states
  mapStateToProps,
  //2. getting actions
  mapDispatchToProps
)(App);
