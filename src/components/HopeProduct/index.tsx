import './styles.css'
import Product from "./Product";
import comunicationIcon from "../../assets/comunication-icon.png";
import gpsIcon from "../../assets/gps-icon.png";
import efetividadeIcon from "../../assets/efetividade-icon.png";
import paperIcon from "../../assets/paper-icon.png";
import errorIcon from "../../assets/error-icon.png";
import heartIcon from "../../assets/heart-icon.png";
import baseMockup from "../../assets/phone-base.png"
import phoneMockup from "../../assets/phone-mockup.png"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';


const HopeProduct = () => {

    const phoneRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const phone = phoneRef.current;
        if (!phone) return;

        gsap.to(phone, {
            duration: 1.5,
            y: 30,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, [])

    return (
        <section className='productSection'>
            <h2 className="productSectionTitle">O que fazemos?</h2>
            <div className='productContent'>
                <div className='productsDiv'>
                    <ul className='productsUl'>
                        <Product image={comunicationIcon}>
                            Comunicação em Tempo Real
                        </Product>
                        <Product image={efetividadeIcon}>
                            Aumento na efetividade do tratamento
                        </Product>
                        <Product image={paperIcon}>
                            Informações Cruciais
                        </Product>
                        <Product image={gpsIcon}>
                            Sistema de Geolocalização
                        </Product>
                        <Product image={errorIcon}>
                            Redução de erros
                        </Product>
                        <Product image={heartIcon}>
                            Aumento na chance de salvar uma vida
                        </Product>
                    </ul>
                </div>
                <div className='productsImg'>
                    <img src={phoneMockup} alt="mockup do aplicativo mobile com animação de subir e descer" title='celular com aplicativo' ref={phoneRef} />
                    <img src={baseMockup} alt="base do celular" title='base do celular'/>
                </div>
            </div>
        </section>
    )
}

export default HopeProduct;