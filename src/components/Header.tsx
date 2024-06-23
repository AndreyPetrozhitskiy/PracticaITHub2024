import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Back from '../image/back.svg'
import Home from '../image/home.svg'
import Profile from '../image/human.svg'
import '../style/components/Header.scss'
const Header = () => {
	const navigate = useNavigate()
	const [home, setHome] = useState(false)
	const url = useLocation()
	useEffect(() => {
		console.log(url.pathname)
		if (url.pathname === '/vacancy') {
			setHome(true)
		} else {
			setHome(false)
		}
	}, [url.pathname])
	return (
		<div className='Header'>
			<img src={Back} alt='back' onClick={() => navigate(-1)} />

			<div className='Header__profile'>
				{home && (
					<NavLink to='/'>
						<img src={Home} alt='home' style={{ marginTop: '5px' }} />
					</NavLink>
				)}
				<img src={Profile} alt='Profile' />
			</div>
		</div>
	)
}
export default Header
