import LooperGroup from '../image/LooperGroup.svg'
import Manager from '../image/manager.svg'
import '../style/components/Home.scss'
import StartButton from '../ui-components/StartButton'
import VacancyDropdown from '../ui-components/VacancyDropdown'
const Home = () => {
	return (
		<div className='Home'>
			<div className='Home__start'>
				<img className='Home__start--LooperGroup' src={LooperGroup} />
				<img className='Home__start--Manager' src={Manager} />
				<div className='Home__start--text'>
					<h1>Lorem ipsum</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				</div>
				<div className='Home__start--button'>
					<StartButton />
				</div>
			</div>
			<div className='Home__vacancy'>
				<div className='Home__vacancy--head'>
					<h1>вакансии</h1>
					<p>Актуальные вакансии в салонах ЦирюльникЪ</p>
					{/* Dropdown */}
					<VacancyDropdown />
				</div>
				<div className='Home__vacancy--cards'></div>
			</div>
		</div>
	)
}
export default Home
