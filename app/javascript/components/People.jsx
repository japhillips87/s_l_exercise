import React from 'react'
import PeopleCharCount from './people/PeopleCharCount'
import PeopleDuplicates from './people/PeopleDuplicates'

class People extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emails: []
    }
  }

  componentWillMount() {
    this.setState({emails: window.emails})
  }

  render() {
    return (
      <div>
        <PeopleCharCount emails={this.state.emails}/>
        <PeopleDuplicates emails={this.state.emails}/>
      </div>
    )
  }
}

export default People
