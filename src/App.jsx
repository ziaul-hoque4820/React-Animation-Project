import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Marquees from "./components/Marquees"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Stripes from "./components/Stripes"
import Work from "./components/Work"




function App() {
  
  return (
    <div className="w-full bg-zinc-900 text-white">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
    </div>
  )
}

export default App
