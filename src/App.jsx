import Navigation from './components/Navigation'
import Footer from './components/Footer'

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
      url: '/About',
    },
    {
      id: 3,
      name: 'Contact',
      url: '/Contact',
    },
    {
      id: 4,
      name: 'Todo',
      url: '/Todo',
    },
  ]
  return (
    <>
      <Navigation listItem={listItem} />
      <main className="h-screen">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
      <Footer/>
    </>
  )
}

export default App
