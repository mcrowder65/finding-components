import React from "react"

const Circle = props => {
  const { dimensions, backgroundColor, index } = props
  return (
    <div
      style={{
        width: dimensions.diameter,
        height: dimensions.diameter,
        backgroundColor,
        borderRadius: dimensions.diameter
      }}
      aria-label={""}
      data-testid={`${backgroundColor} circle`}
    />
  )
}

Circle.defaultProps = {
  backgroundColor: "blue",
  dimensions: {
    diameter: 200
  }
}

export default Circle
