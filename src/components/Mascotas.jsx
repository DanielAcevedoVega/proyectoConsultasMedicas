import React, { useState, useEffect } from 'react';

function Mascotas() {
    const [mascotas, setMascotas] = useState(() => {
        const savedMascotas = localStorage.getItem('mascotas');
        return savedMascotas ? JSON.parse(savedMascotas) : [];
    });

    const [newMascota, setNewMascota] = useState({
        name: '',
        age: '',
        type: '',
        breed: '',
        color: '',
        vaccinations: [],
        address: ''
    });

    const [vaccination, setVaccination] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        localStorage.setItem('mascotas', JSON.stringify(mascotas));
    }, [mascotas]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMascota(prevState => ({ ...prevState, [name]: value }));
    };

    const addVaccination = () => {
        if (vaccination.trim() !== '') {
            setNewMascota(prevState => ({
                ...prevState,
                vaccinations: [...prevState.vaccinations, vaccination]
            }));
            setVaccination('');
        }
    };

    const deleteVaccination = (index) => {
        setNewMascota(prevState => {
            const updatedVaccinations = [...prevState.vaccinations];
            updatedVaccinations.splice(index, 1);
            return { ...prevState, vaccinations: updatedVaccinations };
        });
    };

    const validateMascota = () => {
        if (!newMascota.name.trim() || !newMascota.age.trim() || !newMascota.type.trim()) {
            setErrorMessage("Los campos 'Nombre', 'Edad' y 'Tipo' son obligatorios.");
            return false;
        }
        if (parseInt(newMascota.age) < 0) {
            setErrorMessage("La edad no puede ser un número negativo.");
            return false;
          }
        return true;
    };


    const isDuplicate = () => {
        return mascotas.some(mascota =>
            mascota.name.toLowerCase().trim() === newMascota.name.toLowerCase().trim() &&
            mascota.age === newMascota.age &&
            mascota.type.toLowerCase().trim() === newMascota.type.toLowerCase().trim() &&
            mascota.breed.toLowerCase().trim() === newMascota.breed.toLowerCase().trim() &&
            mascota.color.toLowerCase().trim() === newMascota.color.toLowerCase().trim() &&
            mascota.address.toLowerCase().trim() === newMascota.address.toLowerCase().trim()
        );
    };



    const formatText = (text) => {
        if (!text) return '';
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

    const addMascota = () => {
        if (!validateMascota()) return;

        if (isDuplicate()) {
            setErrorMessage('La mascota ya existe.');
            return;
        }

        const formattedMascota = {
            ...newMascota,
            name: formatText(newMascota.name),
            age: newMascota.age,
            type: formatText(newMascota.type),
            breed: formatText(newMascota.breed),
            color: formatText(newMascota.color),
            vaccinations: newMascota.vaccinations.map(v => formatText(v)),
            address: formatText(newMascota.address)
        };

        setMascotas([...mascotas, { ...formattedMascota, id: Date.now() }]);
        setNewMascota({
            name: '',
            age: '',
            type: '',
            breed: '',
            color: '',
            vaccinations: [],
            address: ''
        });
    };

    const updateMascota = () => {
        if (!validateMascota()) return;

        if (isDuplicate()) {
            setErrorMessage('Los datos actualizados son iguales a una mascota existente.');
            return;
        }

        const formattedMascota = {
            ...newMascota,
            name: formatText(newMascota.name),
            age: newMascota.age,
            type: formatText(newMascota.type),
            breed: formatText(newMascota.breed),
            color: formatText(newMascota.color),
            vaccinations: newMascota.vaccinations.map(v => formatText(v)),
            address: formatText(newMascota.address)
        };

        setMascotas(mascotas.map(mascota => (mascota.id === editingId ? { ...formattedMascota, id: editingId } : mascota)));
        setNewMascota({
            name: '',
            age: '',
            type: '',
            breed: '',
            color: '',
            vaccinations: [],
            address: ''
        });
        setEditingId(null);
    };


    const deleteMascota = (id) => {
        setMascotas(mascotas.filter(mascota => mascota.id !== id));
    };

    const editMascota = (id) => {
        const mascota = mascotas.find(mascota => mascota.id === id);
        setNewMascota(mascota);
        setEditingId(id);
        setErrorMessage('');
    };

    return (
        <div className='container__box'>
            <h3>Mascotas</h3>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <input
                type="text"
                name="name"
                value={newMascota.name}
                onChange={handleChange}
                placeholder="Nombre de la mascota"
            />
            <input
                type="number"
                name="age"
                min="0"
                value={newMascota.age}
                onChange={handleChange}
                placeholder="Edad"
            />
            <input
                type="text"
                name="type"
                value={newMascota.type}
                onChange={handleChange}
                placeholder="Tipo"
            />
            <input
                type="text"
                name="breed"
                value={newMascota.breed}
                onChange={handleChange}
                placeholder="Raza"
            />
            <input
                type="text"
                name="color"
                value={newMascota.color}
                onChange={handleChange}
                placeholder="Color"
            />

            <div>
                <input
                    type="text"
                    name="vaccination"
                    value={vaccination}
                    onChange={(e) => setVaccination(e.target.value)}
                    placeholder="Vacuna"
                />
                <button onClick={addVaccination}>Agregar Vacuna</button>
            </div>

            <ul>
                {newMascota.vaccinations.map((vac, index) => (
                    <li key={index}>
                        {vac}
                        <button onClick={() => deleteVaccination(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                name="address"
                value={newMascota.address}
                onChange={handleChange}
                placeholder="Dirección"
            />

            {editingId ? (
                <button onClick={updateMascota}>Actualizar</button>
            ) : (
                <button onClick={addMascota}>Agregar</button>
            )}

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Tipo</th>
                        <th>Raza</th>
                        <th>Color</th>
                        <th>Vacunas</th>
                        <th>Dirección</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {mascotas.map((mascota) => (
                        <tr key={mascota.id}>
                            <td>{formatText(mascota.name)}</td>
                            <td>{mascota.age}</td>
                            <td>{formatText(mascota.type)}</td>
                            <td>{formatText(mascota.breed)}</td>
                            <td>{formatText(mascota.color)}</td>
                            <td>{mascota.vaccinations.map(v => formatText(v)).join(', ')}</td>
                            <td>{formatText(mascota.address)}</td>
                            <td>
                                <button onClick={() => editMascota(mascota.id)}>Editar</button>
                                <button onClick={() => deleteMascota(mascota.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Mascotas;
