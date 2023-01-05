import { useParams, useNavigate } from 'react-router-dom'
import React, { useState} from 'react'
import { FormGroup, Label, Input, Form, Button } from 'reactstrap'


const CoffeeEdit = ({ coffees, updateCoffee }) => {
  const { id } = useParams()
  let currentCoffee = coffees?.find((coffee) => coffee.id === +id)
  
  const navigate = useNavigate()

  const [editCoffee, setEditCoffee] = useState({
    name: currentCoffee.name,
    size: currentCoffee.size,
    bio: currentCoffee.bio,
    image: currentCoffee.image,
    milk: currentCoffee.milk
  })

  const handleChange = (e) => {
    setEditCoffee({ ...editCoffee, [e.target.name]: e.target.value })
  }

const handleSubmit = () => {
  updateCoffee(editCoffee, currentCoffee.id)
  navigate("/coffeeindex")
}
return (
  <>
    <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            name="name"
            onChange={handleChange}
            placeholder="What is your name?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="size">
            Size
          </Label>
          <Input
            name="size"
            onChange={handleChange}
            placeholder="What is your size?"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="bio">
            Bio
          </Label>
          <Input
            name="bio"
            onChange={handleChange}
            placeholder="What is your bio?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            name="image"
            onChange={handleChange}
            placeholder="Share your image"
            type="url"
          />
        </FormGroup>
        <Button onClick={handleSubmit}>
          Submit Updated Coffee
        </Button>
      </Form>
    </>
  )
}

export default CoffeeEdit