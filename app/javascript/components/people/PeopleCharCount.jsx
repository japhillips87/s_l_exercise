import React from 'react'
import Button from '../Button'
import PeopleCharTable from './PeopleCharTable'
import PropTypes from 'prop-types'

class PeopleCharCount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortedArray: []
    }
  }

  getCharCount() {
    let chars = {}

    for (var i = 0; i < this.props.emails.length; i++) {
      var email = this.props.emails[i]
      for (var j = 0; j < email.length; j++) {
        var c = email.charAt(j)
        chars[c] === undefined ? chars[c] = 1 : chars[c] += 1
      }
    }

    return chars
  }

  sortCharCount(chars) {
    let sortable = []

    for (var char in chars) {
     sortable.push([char, chars[char]])
    }

    var sorted = sortable.sort(function (a, b) {
      return b[1] - a[1]
    })

    return sorted
  }


  handleClick() {
    let chars = this.getCharCount()
    let sortedArray = this.sortCharCount(chars)

    this.setState({sortedArray: sortedArray})
  }

  render() {
    return (
      <div className='email-char-count'>
        <Button onClick={this.handleClick.bind(this)} text='Show Email Character Count' />
        <PeopleCharTable sortedArray={this.state.sortedArray}/>
      </div>
    )
  }
}

PeopleCharCount.propTypes = {
  emails: PropTypes.array
}

export default PeopleCharCount

