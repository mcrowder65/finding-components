import React from "react"
import Circle from "./circle"
import shortid from "shortid"
import { useShapes } from "./use-shapes"

function App() {
  const [circles] = useShapes([
    {
      dimensions: { diameter: 50 },
      backgroundColor: "red",
      id: shortid.generate()
    },
    {
      dimensions: { diameter: 150 },
      backgroundColor: "blue",
      id: shortid.generate()
    }
  ])
  return (
    <div>
      {circles.map((circle, index) => {
        return <Circle {...circle} key={circle.id} index={index} />
      })}
    </div>
  )
}

export default App
