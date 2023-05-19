import { Link } from "react-router-dom";

import './styles.css';
import logo from '../../images/logo.png'

function Footer() {
  return (
    <div className='footer-wrapper'>

<img src={logo} className='footer-logo' alt='Intim flort'/>

<div className="footer-nav-wrapper">        
                      <Link to="">
                        Privacy Policy
                      </Link>
                      <span>|</span>
                       <Link to="">
                        Terms of Use
                      </Link>
                      <span>|</span>
                      <Link to="">
                        Safe Dating
                      </Link>
                      <span>|</span>
                      <Link to="">
                        Contact Us
                      </Link>
                </div>
                <div className="break"></div>
                <div className="copyright">
                &#169; Copyright {new Date().getFullYear()} Kaleton Web s.r.o.
              </div>
    </div> 
  );
}

export default Footer;