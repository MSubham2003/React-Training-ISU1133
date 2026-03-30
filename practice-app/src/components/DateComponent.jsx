import React from 'react'

function DateComponent() {
    const currentYear = new Date().getFullYear();
  return (
    <h2>Current Year is: {currentYear}</h2>
  )
}

export default DateComponent