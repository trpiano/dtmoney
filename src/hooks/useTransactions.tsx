import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransaction] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
    }, []);

    async function createTransaction(TransactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...TransactionInput,
            createdAt: new Date(),
        })
        const { transaction } = response.data;

        setTransaction([
            ...transactions,
            transaction,
        ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}