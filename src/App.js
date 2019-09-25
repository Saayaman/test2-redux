import React from 'react';
import SimpleTable from './SimpleTable';
import Header from './Header';
import './App.css';
import Modal from './Modal';

function App() {
  // [1,2] 1 = statename, 2 = setState
  // userState(3) 3 means default value
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log('clicked!');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div className="App">
      <Header />
      <SimpleTable openModal={handleClickOpen} />
      <Modal handleClose={handleClose} open={open} />
    </div>
  );
}

export default App;
