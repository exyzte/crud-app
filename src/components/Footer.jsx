import React from 'react'
import '../CSS/footer.css'

const Footer = () => (
  <footer>
    <div className="footer-container">
      <ul className="footer-options">
        <li><a href="#">Help & Support</a></li>
        <li><a href="#">Subscriptions FAQs</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Do not sell my personal information</a></li>
        <li><a href="#">Cookie Choices</a></li>
        <li><a href="#">Help & Support Subscriptions FAQs Terms Privacy Do not sell my personal information Cookie Choices</a></li>
      </ul>
      <div className="footer-social">
        <a href="https://www.instagram.com/wayrarecords/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
        <a href="https://www.facebook.com/WayraRecords" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
        <a href="https://twitter.com/WayraRecords" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
      </div>
      <p className="footer-quote">"Music is the divine way to tell beautiful, poetic things to the heart." - Pablo Casals</p>
      <p className="footer-copyright">© 2025 Wayra Records</p>
    </div>
  </footer>
)

export default Footer
