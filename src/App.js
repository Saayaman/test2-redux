import React from 'react';
import SimpleTable from './SimpleTable';
import Header from './Header';
import Modal from './Modal';
import './App.css';


function App() {
  // [1,2] 1 = statename, 2 = setState
  // userState(3) 3 means default value

  // data type: boolean
  const [open, setOpen] = React.useState(false);
  const [isAddButton, setIsAddButton] = React.useState(true);

  // data type: number
  const [formDataId, setFormDataId] = React.useState(null);

  console.log('formDataId', formDataId);


  const line1 = {
    id: 123456789,
    title: 'Random title1',
    state: 'open',
    url: 'https://api.github.com/repos/angular/angular/',
    createdAt: '2019-09-24T10:01:21Z',
    updatedAt: '2019-09-24T10:01:21Z'
  }

  const line2 = {
    id: 223456789,
    title: 'Random title2',
    state: 'open',
    url: 'https://api.github.com/repos/angular/angular/',
    createdAt: '2019-09-24T10:01:21Z',
    updatedAt: '2019-09-24T10:01:21Z'
  }

  const emptyDefault = {
    id: '',
    title: '',
    state: '',
    url: '',
    createdAt: '',
    updatedAt: '',
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
          formData={isAddButton ? emptyDefault : line1}
        />
      )}

    </div>
  );
}

export default App;
