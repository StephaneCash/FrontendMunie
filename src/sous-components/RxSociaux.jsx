import React from 'react'

function RxSociaux() {
    return (
        <div className='content-rx'>    
            <div className="card">
                <div className="card-header">
                    <i className='fa fa-facebook' style={{ color: 'blue' }}></i> Suivez-nous sur Facebook
                </div>
                <div className='card-body'>
                    <p>
                        Munie-Group, page Facebook
                    </p>
                    <button type='button' className=''>Suivez-nous</button>
                </div>
            </div>
            <div className="card" style={{ marginTop: '12px' }}>
                <div className="card-header">
                    <i className='fa fa-whatsapp' style={{ color: "green" }}></i> Contactez-nous sur Whatsapp
                </div>
                <div className='card-body'>
                    <p>
                        Munie-Group, compte whatsapp
                        <br /> +234 815625565
                    </p>
                    <button type='button' className=''>Contactez-vous</button>
                </div>
            </div>
        </div>
    )
}

export default RxSociaux