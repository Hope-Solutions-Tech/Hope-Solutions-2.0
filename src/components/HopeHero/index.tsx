import './styles.css';
import logoStroke from '../../assets/logo-stroke.svg'

const HopeHero = () => {
    return (
        <section className='hope-banner-section'>
            <div>
                <p>Do chamado à <span className='titleFont'>chegada</span></p>
                <p>cuidando de</p>
                <p><span className='titleFont'>cada segundo</span></p>
                <p className='aboutUs'>
                    A Hope Solutions nasce com o propósito de auxiliar médicos e socorristas em tomadas de decisões durante uma emergência, possibilitando assim, produtividade e agilidade durante uma ocorrência médica que necessite de encaminhamento do paciente ao hospital, utilizando serviços de ambulância.
                </p>
            </div>
            <div className="aomai-p-absolute">
                <img src={logoStroke} alt="" />
            </div>
        </section>
    )
}

export default HopeHero