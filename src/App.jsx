import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const listItem = [
    {
      id: 1,
      name: 'Home',
      url: '/',
    },
    {
      id: 2,
      name: 'About',
      url: '/about', // Changed to lowercase
    },
    {
      id: 3,
      name: 'Contact',
      url: '/contact', // Changed to lowercase
    },
    {
      id: 4,
      name: 'Todo',
      url: '/todo', // Changed to lowercase
    },
  ]
  return (
    <>
      <Navigation listItem={listItem} />
      <main className="mx-auto my-10 max-w-6xl px-20 py-20 h-screen bg-slate-50">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
