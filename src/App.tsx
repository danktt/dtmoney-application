import React, { useState } from 'react'
import Modal from 'react-modal';
import { Dashboard } from './components/Dashbord';
import { Header } from './components/Hender';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global'
import {  TransactionProvider } from './TransactionContext';

Modal.setAppElement('#root');

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  // handle sempre usa para algo que vai ser clicado
  // Usar somente set... para mudar o estado de algo a ser mudado!! 
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionProvider>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

    <Dashboard />

    <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    />  


    <GlobalStyle />


    </TransactionProvider>
  );
}

export default App;
