import React from "react"
import { render } from "@testing-library/react"
import App from "../app"

test("renders", () => {
  render(<App />)
})

test("renders a blue circle and a red circle but NOT a purple circle", () => {
  const { debug, getByTestId, queryByTestId } = render(<App />)
  debug()
  expect(getByTestId("red circle")).toBeInTheDocument()
  expect(getByTestId("blue circle")).toBeInTheDocument()
  expect(queryByTestId("purple circle")).toBeNull()
})
