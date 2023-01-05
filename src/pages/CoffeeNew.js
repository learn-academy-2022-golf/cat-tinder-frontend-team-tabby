import React, {useState} from 'react'
import {Form, FormGroup, Label, Input, Button} from "reactstrap"
import { useNavigate } from "react-router-dom"

const CoffeeNew = ({ createCoffee }) => {
  const navigate = useNavigate()
  const [newCoffee, setNewCoffee] = useState({
    name: "",
    size: "",
    milk: "",
    bio: ""
  })

  const handleChange = (e) => {
    setNewCoffee({...newCoffee, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createCoffee(newCoffee)
    navigate("/coffeeindex")
  }

  return (
    <>
      <h1>Create a new coffee</h1>
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
          Submit Coffee
        </Button>
      </Form>
    </>
  )
}



export default CoffeeNew