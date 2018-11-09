import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'
import PeopleDuplicateList from './PeopleDuplicateList'

// See https://en.wikipedia.org/wiki/Sørensen–Dice_coefficient for an explanation on how
// comparing two strings work using their bigrams
class PeopleDuplicates extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bigrams: {},
      possibleDuplicates: [],
      duplicateConfidence: 0.8
    }
  }

  handleClick() {
    var bigrams = this.generateBigrams()
    this.findPossibleDuplicates(bigrams)
  }

  generateBigrams() {
    let bigrams = {}
    for (var i = 0; i < this.props.emails.length; i++) {
      var email = this.props.emails[i]
      bigrams[email] = []
      for (var j = 0; j < email.length - 1; j++) {
        bigrams[email].push(email.substr(j, 2))
      }
    }
    return bigrams
  }

  findPossibleDuplicates(bigrams) {
    let possibleDuplicates = []

    for (var i = 0; i < this.props.emails.length; i++) {
      for (var j = i + 1; j < this.props.emails.length; j++) {
        var similarity = this.calculateSimilarity(bigrams[emails[i]], bigrams[emails[j]])
        if (similarity >= this.state.duplicateConfidence) {
          possibleDuplicates.push([emails[i], emails[j], (100 * similarity).toFixed(2)])
        }
      }
    }

    this.setState({possibleDuplicates: possibleDuplicates})
  }

  calculateSimilarity(firstBigram, secondBigram) {
    return (
      (this.intersection(firstBigram, secondBigram).length * 2) / (firstBigram.length + secondBigram.length)
    )
  }

  intersection(a, b) {
    return (
      a.filter(x => b.includes(x))
    )
  }

  render() {
    return (
      <div className='people-duplicates'>
        <Button onClick={this.handleClick.bind(this)} text='Find Possible Duplicates' />
        <PeopleDuplicateList possibleDuplicates={this.state.possibleDuplicates} />
      </div>
    )
  }
}

PeopleDuplicates.propTypes = {
  emails: PropTypes.array
}

export default PeopleDuplicates
