import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal';

export function Header(){

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  // handle sempre usa para algo que vai ser clicado
  // Usar somente set... para mudar o estado de algo a ser mudado!! 
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }


  return(
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          New Transaction
        </button>

        <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar Transação</h2>
        </Modal>
      </Content>
    </Container>
  )
}