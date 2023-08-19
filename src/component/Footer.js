import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
        <p>&copy;2023 abhijith@gmail.com</p>


      </div>
    </div>
  )
}

export default Footer
