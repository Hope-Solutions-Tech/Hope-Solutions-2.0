import './styles.css';
import logoHeader  from '../../assets/logo-header.svg';
import { useEffect } from 'react';

const HopeHeader = () => {
    useEffect(() => {
        const header = document.querySelector('.hope-header')
        window.addEventListener('scroll', () => {
            if (window.scrollY > 72) {
                header?.classList.add('hope-header-scrolled')
            } else {
                header?.classList.remove('hope-header-scrolled')
            }
        })
    
    })
    return (
        <header className='hope-header'>
            <div >
                <img src={logoHeader} alt="" />
                <h2>Hope Solutions</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="">Sobre nós</a>
                    </li>
                    <li>
                        <a href="">Produtos</a>
                    </li>
                    <li>
                        <a href="">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HopeHeader;