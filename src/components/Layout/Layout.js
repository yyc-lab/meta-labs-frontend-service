import React from 'react'
import { Header } from '../Header'

export const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}