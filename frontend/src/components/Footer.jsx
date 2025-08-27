import React from 'react';
import {Phone ,Mail, GitHub, LinkedIn, YouTube, Instagram} from '@mui/icons-material'
import '../componentStyles/Footer.css'

function Footer() {
  return (
   <footer className="footer">
    <div className="footer-container">
        {/* Section1 */}
        <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><Phone fontSize='small'/>Phone : +9570643133</p>
            <p><Mail fontSize='small'/>Email : ashishthakur00100@gmail.com</p>
        </div>

        {/* Section2 */}
        <div className="footer-section social">
            <h3>Follow me</h3>
            <div className="social-links">
                <a href="https://github.com/AshishThakur00100/ShopKaro" target="_blank">
                    <GitHub className='social-icon'/>
                </a>
                <a href="https://www.linkedin.com/in/ashishthakur00100" target="_blank">
                    <LinkedIn className='social-icon'/>
                </a>
                <a href="" target="_blank">
                    <YouTube className='social-icon'/>
                </a>
                <a href="" target="_blank">
                    <Instagram className='social-icon'/>
                </a>
            </div>
        </div>

        {/* Section3 */}
        <div className="footer-section about">
            <h3>About</h3>
            <p>Shop on shopKaro and win exiciting prizes everyday...</p>
        </div>
    </div>
    <div className="footer-bottom">
        <p></p>
    </div>
   </footer>
  )
}

export default Footer
