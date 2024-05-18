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
                <SliderContent title='Performance'>
                    Nossa solução atua com excelência em além de diminuir o tempo de uma ocorrência ela torna o tempo mais eficaz.
                </SliderContent>
                <SliderContent title='Agilidade'>
                    Nossa solução atua com excelência em além de diminuir o tempo de uma ocorrência ela torna o tempo mais eficaz.
                </SliderContent>
                <SliderContent title='Agilidade'>
                    Nossa solução atua com excelência em além de diminuir o tempo de uma ocorrência ela torna o tempo mais eficaz.
                </SliderContent>
            </div>
        </section>
    )
}

export default HopeSolution;