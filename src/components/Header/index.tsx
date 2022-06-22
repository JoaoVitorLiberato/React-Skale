import './style.css'

import Logo from '../../assets/images/Logo.png'
import IMaps from '../../assets/icon/maps.png'
import IUser from '../../assets/icon/user.png'
import IFavorites from '../../assets/icon/favorites.png'
import ICar from '../../assets/icon/carCompras.png'


export default function Header() {
    return (
        <>
            <header className='header'>
                <img src={Logo} alt="Logo da Pagina" className='logo' />
                <input type="text" name="Barra de Navegação" id="BarraNav" placeholder='search here for your product' />
                <nav className='navHeader'>
                    <ul className='menuHeader' >
                        <li className='itemHeader'>
                            <img src={IMaps} alt="Icone do Mapa" className='icones' />
                        </li>
                        <li className='itemHeader'>
                            <img src={IUser} alt="Icone de Usuario" className='icones' />
                        </li>
                        <li className='itemHeader'>
                            <img src={IFavorites} alt="Icone de Favoritos" className='icones' />
                        </li>
                        <li className='itemHeader'>
                            <img src={ICar} alt="Icone do Carrinho de Compras" className='icones' />
                        </li>

                    </ul>
                </nav>
            </header>
        
            <nav className='subMenu'>
                <ul className='menu'>
                    <li className="menuItens">
                        <a href="#">All categoies</a>
                    </li>
                    <li className="menuItens">
                        <a href="#">Outdors</a>
                    </li>
                    <li className="menuItens">
                    <a href="#">Indors</a>
                    </li>
                    <li className="menuItens">
                    <a href="#">Walter</a>
                    </li>
                    <li className="menuItens">
                    <a href="#">Kids</a>
                    </li>
                    <li className="menuItens">
                    <a href="#">Women</a>
                    </li>
                    <li className="menuItens">
                    <a href="#">Men</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}