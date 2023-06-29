import React, { useState, useEffect, useRef } from 'react'


function Pics({ Scrolled, Pos }) {

	const picsRef = useRef(null)
	const winWid = useRef(window)
	const [Calc, setCalc] = useState(0)


	const calc = () => {
		let c = (Scrolled - Pos[2] + 300) / picsRef.current.clientHeight;
		
		if(c < 0) c = 0;
		if(c > 1) c = 1;

		// console.log(c)
		if(c > 0 && c < 1) {
			console.log(c)
			setCalc(c)
		}
		return false;
	}
	
	useEffect(() => {
		winWid.current = window.innerWidth
	}, [])

	useEffect(() => {

		window.addEventListener('scroll', calc)

		return () => {
			window.removeEventListener('scroll', calc)
		}
	}, [Scrolled])

	
	


	return (
		<section id='pics' className='myScroll' ref={picsRef}>
			{/* <h1 style={{ transform: `translateX(${Scrolled - Pos[2]}px)` }}>FLICKR</h1> */}
			<h1 style={{ transform: `translateX(${Calc * winWid.current}px)` }}>FLICKR</h1>
			<article className='arti' style={{transform: `translate(-50%, -50%) scale(${Calc * 10}) rotate(${Calc * 760}deg)`,}}></article>
		</section>
	);
}

export default Pics;
