import React, { useState, useEffect } from 'react';

function Citas() {
  const [citas, setCitas] = useState(() => {
    const savedCitas = localStorage.getItem('citas');
    return savedCitas ? JSON.parse(savedCitas) : [];
  });

  const [mascotas, setMascotas] = useState([]);
  const [mascota, setMascota] = useState('');
  const [doctor, setDoctor] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    const savedMascotas = localStorage.getItem('mascotas');
    if (savedMascotas) {
      setMascotas(JSON.parse(savedMascotas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const doctors = ["Dr. Smith", "Dr. Jones", "Dr. Taylor"];

  const agendarCita = () => {
    const time = parseInt(hora.split(':')[0]);
    if (!mascota || !doctor || !fecha || !hora) {
      alert('Por favor complete todos los campos antes de agendar la cita.');
      return;
    }
    if (time < 6 || time >= 21) {
      alert('La hora debe estar entre las 6 am y las 9 pm.');
      return;
    }
    if (!citas.some(cita => cita.mascota === mascota && cita.doctor === doctor && cita.fecha === fecha && cita.hora === hora)) {
      setCitas([...citas, { mascota, doctor, fecha, hora, id: Date.now() }]);
      setMascota('');
      setDoctor('');
      setFecha('');
      setHora('');
    }
  };

  const cancelarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className='container__box'>
      <h3>Citas</h3>
      <select value={mascota} onChange={(e) => setMascota(e.target.value)} placeholder="Nombre de la mascota">
        <option value="">Seleccionar mascota</option>
        {mascotas.map((mascota) => (
          <option key={mascota.id} value={mascota.name}>{mascota.name}</option>
        ))}
      </select>
      <select value={doctor} onChange={(e) => setDoctor(e.target.value)} placeholder="Nombre del doctor">
        <option value="">Seleccionar doctor</option>
        {doctors.map((doctor, index) => (
          <option key={index} value={doctor}>{doctor}</option>
        ))}
      </select>
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        min={today}
      />
      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
        min="06:00"
        max="21:00"
      />
      <button onClick={agendarCita}>Agendar Cita</button>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            {cita.mascota} - {cita.doctor} - {cita.fecha} - {cita.hora}
            <button onClick={() => cancelarCita(cita.id)}>Cancelar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
