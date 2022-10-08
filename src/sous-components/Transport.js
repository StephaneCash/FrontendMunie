import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import HeroSlider, { Slide } from 'hero-slider';
import $ from "jquery"
import { NavLink } from 'react-router-dom'
import Contact from '../components/Contact';


function Transport() {
    useEffect(() => {
        $('html').scrollTop(0);
    }, []);
    const image1 = './mot.jpg';
    const car = "./car.jpg";
    const car1 = "./car1.jpg";
    const car4 = "./car4.jpg";

    return (
        <>
            <NavBar />

            <section className='transport'>
                <div className='content'>
                    <div className="content-domaine-transport">
                        <h1 className="title">Domaine de transport</h1>
                        <div className='content-gen'>
                            <div className='content-image'>
                                <HeroSlider
                                    height="50vh"
                                    autoplay
                                    controller={{
                                        initialSlide: 1,
                                        slidingDuration: 400,
                                        slidingDelay: 100,
                                    }}
                                >
                                    <Slide
                                        background={{
                                            backgroundImage: car,
                                            backgroundAttachement: "fixed",
                                        }}
                                    />

                                    <Slide
                                        background={{
                                            backgroundImage: car4,
                                            backgroundAttachement: "fixed"
                                        }}
                                    />

                                    <Slide
                                        background={{
                                            backgroundImage: image1,
                                            backgroundAttachement: "fixed"
                                        }}
                                    />
                                    <Slide
                                        background={{
                                            backgroundImage: car1,
                                            backgroundAttachement: "fixed"
                                        }}
                                    />
                                </HeroSlider>
                            </div>
                            <div className='content-text'>
                                <h3 style={{ color: "#777" }}>content <i className='fa fa-bar-chart'></i></h3>
                                <p className='textSlideTransport'
                                    style={{ fontSize: '20px', margin: "12px", lineHeight: '30px', textAlign: "justify", color: "#444" }}>
                                    Munie-Group, entreprise qui donne possibilité aux jeunes du pays de trouver de l'emploi facilement
                                    dans le domaine de transport. Nous travaillons en parténariat avec plusieurs autres entreprises
                                    notamment empire {"<Code />"} et plein d'autres. faites nous confiance et vous ne serez jamais déçu.
                                    <br />

                                </p>
                            </div>
                        </div>
                        <h2 className='title' style={{ marginTop: '45px' }}>Nos services dans le domaine de transport <i className='fa fa-car'></i> </h2>

                        <div className='grilleTransportServices'>
                            <div className='card'>
                                <div className='card-header'>Trouver de l'emploi</div>
                                <div className='card-body'>
                                    <img src="./job.jpg" width="100px" alt='pictu-moto1' />
                                    <p>
                                        Nous permettons aux personnes qui souhaitent changer d'emploi ou qui se trouvent au chômage de bâtir un projet professionnel et de
                                        trouver un nouvel emploi.
                                    </p>
                                </div>
                                <div className='card-footer'>
                                    <NavLink to='create-emploi'>
                                        <button type='button'>Voir plus</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-header'>Prêt de motos par contrat</div>
                                <div className='card-body'>
                                    <img src="./moto.jpg" width="100px" alt="f-p" />
                                    <p>Le prix d'une moto est, en effet, relativement élevé, et nécessite
                                        une solution de financement adaptée. L'offre locative vous permet donc de profiter de votre propre deux-roues sans avoir à contracter un prêt. À noter que la souplesse de l'offre
                                        convient pour une conduite occasionnelle, régulière, voire quotidienne
                                    </p>
                                </div>
                                <div className='card-footer'>
                                    <NavLink to='/transport'>
                                        <button type='button'>Voir plus</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-header'>Commander une moto</div>
                                <div className='card-body'>
                                    <img src="./commandemoto.png" width="100px" alt="moto-pic" />
                                    <p >Le prix d'une moto est, en effet, relativement élevé, et nécessite
                                        une solution de financement adaptée. L'offre locative vous permet donc
                                    </p>
                                </div>
                                <div className='card-footer'>
                                    <NavLink to='/commander-transport'>
                                        <button type='button'>Voir plus <i className='fa fa-chevron-right'></i> </button>
                                    </NavLink>
                                </div>
                            </div>

                            <div className='card'>
                                <div className='card-header'>Formation</div>
                                <div className='card-body'>
                                    <img src="./formation1.gif" width="100px" alt='d-moto' />
                                    <p>Le prix d'une moto est, en effet, relativement élevé, et nécessite
                                        une solution de financement adaptée. L'offre locative vous permet donc de profiter de votre propre deux-roues sans avoir à contracter un prêt. À noter que la souplesse de l'offre
                                    </p>
                                </div>
                                <div className='card-footer'>
                                    <NavLink to='/transport'>
                                        <button type='button'>Voir plus</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
            <Footer />
        </>
    )
}

export default Transport