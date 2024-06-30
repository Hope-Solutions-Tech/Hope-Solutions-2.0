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

        gsap.to(rectangle, {
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                onUpdate: (self) => {
                    const width = (1 - self.progress) * 100;
                    gsap.set(rectangle, {width: `${width}%`} )
                }
            }
        })
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