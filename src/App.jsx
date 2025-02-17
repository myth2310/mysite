import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { PortofolioPage } from './pages/PortofolioPage'
import { NavbarComponent } from './components/NavbarComponent'
import { FooterComponent } from './components/FooterComponent'

function App() {
    return <div>
        <NavbarComponent />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portofolio/:slug" element={<PortofolioPage />} />
        </Routes>
        <FooterComponent />
    </div>
}

export default App
