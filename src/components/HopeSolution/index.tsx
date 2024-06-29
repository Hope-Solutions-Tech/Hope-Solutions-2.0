import './styles.css';
import spinningLogo from '../../assets/spinning-logo.png';
import SliderContent from '../SliderContent';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';


const HopeSolution = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.to(imageRef.current, {
            rotation: 1080,
            duration: 2,
            scrollTrigger: {
                trigger: '.hope-solution-section',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true
            }
        })
    }, [])

    return (
        <section className='hope-solution-section'>
            <div className='stickyContainer'>
                <h1>Nossa Solução</h1>
                <img src={spinningLogo} alt="" ref={imageRef}/>
            </div>
            <div className='sliderContainer'>
                <SliderContent title='Comunicação em Tempo Real'>
                    O aplicativo possibilita que socorristas enviem informações detalhadas e atualizações em tempo real, incluindo imagens e comentários, diretamente para médicos no hospital, garantindo uma avaliação rápida e precisa da condição do paciente.
                </SliderContent>
                <SliderContent title='Preparação Antecipada'>
                    Com a integração de um sistema de geolocalização, o hospital sabe exatamente quando e com qual condição o paciente chegará, permitindo que a equipe médica se prepare antecipadamente e aloque os recursos necessários antes da chegada do paciente.
                </SliderContent>
                <SliderContent title='Redução de Erros'>
                    A substituição de registros em papel por uma plataforma digital integrada minimiza o risco de perda ou confusão de informações, assegurando que dados críticos do paciente sejam transmitidos de forma precisa e segura, melhorando a qualidade do atendimento.
                </SliderContent>
            </div>
        </section>
    )
}

export default HopeSolution;