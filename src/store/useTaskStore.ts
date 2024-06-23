// src/store/useTaskStore.ts
import create from 'zustand'
import { VacancyTask } from '../types/index.ts'

interface TaskStore {
	tasks: VacancyTask[]
	updateTaskStatus: (index: number, status: VacancyTask['status']) => void // Использовать точное значение типа
	addTask: (task: VacancyTask) => void
	removeTask: (index: number) => void
}

export const useTaskStore = create<TaskStore>(set => ({
	tasks: [
		{
			stage: 1,
			name: 'название задания',
			final: false,
			status: 'Задание выполнено',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			stage: 2,
			name: 'название задания',
			final: false,
			status: 'Задание проверяется',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			stage: 3,
			name: 'название задания',
			final: false,
			status: 'Задание не выполнено',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			stage: 4,
			name: 'название задания',
			final: false,
			status: 'Задание не выполнено',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			stage: 5,
			name: 'название задания',
			final: false,
			status: 'Задание не выполнено',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			stage: 6,
			name: 'название задания',
			final: true,
			status: 'Задание не выполнено',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
	],
	updateTaskStatus: (index, status) =>
		set(state => {
			const newTasks = state.tasks.map((task, i) =>
				i === index ? { ...task, status: status } : task
			)
			return { tasks: newTasks }
		}),
	addTask: task => set(state => ({ tasks: [...state.tasks, task] })),
	removeTask: index =>
		set(state => ({
			tasks: state.tasks.filter((_, i) => i !== index),
		})),
}))
