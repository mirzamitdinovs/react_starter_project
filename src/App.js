import { HomePage, SignInPage, SignUpPage, DashboardPage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from 'navigation/ProtectedRoute';
import { AppWrapper } from 'contexts/AppContext';
function App() {
	const user = localStorage.getItem('user');

	return (
		<div>
			<AppWrapper>
				<BrowserRouter>
					<Routes>
						<Route index element={<HomePage />} />
						<Route path='/signin' element={<SignInPage />} />
						<Route path='/signup' element={<SignUpPage />} />
						<Route
							path='/dashboard'
							element={
								<ProtectedRoute user={user}>
									<DashboardPage />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</BrowserRouter>
			</AppWrapper>
		</div>
	);
}

export default App;
