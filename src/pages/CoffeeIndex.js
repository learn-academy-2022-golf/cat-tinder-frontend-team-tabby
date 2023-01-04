import React from 'react'
// import mockCoffees from '../mockCoffees'
import { NavLink } from 'react-router-dom'
import {Card, 
        CardBody,
        CardTitle,
        CardSubtitle,
        Button,
        Nav
      } from "reactstrap"

const CoffeeIndex = ({ coffees }) => {
  return (
    <main className='coffee-index-cards'>
   {coffees?.map((coffee, index) => {
    return (
      <Card
        style={{
          width: "14rem"
        }}
        key={index}
        >
        <img alt={`profile of a coffee named ${coffee.name}`} src={coffee.image} />
        <CardBody>
          <CardTitle tag="h5">
            {coffee.name}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Size: {coffee.size} 
          </CardSubtitle>
          <NavLink to = {`/coffeeshow/${coffee.id}`} className="nav-link">
          <Button>
            See more Details! 
          </Button>
          </NavLink>
        </CardBody>
      </Card>
    )
   })} 
      </main>
  )
}

export default CoffeeIndex