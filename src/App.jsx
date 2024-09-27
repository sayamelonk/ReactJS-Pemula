import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <main className="h-screen">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
