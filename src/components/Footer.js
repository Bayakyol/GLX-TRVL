import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaSearchLocation size={20} style={{color: '#ffffff', marginRight:'2rem'}} />
            </div>
            <div>
                <p>123 Acme St.</p>
                <h4>Houston, Tx</h4>
            </div>
        </div>
        <div className='phone'>
            <h4><FaPhone size={20} style={{color: '#ffffff', marginRight:'2rem'}}/>1-800-123-1234</h4>
        </div>
        <div className='email'>
        <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight:'2rem'}}/>trips@galaxy.com</h4>
        </div>
      </div>
      <div className='right'>
        <h4>About the company</h4>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ipsum ut elit sollicitudin lacinia. Etiam viverra dapibus felis eget ultricies. 
            Curabitur auctor odio eget diam interdum volutpat. Vivamus ipsum massa, blandit efficitur orci at, luctus tincidunt tellus. Nam sem diam, faucibus non gravida. 
            Nulla gravida sed purus non dictum. Quisque et dapibus eros, ac convallis mauris. Praesent quis ultrices nisi. Aenean congue tortor id luctus fermentum.
             In tristique maximus mi eget feugiat. Maecenas eu odio nec quam scelerisque sodales. Donec lectus nunc, pulvinar sed tristique in, vehicula lacinia massa"</p>
      <div className='social'>
        <FaFacebook size={30} style={{color: '#ffffff', marginRight:'1rem'}}/>
        <FaTwitter size={30} style={{color: '#ffffff', marginRight:'1rem'}}/>
        <FaLinkedin size={30} style={{color: '#ffffff', marginRight:'1rem'}}/>
      </div>
      </div>
    </div>
  )
}

export default Footer
