import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CoffeeIndex from './pages/CoffeeIndex';
import CoffeeEdit from './pages/CoffeeEdit';
import CoffeeNew from './pages/CoffeeNew';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import CoffeeShow from './pages/CoffeeShow'
import { Routes, Route } from "react-router-dom"

import coffees from './mockCoffees'

function App() {
  console.log(coffees)
  return (
<>
<Header/>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coffeeindex" element={<CoffeeIndex />} />
      <Route path="/coffeeshow" element={<CoffeeShow />} />
      <Route path="/coffeenew" element={<CoffeeNew />} />
      <Route path="/coffeeedit" element={<CoffeeEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
<Footer/>
</>
  )
}

export default App;
