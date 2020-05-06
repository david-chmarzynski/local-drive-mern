import React, { useState } from 'react';

import './searchbar.scss';

import Results from './Results';
import { Modal, Button } from 'react-bootstrap';

const SearchBar = ({ result, handleChangeSearch, handleSubmitSearch, handleGetEmptyResult}) => {

  // Test pour future recherche onChange
  const handleInputChange = (event) => {
    const search = event.target.value;
    handleChangeSearch(search);
    handleSubmitSearch();
  };

  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {
    setModal(false);
    handleGetEmptyResult();
  }

  const handleOpenModal = () => {
    setModal(true);
  }

  return (
    <div id="searchbar">
       {!modal && (
         <>
        <form action="">
          <input type="text" name="" id="search-input" placeholder="Recherchez votre ville" onChange={handleInputChange} autoComplete="off" onClick={handleOpenModal}/>
        </form>
        </>
       )}
       {modal && (
             <>
             <form action="">
             <Modal show={modal} onHide={handleCloseModal} id="modal-container" animation={false}>
               <Modal.Header closeButton>
                 <Modal.Title>
                  <input autoFocus type="text" name="" id="search-input-modal" placeholder="Recherchez votre ville" onChange={handleInputChange} autoComplete="off" onClick={() => setModal(true)}/>
                 </Modal.Title>
               </Modal.Header>
                  {result && (
                    <Modal.Body>
                    <div id="search-bar-results">
                        <Results result={result} />
                    </div>
                  </Modal.Body>
                  )}
             </Modal>
             </form>
           </>
       )}
    </div>
  );
};

export default SearchBar;
