import React, { useEffect } from 'react'
import '../css/Visionnaire.css'
import HeroSlider, { Slide } from 'hero-slider';


function Visionnaire() {

    const car = "./m1.jpg";
    const car1 = "./m2.jpg";
    const car4 = "./m3.jpg";
    return (
        <div className='visionnaire'>
            <div className='content'>
                <h1 style={{ textAlign: "center", marginBottom:"15px" }}>
                    Le visionnaire en Chef, le PDG CEO de Munie-Group <br />
                    Son Excellence Ingénieur MUNIE Dieuvic Paul
                </h1>

                <HeroSlider
                    height="80vh"
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
                        }}
                    />

                    <Slide
                        background={{
                            backgroundImage: car4,
                        }}
                    />
                    <Slide
                        background={{
                            backgroundImage: car1,
                        }}
                    />
                </HeroSlider>
            </div>
        </div>
    )
}

export default Visionnaire