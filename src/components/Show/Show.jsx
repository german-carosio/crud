import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../service/firebaseConfig';
import { Link } from 'react-router-dom'

const Show = () => {
  const [transactions, setTransactions] = useState([]);

  const transactionsCollection = collection(db, "transactions");

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

  return (
    <>
    <Link to='/create'><button>Create</button></Link>
    <div>
      <ul className='transactions'>
        {transactions.map(transaction => (
          <li className='transactions-item' key={transaction.id}>
            <p>{transaction.name}</p>
            <p>${transaction.amount}</p>
            <p>{transaction.type}</p>
            <Link to={`/edit/${transaction.id}`}><button>edit</button></Link>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
    
  );
}

export default Show;



