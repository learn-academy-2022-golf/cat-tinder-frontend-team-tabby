import { render, screen } from "@testing-library/react"
import CoffeeNew from './CoffeeNew'
import { BrowserRouter } from 'react-router-dom'

describe("<CoffeeNew />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <CoffeeNew/>
        </BrowserRouter>
      )
    })
    it("renders the CoffeeNew page for user", () => {
        const element = screen.getByText(/Create a new coffee/i)
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent("Create a new coffee")
      })
    
      it("has a form with entries for name, size, milk, and image", () => {
        const formName = screen.getByText(/name/i)
        // screen.debug(formName)
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

    