import React from "react"
import { render } from "@testing-library/react"
import App from "../app"

test("renders", () => {
  render(<App />)
})

test("renders a blue circle and a red circle but NOT a purple circle", () => {
  const { getByLabelText, queryByLabelText } = render(<App />)
  expect(getByLabelText("red circle")).toBeInTheDocument()
  expect(getByLabelText("blue circle")).toBeInTheDocument()
  expect(queryByLabelText("purple circle")).toBeNull()
})
