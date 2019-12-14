import React from "react"

const Circle = props => {
  const { dimensions, backgroundColor } = props
  return (
    <div
      style={{
        width: dimensions.diameter,
        height: dimensions.diameter,
        backgroundColor,
        borderRadius: dimensions.diameter
      }}
      tabIndex="0"
      aria-label={`${backgroundColor} circle`}
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
