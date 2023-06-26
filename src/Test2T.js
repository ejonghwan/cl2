
import { useState, useRef } from 'react';

function App() {
	console.log('App called');

	const [num, setNum] = useState(0);
	const article = useRef(null);


    const custom = useRef(0);
	// let custom = 0;
    // let [custom, setcustom] = useState(0)



	const prev = () => {
		setNum(prev => {
			prev = prev - 1;
			article.current.style.transform = `rotate(${45 * prev}deg)`
			return prev;
		});
		// console.log(num)
	};

	const next = () => {
		setNum(prev => {
			prev = prev + 1;
			article.current.style.transform = `rotate(${45 * prev}deg)`
			return prev;
		});
		// console.log(num)
	};

	return (
		<div className='wrap'>
			
			<button onClick={prev}>왼쪽으로 회전</button>
			<button onClick={next}>오른쪽으로 회전</button>

			
            <button onClick={() => console.log(--custom.current)}>minus</button>
            <button onClick={() => console.log(++custom.current)}>plus</button>
			


            {/* <button onClick={() => console.log(--custom)}>minus</button>
            <button onClick={() => console.log(++custom)}>plus</button> */}


			<article ref={article} style={{ marginTop: "50px", width: "200px", height: "200px", background: "red", transition: "transform 1s" }}></article>

            
			<p>useState 넘버: {num}</p>
			{/* <p>let 넘버: {custom}</p> */}
            <p>useRef 넘버: {custom.current}</p>
		</div>
	);
}
export default App;

