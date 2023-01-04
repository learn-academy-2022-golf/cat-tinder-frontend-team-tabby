import { render, screen } from "@testing-library/react"
import CoffeeShow from "./CoffeeShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockCoffees from "../mockCoffees"

const renderComponent = () => {
    render(
        <MemoryRouter initialEntries={["/coffeeshow/1"]}>
        <Routes>
            <Route path="coffeeshow/:id" element={<CoffeeShow coffees={mockCoffees} />}/>
        </Routes>
      </MemoryRouter>
      )
    }

    describe("<CoffeeShow />", () => {
        it("renders a card with a coffee bio", () => {
            renderComponent()
            expect(screen.getByText(mockCoffees[0].bio)).toBeInTheDocument()
        })
        it("renders a card with a coffee name and size", () => {
            renderComponent()
            expect(screen.getByText(`${mockCoffees[0].name}, ${mockCoffees[0].size}`)).toBeInTheDocument()
        })
    })