import { Link, NavLink } from 'react-router-dom';

const Header = () => {


	const active = {
		color: "red",
	}


	return (
		<div>
			<Link to="/"><h1>Logo</h1></Link>
			<ul id="gnb">
				<li><NavLink to="/department" activeStyle={active}>department</NavLink></li>
				<li><NavLink to="/community" activeStyle={active}>community</NavLink></li>
				<li><NavLink to="/gallery" activeStyle={active}>gallery</NavLink></li>
				<li><NavLink to="/youtube" activeStyle={active}>youtube</NavLink></li>
				<li><NavLink to="/contact" activeStyle={active}>contact</NavLink></li>
				<li><NavLink to="/member" activeStyle={active}>member</NavLink></li>
				
			</ul>
		</div>
	);
};

export default Header;
