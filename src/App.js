import './App.css';
import React, { useState } from 'react' 
import Footer from './components/Footer';
import Header from './components/Header';
import CoffeeIndex from './pages/CoffeeIndex';
import CoffeeEdit from './pages/CoffeeEdit';
import CoffeeNew from './pages/CoffeeNew';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import CoffeeShow from './pages/CoffeeShow'
import { Routes, Route } from "react-router-dom"
import mockCoffees from './mockCoffees'

function App() {
  const [coffees, setCoffees] = useState(mockCoffees)
  return (
<>
<Header/>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coffeeindex" element={<CoffeeIndex coffees={coffees}/>} /
      <Route path="/coffeeshow/:id" element={<CoffeeShow coffees={coffees}/>} />
      <Route path="/coffeenew" element={<CoffeeNew />} />
      <Route path="/coffeeedit" element={<CoffeeEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
<Footer/>
</>
  )
}

export default App;
