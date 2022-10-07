import React from 'react'
import { useEffect } from 'react';
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';
import $ from "jquery"
import { NavLink } from 'react-router-dom';
import RxSociaux from './RxSociaux';
import Contact from '../components/Contact';

function CreateEmploi() {
    useEffect(() => {
        $('html').scrollTop(0);
    }, []);

    return (
        <>
            <NavBar />
            <section className='create-emploi'>
                <div className='content'>
                    <div className='content-cv'>
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
                        <div>
                            <NavLink to='/transport' style={{ color: "blue" }}><i className='fa fa-chevron-left'></i> Le domaine de transport</NavLink>
                        </div>
                    </div>
                    <div className='content-text-offres'>
                        <h3 style={{ marginBottom: '12px' }}>Nos offres d'emploi <i className="fa fa-tasks"></i></h3>
                        <div className='titre'>Chef comptable</div>
                        <div className='categorie'>Comptabilité – Finance – Statistiques | Kinshasa</div>
                        <div className='desc'>Contexte et mission : I. Principale mission du poste  : En charge principalement de la comptabilité analytique de la comptabilité générale,
                            comptabilité tiers et de la fiscalité ; Responsable de la…</div>
                        <NavLink to="postuler"> <button>Postuler</button> </NavLink> <h5 className='date'> <i className=' fa fa-clock-o'></i> Le 1 Octobrre 2022</h5>
                        <hr id="hr" style={{margin:'18px'}} />

                        <div className='titre'>Chef Ressources Humaines</div>
                        <div className='categorie'>Comptabilité – Finance – Statistiques | Kinshasa</div>
                        <div className='desc'>Contexte et mission : I. Principale mission du poste  : En charge principalement de la comptabilité analytique de la comptabilité générale,
                            comptabilité tiers et de la fiscalité ; Responsable de la…</div>
                        <button>Postuler</button> <h5 className='date'> <i className=' fa fa-clock-o'></i> Le 1 Octobrre 2022</h5>
                        <hr id="hr" style={{margin:'18px'}} />
                    
                        <div className='titre'>Chef Développement</div>
                        <div className='categorie'>Comptabilité – Finance – Statistiques | Kinshasa</div>
                        <div className='desc'>Contexte et mission : I. Principale mission du poste  : En charge principalement de la comptabilité analytique de la comptabilité générale,
                            comptabilité tiers et de la fiscalité ; Responsable de la…</div>
                        <button>Postuler</button> <h5 className='date'> <i className=' fa fa-clock-o'></i> Le 1 Octobrre 2022</h5>
                        <hr id="hr" style={{margin:'18px'}}/>

                    </div>
                    <div className='content-rx'>
                        <RxSociaux />
                    </div>
                </div>
            </section>
            <Contact />
            <Footer />

        </>
    )
}

export default CreateEmploi