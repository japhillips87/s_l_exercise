import React from 'react'
import ReactDOM from 'react-dom'
import People from '../components/People'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <People />,
    document.getElementById('people-react')
  )
})
