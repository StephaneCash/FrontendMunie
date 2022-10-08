import React from 'react'

function Contact(props) {

    const submmit = () => {
        alert('Merci pour votre confiance')
    }

    const style = { backgroundColor: '#444', color: "aliceblue", marginTop: '30px', paddingBottom: '60px' }
    return (
        <section className="contact" id="contact" style={style}>
            <div className="max-width">
                <h2 className="title">Contacts</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Entrons en contact</div>

                        <div className="icons">
                            <div className="row">
                                <i className="fa fa-user"></i>
                                <div className="info">
                                    <div className="head">Nom</div>
                                    <div className="sub-title" style={{ color: "aliceblue" }}>Munie Group</div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fa fa-map-marker"></i>
                                <div className="info">
                                    <div className="head">Adresses</div>
                                    <div className="sub-title" style={{ color: "aliceblue" }}>Kinshasa, RDC</div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fa fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title" style={{ color: "aliceblue" }}>munie@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column left">
                        <div className="text">Ecrivez-nous</div>

                        <input type="email" placeholder='Email...' />
                        <input type="number" placeholder="Téléphone..." />
                        <textarea> </textarea>

                        <button type='button' id="btnEnvoyer" onClick={submmit}>Envoyer</button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact