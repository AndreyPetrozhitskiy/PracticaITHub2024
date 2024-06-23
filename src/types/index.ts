// src/types/index.ts
export interface TaskProps {
	index: number
	title: string
	description: string
	status: string
	final?: boolean
}

export interface TaskComponentProps {
	children: React.ReactNode
}
export interface VacancyTask {
	stage: number
	name: string
	final?: boolean
	status: 'Задание выполнено' | 'Задание проверяется' | 'Задание не выполнено'
	description: string
}

export interface VacancyProps {
	tasks: VacancyTask[]
}
