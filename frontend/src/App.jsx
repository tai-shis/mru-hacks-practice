import './App.css'
import Header from '../components/Header.jsx';
import Home from '../pages/Home.jsx';
import SignUp from '../pages/SignUp.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />		
				<Route path='/signup' element={<SignUp />} />
				<Route path='/login' />
			</Routes>
		</BrowserRouter>
	);
}

export default App
