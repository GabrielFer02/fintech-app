import React from 'react'
import { useDataContext } from '../Context/DataContext'

const Header = () => {
  const {data} = useDataContext();
  return (
    <div>Header</div>
  )
}

export default Header