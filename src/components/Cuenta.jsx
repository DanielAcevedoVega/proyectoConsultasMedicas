import React, { useState, useEffect } from 'react';

function Cuenta({ handleDeleteAccount }) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(() => {
    return JSON.parse(localStorage.getItem('userData'));
  });

  const updatePassword = () => {
    const updatedUserData = { ...userData, password: password };
    setUserData(updatedUserData);
    localStorage.setItem('userData', JSON.stringify(updatedUserData));
    alert('Contraseña actualizada!');
    setPassword('');
  };

  const updateEmail = () => {
    const updatedUserData = { ...userData, email: email };
    setUserData(updatedUserData);
    localStorage.setItem('userData', JSON.stringify(updatedUserData));
    alert('Correo actualizado!');
    setEmail('');
  };

  useEffect(() => {
    setEmail(userData.email);
  }, [userData]);

  return (
    <div className='container__box'>
      <h3>Cuenta</h3>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Nueva contraseña"
      />
      <button onClick={updatePassword}>Cambiar Contraseña</button>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Nuevo correo"
      />
      <button onClick={updateEmail}>Cambiar Correo</button>
      <button onClick={handleDeleteAccount}>Eliminar Cuenta</button>
    </div>
  );
}

export default Cuenta;
