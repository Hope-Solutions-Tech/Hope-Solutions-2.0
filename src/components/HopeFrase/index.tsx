import { useEffect } from 'react';
import './styles.css';
// import gsap from 'gsap';

const HopeFrase = () => {
    
    useEffect(() => {
        
        // const fraseVerde = document.querySelector('.fraseVerde') as HTMLElement;
        // // const fraseSection = document.querySelector('.fraseSection') as HTMLElement;
        // function calcularPorcentagemScroll() {
        //     // Altura total do documento
        //     const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
        //     // Posição atual do scroll
        //     const posicaoScroll = window.scrollY;
        //     // Porcentagem de scroll
        //     const porcentagemScroll = (posicaoScroll / alturaTotal) * 100 - 95;
        //     return porcentagemScroll;
        // }

        // if (!fraseVerde) return;
        // window.onscroll = () => {
        //     fraseVerde.style.width = `${calcularPorcentagemScroll() * 36}%`;
        //     console.log(fraseVerde.style.width);
            
        // }
        

        // gsap.to(fraseVerde, {
        //     width: "100%",                  
        //     scrollTrigger: {
        //       trigger: '.fraseSection',
        //       start: 'top top',
        //       end: 'bottom bottom',
        //       scrub: true,                      
        //     }
        //   });
        

    })
    return (
        <section className="fraseSection">
            <h2 className='fraseResumo'>Em resumo...</h2>
            <div className='fraseAnimated'>
                <div className='fraseCinza'>
                    <h1 className=''>Do chamado à chegada, <br/> cuidando de cada segundo.</h1>
                </div>
                <div className='fraseVerde'>
                    <h1 className=''>Do chamado à chegada, <br/> cuidando de cada segundo.</h1>
                </div>
            </div>
        </section>
    )
}

export default HopeFrase