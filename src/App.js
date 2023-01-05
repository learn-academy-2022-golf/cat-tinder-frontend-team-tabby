import './App.css';
import React, { useEffect, useState } from 'react' 
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
  const [coffees, setCoffees] = useState([])
  useEffect(() => {
    readCoffee()
  }, [])

  const readCoffee = () => {
    fetch("http://localhost:3000/coffees")
      .then((response) => response.json())
      .then((payload) => {
        setCoffees(payload)
      })
      .catch((error) => console.log(error))
  }
  const createCoffee = (coffee)=>{
    fetch("https://localhost:3000/coffees", {
      body: JSON.stringify(coffee),
      headers: {
        "content-Type" : "application/json"
      },
      method: "POST" 
    })
    .then((response) => response.json())
    .then(() => readCoffee)
    .catch((error) => console.log("Coffee create error:", error))
  }
  const updateCoffee = (coffee, id) => {
    fetch(`http://localhost:3000/coffees/${id}`, {
      body: JSON.stringify(coffee),
      headers: {
        "content-Type" : "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then((payload) => readCoffee())
    .catch((errors) => console.log("Coffee update errors:", errors))
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
