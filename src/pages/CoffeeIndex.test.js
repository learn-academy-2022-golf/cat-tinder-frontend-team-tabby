import { render, screen } from "@testing-library/react"
import CoffeeIndex from "./CoffeeIndex"
import mockCoffees from "../mockCoffees"
import { BrowserRouter } from 'react-router-dom'

describe("<CoffeeIndex />", () => {
    it("renders a card for each coffee", () => {
        render(
            <BrowserRouter>
            <CoffeeIndex coffees={mockCoffees}/>
            </BrowserRouter>
        )
        mockCoffees.map((coffee) => {
            const nameElement = screen.getByText(coffee.name)
            expect(nameElement).toBeInTheDocument
        })
    })
})





