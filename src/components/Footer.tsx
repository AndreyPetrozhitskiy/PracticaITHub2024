import telegramIcon from '../image/telegram.svg'
import vkIcon from '../image/vk.svg'
import '../style/components/Footer.scss'
const Footer = () => {
	return (
		<div className='Footer'>
			<p>© ЦирюльникЪ. Все права защищены</p>
			<div className='Footer__social'>
				<img src={telegramIcon} />
				<img src={vkIcon} />
			</div>
		</div>
	)
}
export default Footer
