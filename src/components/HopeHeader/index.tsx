import './styles.css';
import logoHeader  from '../../assets/logo-header.svg';
import { useEffect } from 'react';

const HopeHeader = () => {
    useEffect(() => {
        const header = document.querySelector('.hope-header')
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight - 72) {
                header?.classList.add('hope-header-scrolled')
            } else {
                header?.classList.remove('hope-header-scrolled')
            }
        })
        document.querySelector('.contactLi')?.addEventListener('click', (event) => {
            event.preventDefault();
            const targetElement = document.querySelector('#hopeFooter');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth'});
            }
        });
        document.querySelector('.hopeHome')?.addEventListener('click', (event) => {
            event.preventDefault();
            const targetElement = document.querySelector('#hopeHero');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth'});
            }
        });
    })
    
    return (
        <header className='hope-header'>
            <a href='' className='hopeHome'>
                <img src={logoHeader} alt="" />
                <h2>Hope</h2>
            </a>
            <nav>
                <ul>
                    <li className='contactLi'>
                        <a href="">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HopeHeader;