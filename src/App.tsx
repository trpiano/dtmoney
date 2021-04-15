import React, { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal/index'
import { TransactionProvider } from './hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransacionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header onOpenNewTrasactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal 
        isOpen={isNewTransacionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
    </TransactionProvider>
  );
}
