import { useEffect } from 'react'
import pen from '../image/pencil.svg'
import { useTaskStore } from '../store/useTaskStore'
import '../style/ui-components/Modaltask.scss'
interface ModalTaskProps {
	index: number
	isOpen: boolean
	onClose: () => void
	title: string
	description: string
}

const ModalTask: React.FC<ModalTaskProps> = ({
	index,
	isOpen,
	onClose,
	title,
	description,
}) => {
	const { updateTaskStatus } = useTaskStore()
	useEffect(() => {
		const body = document.body

		if (isOpen) {
			window.scrollTo(0, 0) // Прокручиваем страницу вверх
			body.classList.add('no-scroll') // Затем отключаем скролл
		} else {
			body.classList.remove('no-scroll')
		}

		// Очищаем эффект при размонтировании компонента
		return () => {
			body.classList.remove('no-scroll')
		}
	}, [isOpen])
	if (!isOpen) return null

	const Update = () => {
		updateTaskStatus(index, 'Задание проверяется')
		onClose()
	}
	return (
		<div className='Modal'>
			<div className='Modal__container'>
				<div className='Modal__head'>
					<div className='Modal__head--pencil'>
						<img src={pen} />
					</div>
					<div className='Modal__head--info'>
						<h1>Задание {index + 1} </h1>
						<p>{title}</p>
					</div>
					<span className='close' onClick={onClose}>
						&times;
					</span>
				</div>

				<div className='Modal__main'>
					<p>{description}</p>
					<span>Ваш ответ:</span>
					<textarea></textarea>
					<button onClick={Update}>Отправить</button>
				</div>
			</div>
		</div>
	)
}

export default ModalTask
