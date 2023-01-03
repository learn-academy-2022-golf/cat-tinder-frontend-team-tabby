import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "./Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Components"))
  expect(screen.getByText("Components")).toBeInTheDocument()
  userEvent.click(screen.getByText("GitHub"))
  expect(screen.getByText("GitHub")).toBeInTheDocument()
  userEvent.click(screen.getByText("Coffee Tinder"))
  expect(screen.getByText("Coffee Tinder")).toBeInTheDocument()
  })
})