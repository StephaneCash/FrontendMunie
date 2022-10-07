import React from 'react'

function Footer() {
    const style = {padding: '40px', backgroundColor:"silver", }
  return (
    <section style={style}>
        <footer>
            <span>Créé par <a href="#">MunieGroup DEVELOPPEMENT</a>MultiSecteurs | <span className="fa fa-copyright"></span> 2022 Tous droits
                réservés </span>
        </footer>
    </section>
  )
}

export default Footer