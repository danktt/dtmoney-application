import React from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container , TransactionTypeContainer } from './styles';

interface NewTransactionModalProps{
 isOpen: boolean;
 onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionModalProps){
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"

    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container>
      <h2>Register Transaction</h2>

      <input
        placeholder="Title"
      />

      <input
        type="number"
        placeholder="Value"
      />



      <TransactionTypeContainer>
        <button
          type="button"
        >
          <img src={incomeImg} alt="Entry" />
          <span>Entry</span>
        </button>

        <button
          type="button"
        >
          <img src={outcomeImg} alt="Exit" />
          <span>Exit</span>
        </button>
      </TransactionTypeContainer>


      <input
       placeholder="Category"
       /> 

        <button type="submit">
          Register
        </button>

      </Container>
    </Modal>
  );
}