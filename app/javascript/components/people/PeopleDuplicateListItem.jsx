import React from 'react'
import PropTypes from 'prop-types'

class PeopleDuplicateListItem extends React.Component {
  render() {
    return (
      <li>
        <strong>{this.props.emailOne}</strong> and <strong>{this.props.emailTwo}</strong> are a {this.props.confidence}% match.
      </li>
    )
  }
}

PeopleDuplicateListItem.propTypes = {
  emailOne: PropTypes.string,
  emailTwo: PropTypes.string,
  confidence: PropTypes.string
}

export default PeopleDuplicateListItem
