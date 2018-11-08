import React from 'react'
import PeopleCharTableRow from './PeopleCharTableRow'
import PropTypes from 'prop-types'

class PeopleCharTable extends React.Component {

  headerRow() {
    if (this.props.sortedArray.length > 0) {
      return (
        <tr>
          <th>Character</th>
          <th>Count</th>
        </tr>
      )
    }
  }

  render() {
    let tableRows
    let array = this.props.sortedArray

    if (array.length > 0) {
      tableRows = array.map(row => {
        return (
          <PeopleCharTableRow key={row[0]} character={row[0]} count={row[1]} />
        )
      })
    }

    return (
      <table>
        <thead>
          {this.headerRow()}
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    )
  }
}

PeopleCharTable.propTypes = {
  sortedArray: PropTypes.array
}

export default PeopleCharTable
