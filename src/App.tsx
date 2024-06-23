import AppRouter from './AppRouter'
import Footer from './components/Footer'
import Header from './components/Header'
import './style/main.scss'

function App() {
	return (
		<div className='container'>
			{/* {хедер}  */}
			<Header />
			<AppRouter />
			{/* Футер */}
			<Footer />
		</div>
	)
}

export default App
