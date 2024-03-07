// Importamos React y los hooks useState y useEffect
import React, { useState, useEffect } from 'react';

// Importamos el módulo de autenticación de Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../service/firebaseConfig';

import { useNavigate } from 'react-router-dom' // Importa useNavigate de react-router-dom

// Creamos nuestro componente de Login
function Login() {
  // Definimos el estado para el email y la contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msj, setMsj] = useState('');

  const navigate = useNavigate(); // Inicializa useNavigate

  // Función para manejar el inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      // Utilizamos el método signInWithEmailAndPassword de Firebase para iniciar sesión
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Estas autenticado')
      setMsj('')
      navigate('/show')
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMsj('Las credenciales no son validas, vuelva a intentarlo'); 
    }
  };

  // JSX del componente de login
  return (
    <>
    <h3>Login</h3>
    <form onSubmit={handleLogin}>

    <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"/>
      
      
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"/>
      
      <button type='submit'>Iniciar sesión</button>
    </form>

    <p>{msj}</p>
    </>
        
   
  )
}

// Exportamos el componente de login para poder utilizarlo en otras partes de la aplicación
export default Login;



