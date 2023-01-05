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
import { NavLink } from "react-router-dom"

function App() {
  const [coffees, setCoffees] = useState(mockCoffees)
  const createCoffee = (coffee)=>{
    console.log("Created Coffee:", coffee)
  }
  const updateCoffee = (coffee, id) => {
    console.log("coffee:", coffee)
    console.log("id:", id)
  }
  return (
<>
<Header/>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coffeeindex" element={<CoffeeIndex coffees={coffees}/>} />
      <Route path="/coffeeindex" element={<CoffeeIndex coffees={mockCoffees}/>} />
      <Route path="/coffeeshow/:id" element={<CoffeeShow coffees={coffees}/>} />
      <Route path="/coffeenew" element={<CoffeeNew createCoffee={createCoffee} />} />
      <Route path="/coffeeedit/:id"element={<CoffeeEdit coffees={coffees} updateCoffee={updateCoffee} />}
      />
      <Route path="*" element={<NotFound />} />
      </Routes>
<Footer/>
</>
  )
}

export default App;
