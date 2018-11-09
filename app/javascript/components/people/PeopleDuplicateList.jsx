import React from 'react'
import PropTypes from 'prop-types'
import PeopleDuplicateListItem from './PeopleDuplicateListItem'

class PeopleDuplicateList extends React.Component {
  render() {
    let listItems
    let array = this.props.possibleDuplicates

    if (array.length > 0) {
      listItems = array.map(dup => {
        return (
          <PeopleDuplicateListItem key={dup[0] + dup[1]} emailOne={dup[0]} emailTwo={dup[1]} confidence={dup[2]} />
        )
      })
    }
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}

PeopleDuplicateList.propTypes = {
  possibleDuplicates: PropTypes.array
}

export default PeopleDuplicateList
