import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.tsx'
import Vacancy from './components/Vacancy.tsx'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/vacancy' element={<Vacancy />} />
		</Routes>
	)
}

export default AppRouter
