import { useState } from 'react'
import arrow from '../image/arrow.svg'
import location from '../image/location.svg'
import search from '../image/search.svg'
import '../style/ui-components/VacancyDropdown.scss'
const VacancyDropdown = () => {
	const cities = [
		'Калининград',
		'Москва',
		'Санкт-Петербург',
		'Екатеринбург',
		'Новосибирск',
		'Владивосток',
		'Казань',
		'Нижний Новгород',
		'Самара',
		'Омск',
		'Челябинск',
		'Ростов-на-Дону',
		'Уфа',
		'Волгоград',
		'Пермь',
	]
	const [open, setOpen] = useState(false)
	const [city, setCity] = useState(cities[0])

	const arrowClasses = `VacancyDropdown__img--arrow ${
		open ? 'VacancyDropdown__img--arrow--open' : ''
	}`

	const selectCity = item => {
		setCity(item)

		setOpen(false)
	}
	return (
		<div className='VacancyDropdown'>
			<img src={location} className='VacancyDropdown__img--location' />
			<p className='VacancyDropdown__p' onClick={() => setOpen(true)}>
				{city}
			</p>

			<img src={arrow} className={arrowClasses} onClick={() => setOpen(true)} />
			{open && (
				<div className='VacancyDropdown__drop'>
					<div className='VacancyDropdown__drop--search'>
						<img src={search} />
						<input type='text' placeholder='Найти город' />
					</div>
					<div className='VacancyDropdown__drop--list'>
						{cities.map((item, index) => (
							<div
								className={`VacancyDropdown__drop--list-item ${
									item === city ? 'VacancyDropdown__drop--list-item-select' : ''
								}`}
								key={index}
								onClick={() => selectCity(item)}
							>
								{item}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
export default VacancyDropdown
