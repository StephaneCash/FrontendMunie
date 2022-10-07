import React from 'react'
import transpoert from "../images/transpoert.jpg"
import agro from "../images/agro.jpg";
import cerveau from "../images/cerveau.jpg"
import construct from "../images/construct.jpg"
import elevage from "../images/elevage.jpg";
import { NavLink } from "react-router-dom"

function About() {
    return (

        <section className="about" id='about'>
            <div className="">
                <h2 className="title">Nos services</h2>
                <div className="">
                    <div className="grille">
                        <div className='card'>
                            <div className='card-header'>Transport</div>
                            <div className='card-body'>
                                <img src={transpoert} />
                                <p>
                                    Nous sommes dans le domaine de transport. Munie Group propose de services assez
                                    complexes, très innovants et bien robustes. Nous offrons des formations et de l'emploi

                                </p>
                            </div>
                            <div className='card-footer'>
                                <NavLink to='/transport'>
                                    <button type='button'>Voir plus</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>Agro-alimentaire</div>
                            <div className='card-body'>
                                <img src={agro} />
                                <p>
                                    Nous sommes dans le domaine de transport. Munie Group propose de services assez
                                    complexes, très innovants et bien robustes. Nous offrons des formations et de l'emploi

                                </p>
                            </div>
                            <div className='card-footer'>
                                <button>Voir plus</button>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>Nouvelles technologies</div>
                            <div className='card-body'>
                                <img src={cerveau} />
                                <p>
                                    Nous sommes dans le domaine de transport. Munie Group propose de services assez
                                    complexes, très innovants et bien robustes. Nous offrons des formations et de l'emploi

                                </p>
                            </div>
                            <div className='card-footer'>
                                <button>Voir plus</button>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>Construction métallique</div>
                            <div className='card-body'>
                                <img src={construct} />
                                <p>
                                    Nous sommes dans le domaine de transport. Munie Group propose de services assez
                                    complexes, très innovants et bien robustes. Nous offrons des formations et de l'emploi

                                </p>
                            </div>
                            <div className='card-footer'>
                                <button>Voir plus</button>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>Elévage</div>
                            <div className='card-body'>
                                <img src={elevage} />
                                <p>
                                    Nous sommes dans le domaine de transport. Munie Group propose de services assez
                                    complexes, très innovants et bien robustes. Nous offrons des formations et de l'emploi

                                </p>
                            </div>
                            <div className='card-footer'>
                                <button>Voir plus</button>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>Passer vos publicités</div>
                            <div className='card-body'>
                                <img src={construct} />
                                <p>
                                    Nous sommes dans le domaine de transport. Munie Group propose de services assez
                                    complexes, très innovants et bien robustes. Nous offrons des formations et de l'emploi

                                </p>
                            </div>
                            <div className='card-footer'>
                                <button>Voir plus</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default About