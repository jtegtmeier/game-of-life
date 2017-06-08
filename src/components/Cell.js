import React from 'react'
import  PropTypes from 'prop-types'

const Cell = (props) => {
  return (
    <div style={isAlive?{background: "green"}:{background: "black"}}/>
  )
}

Cell.propTypes = {
  isAlive: PropTypes.bool.isRequired
}

export default Cell
