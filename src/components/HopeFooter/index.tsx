import './styles.css'
import linkedinIcon from '../../assets/linkedin.png'
import instagramIcon from '../../assets/instagram.png'
import telIcon from '../../assets/wapp.png'
import emailIcon from '../../assets/email.png'
import mockupPhones from '../../assets/two-phones-mockup.png'

const HopeFooter = () => {
    
    const onContactClick = () => {
        window.open('https://api.whatsapp.com/send?phone=5511976893853&text=Ol%C3%A1', '_blank')
    }

    return (
        <footer id='hopeFooter'>
            <div className='footerHope'>
                <div className="mockupDiv">
                    <img src={mockupPhones} alt="imagem de dois celulares com o aplicativo da vitse" title='aplicativo vitse'/>
                </div>
                <div className='footerContent'>
                    <h2>Revolucione o atendimento de emergência com a <span className='vitseFooterSpan'>Vitse</span></h2>
                    <button className='contactButton' onClick={onContactClick}>
                        {/* <a href="https://api.whatsapp.com/send?phone=5511976893853&text=Ol%C3%A1" target='blank'> */}
                        Entre em contato
                        {/* </a> */}
                    </button>
                    <ul>
                        <li>
                            <a className='contactLink' href="https://www.instagram.com/hopesolutions_/">
                                <span>@vitseoficial</span>
                            <img src={instagramIcon} alt='ícone de instagram' title='instagram'/>
                            </a>
                        </li>
                        <li>
                            <a className='contactLink' href="https://www.linkedin.com/company/hope-solutions-health">
                                <span>vitseoficial</span>
                                <img src={linkedinIcon} alt="ícone do linkedin" title='linkedin' />
                            </a>
                        </li>
                        <li>
                            <a className='contactLink' href="https://api.whatsapp.com/send?phone=5511976893853&text=Ol%C3%A1,%20vim%20pelo%20site%20da%20HopeSolutions">
                                <span>+55 11 97689-3953</span>
                                <img src={telIcon} alt="ícone de telefone" title='whatsapp' />
                            </a>
                        </li>
                        <li className='display-none'>
                            <a className='contactLink' href="mailto:hopesolutions.tech@gmail.com?subject=Contato%20-%20Hope%20Solutions">
                                <span>contato@vitse.com.br</span>
                                <img src={emailIcon} alt="ícone de email" title='email'/>
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