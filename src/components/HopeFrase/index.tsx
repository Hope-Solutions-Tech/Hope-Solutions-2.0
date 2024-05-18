import { useEffect } from 'react';
import './styles.css';

// import gsap from 'gsap';

const HopeFrase = () => {
    
    useEffect(() => {
        
        // const fraseVerde = document.querySelector('.fraseVerde') as HTMLElement;
        // const fraseSection = document.querySelector('.fraseSection') as HTMLElement;
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
        
        const rectangle: HTMLDivElement | null = document.querySelector(".line-mask");
        const section: HTMLDivElement | null = document.querySelector('.hopeFrase');
        if (!section) return;
        if (!rectangle) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.offsetHeight;

        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            // Se o scroll atual está antes da seção, definir a largura como 100%
            if (scrollTop < sectionTop - window.innerHeight) {
                rectangle.style.width = '100%';
                return;
            }

            // Se o scroll atual está depois da seção, definir a largura como 0%
            if (scrollTop > sectionTop + sectionHeight) {
                rectangle.style.width = '0%';
                return;
            }

            // Calcular a porcentagem do scroll dentro da seção, invertida
            const scrollPercentage = .7 - (scrollTop - (sectionTop - window.innerHeight)) / (sectionHeight + window.innerHeight);

            const width = Math.min(100, Math.max(0, scrollPercentage * 100));
            console.log(width);

            rectangle.style.width = `${width}%`;
        });


    })
    return (
        <section className='hopeFrase'>
            <div className="fraseResumo">
                EM RESUMO...
            </div>
            <div className="line">
                Do chamado à chegada, <br/> cuidando de cada segundo
                <div className="line-mask"></div>
            </div>
        </section>
       
       
    )
}

export default HopeFrase