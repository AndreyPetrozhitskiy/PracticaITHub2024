import { NavLink } from 'react-router-dom'
import '../style/ui-components/Card.scss'
interface Props {
	title: string
	address: string
}
const Card: React.FC<Props> = ({ title, address }) => {
	return (
		<div className='Card'>
			<h1>{title}</h1>
			<div className='Card__address'>
				<span></span>
				<p>{address}</p>
			</div>

			<NavLink to='/vacancy'>
				<button>Пройти обучение</button>
			</NavLink>
		</div>
	)
}
export default Card
