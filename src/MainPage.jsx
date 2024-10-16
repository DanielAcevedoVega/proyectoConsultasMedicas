import React, { useState, useEffect } from 'react';
import './mainPage.css';
import Mascotas from './components/Mascotas';
import Citas from './components/Citas';
import Cuenta from './components/Cuenta';

const MainPage = ({ handleLogout }) => {
    useEffect(() => {

        document.body.classList.add('mainPageBody');
        const html = document.documentElement;
        html.style.fontSize = 'initial';
        html.style.scrollBehavior = 'auto';
        return () => {
            document.body.classList.remove('mainPageBody');
            html.style.fontSize = '';
            html.style.scrollBehavior = '';
        };
    }, []);

    const [selectedSection, setSelectedSection] = useState(null);

    const renderContent = () => {
        switch (selectedSection) {
            case 'pets':
                return <Mascotas />;
            case 'appointments':
                return <Citas />;
            case 'account':
                return <Cuenta />;
            default:
                return (
                    <section className="section__container">
                        <article className="container__article" onClick={() => setSelectedSection('pets')}>
                            <img src="storage/img/pet.svg" alt="Mascotas" />
                            <span>Mascotas</span>
                        </article>
                        <article className="container__article" onClick={() => setSelectedSection('appointments')}>
                            <img src="storage/img/citas.svg" alt="Citas" />
                            <span>Citas</span>
                        </article>
                        <article className="container__article" onClick={() => setSelectedSection('account')}>
                            <img src="storage/img/account.svg" alt="Cuenta" />
                            <span>Cuenta</span>
                        </article>
                    </section>
                );
        }
    };

    return (
        <div>
            <header className="class__header">
                <img className="title__img" src="storage/img/title.svg" alt="Title" />
                <input type="checkbox" id="menu-bar" />
                <label htmlFor="menu-bar"><img src="storage/img/list.svg" alt="Menu" /></label>
                <nav className="header__menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Review</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><button className='btn__logout' onClick={handleLogout}>Cerrar Sesión</button></li>
                    </ul>
                </nav>
            </header>
            {selectedSection && <button onClick={() => setSelectedSection(null)}>Back</button>}
            {!selectedSection && (
                <section className="welcome">
                    <h3>Nombre</h3>
                    <span>Apellido</span>
                </section>
            )}
            {renderContent()}
        </div>
    );
};

export default MainPage;
