import React from 'react'
import Header from './Header'
import Products from './Products'


const Home = ({state, dispatch}) => {
  return (
    <div>
        <Header/>

        <Products state={state} dispatch={dispatch}/>
    </div>
  )
}

export default Home