import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Back from '../image/back.svg'
import Home from '../image/home.svg'
import Profile from '../image/human.svg'
import '../style/components/Header.scss'

const Header = () => {
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
			<img src={Back} alt='back' />

			<div className='Header__profile'>
				{home && (
					<NavLink to='/'>
						<img src={Home} alt='Profile' />{' '}
					</NavLink>
				)}
				<img src={Profile} alt='Profile' />
			</div>
		</div>
	)
}
export default Header
