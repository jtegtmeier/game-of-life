import React from 'react'
import  PropTypes from 'prop-types'
import Options from '../components/Options'

class OptionsContainer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div></div>
      // <Options
      //   currentOptions={game.currentOptions}
      //   handleResetClick={game.handleResetClick}
      //   handleRunClick={game.handleRunClick}
      // />
    )
  }
}

OptionsContainer.propTypes = {
  currentOptions: PropTypes.object,
  handleResetClick: PropTypes.func.isRequired,
  handleRunClick: PropTypes.func.isRequired,
}

export default OptionsContainer
