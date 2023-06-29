function Pics({ Scrolled, Pos }) {
	
	const currentPos = Scrolled - Pos[2];
	const base = window.innerHeight / 2;
	const modified = currentPos + base;
	return (
		<section id='pics' className='myScroll'>
			<h1 style={{ transform: `translateX(${currentPos}px)` }}>FLICKR</h1>

			<article
				style={{
					transform: `translate(-50%, -50%) rotate(${Scrolled >= Pos[2] - base ? modified : 0}deg) scale(${Scrolled >= Pos[2] - base ? 1 + modified / 500 : 1}) `,
					opacity: `${Scrolled >= Pos[2] - base ? 1 - modified / 500 : 1}`,
				}}
			></article>
		</section>
	);
}

export default Pics;