import React from 'react'
import '../styles/Intro.css'
import logo from '../../../public/MESSX.png'

const Intro = () => {
  return (
    <div className='intro'>
        <img className='logo' src={logo} alt='MESSX logo' />
        <h3 className='title'>Massive Energy Storage Systems X</h3>
        <p className='description'>MESSX is a company that provides energy solutions for the future. We are a team of engineers, scientists, and business professionals dedicated to providing the best energy solutions for our customers. We are committed to providing the best customer service and support for our customers.</p>
    </div>
  )
}

export default Intro