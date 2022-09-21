import React from 'react'
import { useTheme } from './Context'
function D() {
    const name = useTheme()
  return (
    <div>{name}</div>
  )
}

export default D