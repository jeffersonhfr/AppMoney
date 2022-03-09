import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal} />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>MODAL</h2>
      </Modal>

      <Dashboard />
    </>
  );
}
