import './styles.css'
import Product from "./Product";
import aiIcon from "../../assets/ai-icon.png";
import gpsIcon from "../../assets/gps-icon.png";
import noteIcon from "../../assets/note-icon.png";
import paperIcon from "../../assets/paper-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import mockBuddy from "../../assets/MockupBuddy.jpg"


const HopeProduct = () => {
    return (
        <section className='productSection'>
            <h1 className="productSectionTitle">O que fazemos?</h1>
            <div className='productContent'>
                <div className='productsDiv'>
                    <ul className='productsUl'>
                        <Product image={phoneIcon}>
                            Aplicativo Mobile que permite o socorrista passar informações assertivas à sede.
                        </Product>
                        <Product image={gpsIcon}>
                            Geolocalização em tempo real.
                        </Product>
                        <Product image={noteIcon}>
                            Aplicativo Desktop que auxilia o médico especializado a processar com mais facilidade, agilidade e confiabilidade o tipo de atendimento que está vindo pela ambulância .
                        </Product>
                        <Product image={aiIcon}>
                            Inteligência artificial preditiva para auxiliar em diagnósticos.
                        </Product>
                        <Product image={paperIcon}>
                            Capacitação de pessoas com novos protocolos.
                        </Product>
                    </ul>
                </div>
                <div>
                    <img src={mockBuddy} alt="" />
                </div>
            </div>
        </section>
    )
}

export default HopeProduct;