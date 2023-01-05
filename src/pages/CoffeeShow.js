import React from 'react'
import { useParams } from "react-router-dom"
import {Card, CardBody, CardTitle, CardImg, CardText, Button} from 'reactstrap' 
import { NavLink } from "react-router-dom"

const CoffeeShow = ({ coffees }) => {
  const { id } = useParams()
  console.log("CoffeeShow id", id)
  const coffee= coffees?.find(coffee => coffee.id === +id)
 
  return (
    <Card className="my-2">
      <CardImg
        alt="Card image cap"
        src={coffee.image}
        style={{
          height: 180
        }}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          {`${coffee.name}, ${coffee.size}`} 
        </CardTitle>
        <CardText>
          {coffee.bio}
        </CardText>
      </CardBody>
      <Button>
        <NavLink to={`/coffeeedit/${coffee.id}`} className="nav-link">
        Edit Coffee Profile
        </NavLink>
      </Button>
    </Card>
   

  )
}

export default CoffeeShow