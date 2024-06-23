// src/components/Vacancy.tsx
import React from 'react'
import { useTaskStore } from '../store/useTaskStore'
import '../style/components/Vacancy.scss'
import {
	CompletedTask,
	PendingTask,
	TaskUnderReview,
} from '../ui-components/Task.tsx' //

const Vacancy: React.FC = () => {
	// Массив задач типизирован как VacancyTask[]

	const { tasks } = useTaskStore()
	return (
		<div className='Vacancy'>
			<div className='Vacancy__info'>
				<h1>Название вакансии</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			</div>
			<div className='Vacancy__tasks'>
				<div className='Vacancy__tasks--container'>
					{tasks.map((task, index) => {
						switch (task.status) {
							case 'Задание выполнено':
								return (
									<CompletedTask
										key={index}
										index={index}
										title={task.name}
										status={task.status}
										description={task.description}
									/>
								)
							case 'Задание проверяется':
								return (
									<TaskUnderReview
										key={index}
										index={index}
										title={task.name}
										status={task.status}
										description={task.description}
									/>
								)
							case 'Задание не выполнено':
								return (
									<PendingTask
										key={index}
										index={index}
										title={task.name}
										status={task.status}
										final={task.final}
										description={task.description}
									/>
								)
							default:
								return null // Обработка других случаев
						}
					})}
				</div>
			</div>
		</div>
	)
}

export default Vacancy
