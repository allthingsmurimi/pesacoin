import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
      <div className='footer'>
          <div className='container'>
              <div className='col col-1'>
                  <h2>PESA<span className='primary'>coin</span></h2>
              </div>
              <div className='col'>
                  <h5>Support!</h5>
                  <span className='bar'></span>
                      {/* <a href='https://github.com/allthingsmurimi/'>allthingsmurimi</a> */}
                      <a href='/'>Contact Us!(+254769797682)</a>
                      <a href='/'>Chat</a>
                      <a href='/'>Help center</a>
                      <a href='/'>FAQ</a>
                  
              </div>
              <div className='col'>
                  <h5>Developers</h5>
                  <span className='bar'></span>
                      <a href='https://github.com/allthingsmurimi/'>allthingsmurimi</a>
                      <a href='/'>Cloud</a>
                      <a href='/'>Commerce</a>
                      <a href='/'>Pro</a>
                      <a href='/'>API</a>
                  
              </div>
              <div className='col'>
                  <h5>Company</h5>
                  <span className='bar'></span>
                      {/* <a href='https://github.com/allthingsmurimi/'>allthingsmurimi</a> */}
                      <a href='/'>About</a>
                      <a href='/'>Information</a>
                      <a href='/'>Legal</a>
                      <a href='/'>Privacy</a>
                  
              </div>
              <div className='col'>
                  <h5>Social</h5>
                  <span className='bar'></span>
                      {/* <a href='https://github.com/allthingsmurimi/'>allthingsmurimi</a> */}
                      <a href='https://twitter.com/allthingsmurimi'><FaTwitter className='icon'/></a>
                      <a href='/'><FaFacebook className='icon'/></a>
                      <a href='https://www.linkedin.com/in/steve-murimi-139bb123b/'><FaLinkedin className='icon'/></a>
                      <a href='https://github.com/allthingsmurimi'><FaGithub className='icon'/></a>
              </div>
          </div>
    </div>
  )
}

export default Footer