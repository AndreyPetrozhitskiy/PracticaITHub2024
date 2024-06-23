import { useState } from 'react'
import Arrow from '../image/arrow2.svg'

import '../style/ui-components/Task.scss'
import { TaskComponentProps, TaskProps } from '../types'
import ModalTask from './ModalTask'

export const Task: React.FC<TaskComponentProps> = ({ children }) => (
	<div className='Task'>{children}</div>
)

export const CompletedTask: React.FC<TaskProps> = ({
	index,
	title,
	status,
	description,
	final,
}) => {
	// Хук должен быть вызван в начале компонента

	// const updateStatus = () => {
	// 	updateTaskStatus(index, 'Задание проверяется')
	// }
	console.log(index)
	return (
		<Task>
			<div className='Task__completed--status'>
				<div className='Task__completed--status-circle'>
					<img src={Arrow} alt='Arrow' /> {/* Добавлен alt для img */}
				</div>
				{!final && <div className='Task__completed--status-line'></div>}
			</div>
			<div className='Task__completed--details'>
				<h1>{title}</h1>
				<p>{status}</p>

				<button>Посмотреть задание</button>
			</div>
		</Task>
	)
}

export const TaskUnderReview: React.FC<TaskProps> = ({
	index,
	title,
	description,
	final,
}) => (
	<Task>
		<div className='Task__review--status'>
			<div className='Task__review--status-head'>
				<div className='Task__review--status-circle'></div>
				<div className='Task__review--status-lineY'></div>
				<div className='Task__review--status-circleMini'></div>
			</div>
			{!final && <div className='Task__review--status-line'></div>}
		</div>
		<div className='Task__review--details'>
			<h1>{title}</h1>
			<p>{description}</p>

			<button>Задание проверяется</button>
		</div>
	</Task>
)

export const PendingTask: React.FC<TaskProps> = ({
	index,
	title,
	final,
	description,
}) => {
	const [isModalOpen, setModalOpen] = useState(false)

	const openModal = () => setModalOpen(true)
	const closeModal = () => setModalOpen(false)
	return (
		<Task>
			<div className='Task__pending--status'>
				<div className='Task__pending--status-head'>
					<div className='Task__pending--status-circle'></div>
					<div className='Task__pending--status-lineY'></div>
					<div className='Task__pending--status-circleMini'></div>
				</div>
				{!final && <div className='Task__pending--status-line'></div>}
			</div>
			<div className='Task__pending--details'>
				<h1>{title}</h1>

				<button onClick={openModal}>Задание не выполнено</button>
				<ModalTask
					index={index}
					isOpen={isModalOpen}
					onClose={closeModal}
					title={title}
					description={description}
				/>
			</div>
		</Task>
	)
}
