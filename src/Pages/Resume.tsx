import React from 'react'
import { useDataContext } from '../Context/DataContext'

const Resume = () => {
  const {data} = useDataContext();
  return (
    <div>Resume</div>
  )
}

export default Resume