import React from "react"

export function useShapes(initialShapes) {
  const [shapes] = React.useState(initialShapes)
  return [shapes]
}
