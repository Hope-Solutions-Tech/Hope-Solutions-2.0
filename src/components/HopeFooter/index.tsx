import './styles.css'
import linkedinIcon from '../../assets/linkedin.png'
import instagramIcon from '../../assets/instagram.png'
import telIcon from '../../assets/wapp.png'
import emailIcon from '../../assets/email.png'
import mockupPhones from '../../assets/two-phones-mockup.png'

const HopeFooter = () => {
    
    return (
        <footer id='hopeFooter'>
            <div className='footerHope'>
                <div className="mockupDiv">
                    <img src={mockupPhones} alt="" />
                </div>
                <div className='footerContent'>
                    <h1>Revolucione o atendimento de emergência com a <span className='vitseFooterSpan'>Vitse</span></h1>
                    <button className='contactButton'>
                        <a href="https://api.whatsapp.com/send?phone=5511976893853&text=Ol%C3%A1" target='blank'>Entre em contato</a>
                    </button>
                    <ul>
                        <li>
                            <a className='contactLink' href="https://www.instagram.com/hopesolutions_/">
                                <span>@vitseoficial</span>
                            <img src={instagramIcon}/>
                            </a>
                        </li>
                        <li>
                            <a className='contactLink' href="https://www.linkedin.com/company/hope-solutions-health">
                                <span>vitseoficial</span>
                                <img src={linkedinIcon} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className='contactLink' href="https://api.whatsapp.com/send?phone=5511976893853&text=Ol%C3%A1,%20vim%20pelo%20site%20da%20HopeSolutions">
                                <span>+55 11 97689-3953</span>
                                <img src={telIcon} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className='contactLink' href="mailto:hopesolutions.tech@gmail.com?subject=Contato%20-%20Hope%20Solutions">
                                <span>contato@vitse.com.br</span>
                                <img src={emailIcon} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='footerCopyright'>
                Copyright © 2024 Vitse | CNPJ - 55.510.736/0001-00
            </p>
        </footer>
    )
}

export default HopeFooter;