import React from 'react'
import  PropTypes from 'prop-types'

const Options = (props) => (
    <div>
      <button onClick={props.handleResetClick}>Reset</button>
      <button onClick={props.handleRunClick}>Run</button>
    </div>
  )

Options.propTypes = {
  currentOptions: PropTypes.object,
  handleResetClick: PropTypes.func.isRequired,
  handleRunClick: PropTypes.func.isRequired,
}

export default Options
