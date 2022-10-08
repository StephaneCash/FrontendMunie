import React from 'react';
import "../css/Footer.css"

function Footer() {

  return (
    <>
      <div className="footer">
        <i className="fa fa-bell"></i> Alerte Commande
        <br />
        Abonnez-vous, pour ne rien rater de Munie-Group, nos nouvelles tendances.
        <br />
        <br />
        <input type="email" placeholder="Entrer votre adresse email" />
        <button style={{ cursor: "pointer" }}>Soumettre</button>
        <div className='content'>
          <div className='bloc1'>
            <ul>
              <h3>Entreprise</h3>
              <li>A propos</li>
              <li>Nos Servies</li>
              <li>Investissements et relations</li>
              <li>Opportunités</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='bloc2'>
            <ul>
              <h3>Servies</h3>
              <li>Nouvelles technologies</li>
              <li>Agro alimetaire</li>
              <li>Transport</li>
              <li>Construction métallique et navale</li>
              <li>Elevage</li>
            </ul>
          </div>
          <div className='bloc3'>
            <ul>
              <h3>Sources</h3>
              <li>Ressources</li>
              <li>Toutes les catégories</li>
              <li>Partenaires</li>
            </ul>
          </div>
          <div className='bloc4'>
            <ul>
              <h3>Servies commerciaux</h3>
              <li>Assurance commerciale</li>
              <li>Identité commerciale</li>
              <li>Services logistiques</li>
              <li>Services de surveillance</li>
            </ul>
          </div>
        </div>
        <hr style={{ margin: "23px auto" }} id="hr" />
        <div className='footer-about'>
          Tout droit réservé &copy; 2022 Munie-Group,
          <br />
          Designed by Munie-Group / Développement.
        </div>
      </div>
    </>
  )
}

export default Footer