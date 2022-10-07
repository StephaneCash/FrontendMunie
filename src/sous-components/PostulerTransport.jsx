import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../css/Postuler-transport.css'
import RxSociaux from './RxSociaux';

function PostulerTransport() {
    const [nom, setNom] = useState('');
    const [postnom, setPostnom] = useState('');
    const [dateNaiss, setDateNass] = useState('');
    const [mail, setMail] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [cv, setCv] = useState(null);
    const [adresse, setAdresse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nom !== "" && postnom !== "" && mail !== "" && numberPhone !== "" && cv !== "" && adresse !== "") {
            alert('Vos données ont été bien soumises ' + nom)
        }
        else {
            alert('Veuillez remplir tous les champs svp !!!')
        }
    }

    return (
        <>
            <NavBar />

            <div className='content-postuler'>
                <div className='content'>
                    <div className="main">
                        <div className='create-cv'>
                            <div className="card">
                                <div className="card-header">
                                    <i className='fa fa-edit'></i> Créer votre CV
                                </div>
                                <div className='card-body'>
                                    <p>
                                        Plusieurs CV sont consultés chaque jour sur munie-group.com. Ajoutez le vôtre !
                                    </p>
                                    <button type='button' className=''>Créer votre CV</button>
                                </div>
                            </div>
                            <NavLink to='/transport/create-emploi' style={{ color: 'blue', }}>
                                <i className='fa fa-chevron-left'></i> Retour sur les offres
                            </NavLink>
                        </div>
                        <form>
                            <h5>Postuler pour le poste de Développeur FullStack </h5>
                            <label>Entrer votre nom</label>
                            <input type="text" placeholder='Votre nom' className="input" onChange={(e) => setNom(e.target.value)} />

                            <label>Entrer votre postnom</label>
                            <input type="text" placeholder='Votre postnom' onChange={(e) => setPostnom(e.target.value)} className="input" />

                            <div className='form-dflexinput'>
                                <div className='inputEmail'>
                                    <label>Entrer votre numéro de téléphone</label>
                                    <input type="number" className="input" placeholder='Numéro de téléphone'
                                        onChange={(e) => setNumberPhone(e.target.value)} />
                                </div>
                                <div className='input-cv'>
                                    <label>Date de naissance</label>
                                    <input type="date" onChange={(e) => setDateNass(e.target.value)} />
                                </div>
                            </div>

                            <div className='form-dflexinput'>
                                <div className='inputEmail'>
                                    <label>Entrer votre adresse email</label>
                                    <br />
                                    <input type="email" placeholder='Adresse email' className="input" onChange={(e) => setMail(e.target.value)} />
                                </div>
                                <div className='input-cv'>
                                    <label>Joindre votre CV, taille maximale 2Mo</label>
                                    <br />
                                    <input type="file" className="input" onChange={(e) => setCv(e.target.files[0])} />
                                </div>
                            </div>

                            <label>Entrer votre adresse complete, Avenue, N°, Quartier et Commune.</label>
                            <textarea placeholder='Votre adresse' style={{ padding: '7px' }} onChange={(e) => setAdresse(e.target.value)}></textarea>

                            <button onClick={handleSubmit}>Soumettre</button>
                        </form>
                        <div className='offres-other'>
                            <RxSociaux />
                        </div>
                    </div>

                    <div className='offres-form'>
                        <div className='grilleOffres'>
                            <div className='card'>
                                <div className='card-header'>Chef comptable</div>
                                <div className='card-body'>
                                    <div className='categorie'>Comptabilité – Finance – Statistiques | Kinshasa</div>
                                    <div className='desc'>Contexte et mission : I. Principale mission du poste  : En charge principalement de la comptabilité analytique de la comptabilité générale,
                                        comptabilité tiers et de la fiscalité ; Responsable de la…</div>
                                    <div className='footer'>
                                        <NavLink to="postuler"> <button>Postuler</button> </NavLink>
                                        <h5 className='date'> <i className=' fa fa-clock-o'></i> Le 1 Octobrre 2022</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-header'>Développeur WEB</div>
                                <div className='card-body'>
                                    <div className='categorie'>Comptabilité – Finance – Statistiques | Kinshasa</div>
                                    <div className='desc'>Contexte et mission : I. Principale mission du poste  : En charge principalement de la comptabilité analytique de la comptabilité générale,
                                        comptabilité tiers et de la fiscalité ; Responsable de la…</div>
                                    <div className='footer'>
                                        <NavLink to="postuler"> <button>Postuler</button> </NavLink>
                                        <h5 className='date'> <i className=' fa fa-clock-o'></i> Le 1 Octobrre 2022</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-header'>Chef DRH</div>
                                <div className='card-body'>
                                    <div className='categorie'>Comptabilité – Finance – Statistiques | Kinshasa</div>
                                    <div className='desc'>Contexte et mission : I. Principale mission du poste  : En charge principalement de la comptabilité analytique de la comptabilité générale,
                                        comptabilité tiers et de la fiscalité ; Responsable de la…</div>
                                    <div className='footer'>
                                        <NavLink to="postuler"> <button>Postuler</button> </NavLink>
                                        <h5 className='date'> <i className=' fa fa-clock-o'></i> Le 1 Octobrre 2022</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-header'>Conducteur Auto</div>
                                <div className='card-body'>
                                    <div className='categorie'>Comptabilité – Finance – Statistiques | Kinshasa</div>
                                    <div className='desc'>Contexte et mission : I. Principale mission du poste  : En charge principalement de la comptabilité analytique de la comptabilité générale,
                                        comptabilité tiers et de la fiscalité ; Responsable de la…</div>
                                    <div className='footer'>
                                        <NavLink to="postuler"> <button>Postuler</button> </NavLink>
                                        <h5 className='date'> <i className=' fa fa-clock-o'></i> Le 1 Octobrre 2022</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}

export default PostulerTransport