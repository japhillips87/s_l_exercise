import React from 'react'
import PropTypes from 'prop-types'

class PeopleCharTableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.character}</td>
        <td id={'count-' + this.props.character}>{this.props.count}</td>
      </tr>
    )
  }
}

PeopleCharTableRow.propTypes = {
  character: PropTypes.string,
  count: PropTypes.number
}

export default PeopleCharTableRow
