import { Route, Router, ReactLocation, Outlet } from 'react-location';
import { HomePage } from './pages/HomePage';
import { LandingPage } from './pages/LandingPage';
import { Nav } from './components/Nav'
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { LinksPage } from './pages/LinksPage';
import { NotFoundPage } from './pages/NotFoundPage';

const routes: Route[] = [
  { path: '/', element: <LandingPage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/links', element: <LinksPage /> },
  { path: '*', element: <NotFoundPage /> },
]

function App() {
  
  const location = new ReactLocation();

  return (
    <Router location={location} routes={routes}>
      <Nav />
      <Outlet />
    </Router>
  )
}

export default App
