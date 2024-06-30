/* eslint-disable no-mixed-spaces-and-tabs */
import './styles.css'
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import image1 from '../../assets/break-images/001.png';
import image2 from '../../assets/break-images/002.png';
import image3 from '../../assets/break-images/003.png';
import image4 from '../../assets/break-images/004.png';
import image5 from '../../assets/break-images/005.png';
import image6 from '../../assets/break-images/006.png';
import image7 from '../../assets/break-images/007.png';
import image8 from '../../assets/break-images/008.png';
import image9 from '../../assets/break-images/009.png';
import image10 from '../../assets/break-images/010.png';
import image11 from '../../assets/break-images/011.png';
import image12 from '../../assets/break-images/012.png';
import image13 from '../../assets/break-images/013.png';
import image14 from '../../assets/break-images/014.png';
import image15 from '../../assets/break-images/015.png';

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
			console.log(gridWrap);
			console.log(gridItems);
			console.log(gridItemsInner);
			

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
					z: () => gsap.utils.random(-3000, -1000)
				})
				.fromTo(gridItems, {
					yPercent: () => gsap.utils.random(200, 4000),
					rotationY: -45,
					filter: 'brightness(200%)'
				}, {
					ease: 'power2',
					yPercent: () => gsap.utils.random(-1500, -100),
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
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		}
	}, []);

	return (
		<main>
			<section className="content">
				<div className="grid grid--2">
					<div className="grid-wrap">
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image1})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image2})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image3})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image4})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image5})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image6})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image7})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image8})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image9})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image10})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image11})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image12})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image13})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image14})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image15})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image1})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image2})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image3})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image4})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image5})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image6})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image7})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image8})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image9})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image10})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image11})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image12})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image13})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image14})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image15})` }}></div></div>
						
					</div>
				</div>
				<h3 className="content__title">Conectando vidas à<br />assistência em tempo real.</h3>
			</section>
		</main>
	);
}

export default HopeBreakSection;
