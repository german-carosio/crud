import { useState, useEffect } from 'react';
import { collection, deleteDoc, getDocs, doc, query, orderBy } from 'firebase/firestore';
import { db } from '../../service/firebaseConfig';
import { Link } from 'react-router-dom'

const Show = () => {
  const [transactions, setTransactions] = useState([]);
  const transactionsCollection = query(collection(db, 'transactions'), orderBy('date', 'desc'));

  const getTransactions = async () => {
    try {
      const fireProducts = await getDocs(transactionsCollection);
      const data = fireProducts.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  }

  useEffect(() => {
    getTransactions();
  }, []);

  const deleteTransaction = async (id)=> {
    const transactionDoc = doc(db, 'transactions', id)
    await deleteDoc(transactionDoc)
    getTransactions()
  }

  return (
    <>
    
    <Link to='/create'><button className='btn'>Create</button></Link>
    <div className='show-container'>
      <ul className='transactions'>
        <li className='transactions-header'><p>Detalle de movimientos</p></li>
        {transactions.map(transaction => (
          <li className='transactions-item' key={transaction.id}>
            <p>{transaction.type === "ingreso" ? <i className="fa-solid fa-arrow-up verde"></i> : <i className="fa-solid fa-arrow-down rojo"></i>}</p>
            <p>{transaction.date ? new Date(transaction.date.seconds * 1000).toLocaleDateString() : ''}</p>
            <p>${transaction.amount}</p>
            <div className='item-buttons'>
            <Link to={`/edit/${transaction.id}`}><button><i className="fa-solid fa-pen-to-square"></i></button></Link>
            <button onClick={() => {deleteTransaction(transaction.id)}}><i className="fa-solid fa-trash"></i></button>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
    
    </>
    
  );
}

export default Show;



