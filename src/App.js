import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import {GithubProvider} from './context/github/GithubContext';
import {AlertProvider} from './context/alert/AlertContext';
import Profile from './pages/Profile';


function App() {
  return (
    <Router>
      <GithubProvider>
      <AlertProvider>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='container mx-auto pb-12 px-3'>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/user/:login' element={<Profile />}/>
            <Route path='/notfound' element={<NotFound />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </main>
        <Footer />
      </div>
      </AlertProvider>
    </GithubProvider>
    </Router>
  );
}

export default App;
