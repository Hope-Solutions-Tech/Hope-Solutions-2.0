/* eslint-disable no-mixed-spaces-and-tabs */
import './styles.css'
import { useEffect } from 'react';
import break1 from '../../assets/break-images/1.jpg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const HopeBreakSection = () => {

    useEffect(() => {

    const initSmoothScrolling = () => {
        const lenis = new Lenis({
          lerp: 0.1,
          smoothWheel: true,
        })
        lenis.on('scroll', () => ScrollTrigger.update());
        
        const scrollFn = (time: number) => {
          lenis.raf(time); // Run Lenis' requestAnimationFrame method
          requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
        };
        requestAnimationFrame(scrollFn);
    }
    
    const grid = document.querySelector('.grid');

    const applyAnimation = (grid: HTMLDivElement) => {
	const gridWrap = grid.querySelector('.grid-wrap');
	const gridItems = grid.querySelectorAll('.grid__item');
	const gridItemsInner = [...gridItems].map(item => item.querySelector('.grid__item-inner'));
	
	const timeline = gsap.timeline({
	  	defaults: { ease: 'none' },
	  	scrollTrigger: {
			trigger: gridWrap,
			start: 'top bottom+=10%',
			end: 'bottom top-=10%',
			scrub: true
	  	}
	});
	
			// Set some CSS related style values
			grid.style.setProperty('--grid-width', '160%');
			grid.style.setProperty('--perspective', '2000px');
			grid.style.setProperty('--grid-inner-scale', '0.5');
			grid.style.setProperty('--grid-item-ratio', '0.8');
			grid.style.setProperty('--grid-columns', '6');
			grid.style.setProperty('--grid-gap', '16vw');

		  	timeline
		  	.set(gridWrap, {
				rotationX: 20
			})
			.set(gridItems, {
				z: () => gsap.utils.random(-3000,-1000)
			})
			.fromTo(gridItems, {
				yPercent: () => gsap.utils.random(200,2000),
				rotationY: -45,
				filter: 'brightness(200%)'
			}, {
				ease: 'power2',
				yPercent: () => gsap.utils.random(-1000,-100),
				rotationY: 45,
				filter: 'brightness(0%)'
			}, 0)
			.fromTo(gridWrap, {
				rotationZ: -5,
			}, {
				rotationX: -20,
				rotationZ: 10,
				scale: 1.2
			}, 0)
			.fromTo(gridItemsInner, {
				scale: 2
			}, {
				scale: 0.5
			}, 0)
}

    const scroll = () => {
        applyAnimation(grid as HTMLDivElement);
    }

    window.onload = () => {
        scroll();
        initSmoothScrolling();
    };

    }, []);

    return (
        <main>
			<section className="content">
				<div className="grid grid--2">
					<div className="grid-wrap">
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{backgroundImage: `url(${break1})`}}></div></div>
						
						
					</div>
				</div>
				<h3 className="content__title">Conectando vidas à<br/>assistência em tempo real.</h3>
			</section>
		</main>
    );
}

export default HopeBreakSection;
