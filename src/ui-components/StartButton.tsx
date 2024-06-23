import { NavLink } from 'react-router-dom'
import '../style/ui-components/StartButton.scss'
const StartButton = () => {
	return (
		<NavLink to='/vacancy' className='StartButton'>
			приступить к обучению
		</NavLink>
	)
}
export default StartButton
