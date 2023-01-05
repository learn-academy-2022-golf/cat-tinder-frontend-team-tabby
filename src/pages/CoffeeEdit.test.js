import { render, screen } from "@testing-library/react"
import CoffeeEdit from './coffeeedit'
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockCoffees from '../mockCoffees'

describe("<CoffeeEdit />", () => {
    beforeEach(() => {
        const div = document.createElement("div")
        render(
            <MemoryRouter initialEntries={["/coffeeedit/1"]}>
            <Routes>
                <Route path="coffeeedit/:id" element={<CoffeeEdit coffees={mockCoffees} />}/>
            </Routes>
          </MemoryRouter>, div
        )
      })
    it("renders the CoffeeEdit page for user", () => {
        const element = screen.getByText(/Update a coffee/i)
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent("Update a coffee")
      })
    
      it("has a form with entries for name, size, milk, bio and image", () => {
        const formName = screen.getByText(/name/i)
        expect(formName.getAttribute("For")).toEqual("name")
    
        const formSize = screen.getByText("size")
        expect(formSize.getAttribute("For")).toEqual("size")
    
        const formBio = screen.getByText("Bio")
        expect(formBio.getAttribute("For")).toEqual("bio")
    
        const formImage = screen.getByText("Image")
        expect(formImage.getAttribute("For")).toEqual("image")

        const formMilk = screen.getByText("Milk")
        expect(formMilk.getAttribute("For")).toEqual("milk")
      })
    })
