import React from 'react'
import '../css/Security.css'

function Security() {
    return (
        <div className='security'>
            <h3 style={{ textAlign: "center" }}>Axé sur la sécurité, où que vous alliez</h3>
            <div className='grilleSecurity'>
                <div className='card'>
                    <div className='card-body'>
                        <img src='./wewa.png' alt="mvt" />

                        <h4 style={{ marginTop: "10px" }}>  Notre engagement pour votre sécurité</h4> <br />
                        Avec chaque fonctionnalité de sécurité et chaque norme de nos directives communautaires, nous nous engageons à
                        contribuer à créer un environnement sûr pour nos utilisateurs
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <img src='./mvt.jpeg' alt="mvt" />
                        <h4 style={{ marginTop: "10px" }}>Mettre en mouvement plus de 10 000 villes dans les jours à venir</h4>
                        <br />
                        L'application est disponible dans des milliers de villes du monde entier, vous pouvez donc commander une course même lorsque vous êtes loin de chez vous.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security