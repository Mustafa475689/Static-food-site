import React from 'react'
import "./footer.css"
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <>
      <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi inventore dolorem tenetur ipsa. Quo consequatur voluptatum earum atque quasi eius, debitis nostrum magni vitae! Nobis deserunt ad beatae eligendi officiis?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+92-310-1010-000</li>
                        <li>contact@tomato.com</li>
                    </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved </p>
      </div>
    </>
  )
}

export default Footer
