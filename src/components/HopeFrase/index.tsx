import { useEffect } from 'react';
import './styles.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const HopeFrase = () => {

    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        
        
        const rectangle: HTMLDivElement | null = document.querySelector(".line-mask");
        const section: HTMLDivElement | null = document.querySelector('.hopeFrase');
        if (!section) return;
        if (!rectangle) return;

        // const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        // const sectionHeight = section.offsetHeight;

        gsap.to(rectangle, {
            
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                onUpdate: (self) => {
                    const width = (1 - self.progress) * 100;
                    console.log(width);
                    gsap.set(rectangle, {width: `${width}%`} )
                }
            }
        })

        // window.addEventListener("scroll", () => {
        //     const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        //     // Se o scroll atual está antes da seção, definir a largura como 100%
        //     if (scrollTop < sectionTop - window.innerHeight) {
        //         rectangle.style.width = '100%';
        //         return;
        //     }

        //     // Se o scroll atual está depois da seção, definir a largura como 0%
        //     if (scrollTop > sectionTop + sectionHeight) {
        //         rectangle.style.width = '0%';
        //         return;
        //     }

        //     // Calcular a porcentagem do scroll dentro da seção, invertida
        //     const scrollPercentage = .7 - (scrollTop - (sectionTop - window.innerHeight)) / (sectionHeight + window.innerHeight);

        //     const width = Math.min(100, Math.max(0, scrollPercentage * 100));
        //     console.log(width);

        //     rectangle.style.width = `${width}%`;
        // });


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