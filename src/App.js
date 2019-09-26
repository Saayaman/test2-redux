import React from 'react';
import SimpleTable from './SimpleTable';
import Header from './Header';
import './App.css';
import Modal from './Modal';

function App() {
  // [1,2] 1 = statename, 2 = setState
  // userState(3) 3 means default value
  const [open, setOpen] = React.useState(false);
  const [isAddButton, setIsAddButton] = React.useState(true);


  const line1 = {
    id: 123456789,
    title: 'Random title1',
    state: 'open',
    url: 'https://api.github.com/repos/angular/angular/',
    createdAt: '2019-09-24T10:01:21Z',
    updatedAt: '2019-09-24T10:01:21Z'
  }

  console.log('isAddButton', isAddButton);

  return (
    <div className="App">
      <Header />
      <SimpleTable openModal={() => setOpen(true)} setIsAddButton={setIsAddButton} />
      <Modal handleClose={() => setOpen(false)} open={open} isAddButton={isAddButton} formData={line1} />
    </div>
  );
}

export default App;
