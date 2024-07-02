import './styles.css'
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import image1 from '../../assets/break-images/001.webp';
import image2 from '../../assets/break-images/002.webp';
import image3 from '../../assets/break-images/003.webp';
import image4 from '../../assets/break-images/004.webp';
import image5 from '../../assets/break-images/005.webp';
import image6 from '../../assets/break-images/006.webp';
import image7 from '../../assets/break-images/007.webp';
import image8 from '../../assets/break-images/008.webp';
import image9 from '../../assets/break-images/009.webp';
import image10 from '../../assets/break-images/010.webp';
import image11 from '../../assets/break-images/011.webp';
import image12 from '../../assets/break-images/012.webp';
import image13 from '../../assets/break-images/013.webp';
import image14 from '../../assets/break-images/014.webp';
import image15 from '../../assets/break-images/015.webp';

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
					start: 'top bottom',
					end: 'bottom top',
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
					yPercent: () => gsap.utils.random(2000, 5000),
					rotationY: -45,
					filter: 'brightness(200%)'
				}, {
					ease: 'power2',
					yPercent: () => gsap.utils.random(-1000, -100),
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
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image1})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image2})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image3})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image4})` }}></div></div>
						<div className="grid__item"><div className="grid__item-inner" style={{ backgroundImage: `url(${image5})` }}></div></div>
					</div>
				</div>
				<h3 className="content__title">Conectando vidas à<br />assistência em tempo real.</h3>
			</section>
	);
}

export default HopeBreakSection;
