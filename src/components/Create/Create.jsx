import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from "../../service/firebaseConfig";

const Create = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();
  const transactionsCollection = collection(db, 'transactions');

  const store = async (e) => {
    e.preventDefault();
    if (type !=='') {
      try {
        await addDoc(transactionsCollection, { 
          name: name, 
          amount: amount, 
          type: type,
          date: Timestamp.fromDate(new Date()) });
        navigate('/');
      } catch (error) {
        console.error('Error storing transaction: ', error);
      }
    } else {
      console.log('completar campo type en form');
    }
    
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div>
      <h3>Create</h3>
      <form onSubmit={store}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Nombre' required />
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder='$ 0,00' required />
        <div>
          <input 
            type="radio" 
            id="ingreso" 
            value="ingreso" 
            checked={type === 'ingreso'} 
            onChange={handleTypeChange} 
          />
          <label htmlFor="ingreso">Ingreso</label>
        </div>
        <div>
          <input 
            type="radio" 
            id="gasto" 
            value="gasto" 
            checked={type === 'gasto'} 
            onChange={handleTypeChange} 
          />
          <label htmlFor="gasto">Gasto</label>
        </div>
        <button type='submit' className='btn'>Cargar</button>
      </form>
    </div>
  );
};

export default Create;
