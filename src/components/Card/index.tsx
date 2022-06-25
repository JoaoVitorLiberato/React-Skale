import './style.css'
import './mobile.css'

import Chapeu from '../../assets/images/cards/chapeu.png'
import Bike from '../../assets/images/cards/bike.png'
import Mochila from '../../assets/images/cards/mochila.png'
import Cinta from '../../assets/images/cards/cinta.png'
import Vision from '../../assets/images/cards/tVision.png'
import Hshoes from '../../assets/images/cards/hShoes.png'
import Wshoes from '../../assets/images/cards/wShoes.png'




export default function Card() {
    return (
        <>
            <div>
                <h3>most viewed</h3>
                <section className='most'>

                    <div className="card">
                        <img src={Chapeu} alt="imagens" />
                        <h5>Hiking Cap</h5>
                        <span className='text'>
                            Forclaz Travel 500, Hiking Cap
                        </span>
                        <div className='cardFooter'>
                            <h4>$18,00</h4>
                            <a href="#">See more</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Bike} alt="imagens" />
                        <h5>Rockrider ST100</h5>
                        <span className='text'>
                            Moutain Bike, 24'', Kids 4'5" to 4'11"
                        </span>
                        <div className='cardFooter'>
                            <h4>$229,00</h4>
                            <a href="#">See more</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Mochila} alt="imagens" />
                        <h5>Backpack</h5>
                        <span className='text'>
                            Arpenaz NG100, Hiking 10 L
                        </span>
                        <div className='cardFooter'>
                            <h4>$40,00</h4>
                            <a href="#">See more</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Cinta} alt="imagens" />
                        <h5>Microfiber Towel</h5>
                        <span className='text'>
                            Nabaiji, 43.3" x 68.9" Ultra Compact Microfiber Towel, XL
                        </span>
                        <div className='cardFooter'>
                            <h4>$40,00</h4>
                            <a href="#">See more</a>
                        </div>
                    </div>
                </section>

                <div>
                    <h3>suggested for you</h3>
                    <section className='most'>

                        <div className="card">
                            <img src={Chapeu} alt="imagens" />
                            <h5>Hiking Cap</h5>
                            <span className='text'>
                                Forclaz Travel 500, Hiking Cap
                            </span>
                            <div className='cardFooter'>
                                <h4>$18,00</h4>
                                <a href="#">See more</a>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Vision} alt="imagens" />
                            <h5>Tennis Visor</h5>
                            <span className='text'>
                                Artengo TV100, 22'' Tennis Visor
                            </span>
                            <div className='cardFooter'>
                                <h4>$8,00</h4>
                                <a href="#">See more</a>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Hshoes} alt="imagens" />
                            <h5>Hiking Shoes</h5>
                            <span className='text'>
                                Quechua NH100 Mid-Height Hiking Shoes, Women's
                            </span>
                            <div className='cardFooter'>
                                <h4>$180,00</h4>
                                <a href="#">See more</a>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Wshoes} alt="imagens" />
                            <h5>Walking shoes</h5>
                            <span className='text'>
                            RW900, Power Walking Shoes                            </span>
                            <div className='cardFooter'>
                                <h4>$50,00</h4>
                                <a href="#">See more</a>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </>
    );
}