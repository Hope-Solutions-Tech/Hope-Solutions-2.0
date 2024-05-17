import './styles.css'
import logoFooter from '../../assets/logo-footer.png'
import linkedinIcon from '../../assets/linkedin.svg'
import instagramIcon from '../../assets/instagram.svg'
import telIcon from '../../assets/tel.svg'
import emailIcon from '../../assets/email.svg'

const HopeFooter = () => {

    return (
        <footer>
            <div className='footerHope'>
                <h1>Entre em contato</h1>
                <div className='footerContent'>
                    <ul>
                        <li>
                            <a className='contactLink' href="https://www.instagram.com/hopesolutions_/">
                            <img src={instagramIcon}/>
                                <span>@hopesolutions</span>
                            </a>
                        </li>
                        <li>
                            <a className='contactLink' href="https://www.linkedin.com/company/hope-solutions-health">
                                <img src={linkedinIcon} alt="" />
                                <span>Hope Solutions</span>
                            </a>
                        </li>
                        <li>
                            <a className='contactLink' href="https://api.whatsapp.com/send?phone=5511976893853&text=Ol%C3%A1,%20vim%20pelo%20site%20da%20HopeSolutions">
                                <img src={telIcon} alt="" />
                                <span>+55 11 99999-9999</span>
                            </a>
                        </li>
                        <li>
                            <a className='contactLink' href="mailto:hopesolutions.tech@gmail.com?subject=Contato%20-%20Hope%20Solutions">
                                <img src={emailIcon} alt="" />
                                <span>contato@hopesolutions.com.br</span>
                            </a>
                        </li>
                    </ul>
                    <div className='solutionBy'>
                        <p>A solution by</p>
                        <img src={logoFooter} alt="" />
                    </div>
                </div>
            </div>
            <p className='footerCopyright'>
                © Copyright 2024 - HopeSolutions - Todos os direitos reservados - All rights reserved.
            </p>
        </footer>
    )
}

export default HopeFooter;