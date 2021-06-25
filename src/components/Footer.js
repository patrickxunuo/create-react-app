import React from "react";

const Footer = () => {

    return(
        <footer>
            <div className="footer-left">
                <div>
                    <ul className='footer-left-col'>
                        <li className='footer-li-title'>GENERAL</li>
                        <li><a href='#'>About</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Site Map</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='footer-left-col'>
                        <li className='footer-li-title'>ACCOUNT</li>
                        <li><a href='#'>Sign Up Free</a></li>
                        <li><a href="#">Log In</a></li>
                        <li><a href="#">Forgot Password</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='footer-left-col'>
                        <li className='footer-li-title'>DEVELOPER</li>
                        <li><a href='#'>Documentation</a></li>
                        <li><a href="#">Github</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='footer-left-col'>
                        <li className='footer-li-title'>LEGAL</li>
                        <li><a href='#'>Legal</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Cookie Policy</a></li>
                        <li><a href='#'>Service Agreement</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-right">
                <img className='footer-img' src="https://weatherstack.com/site_images/weatherstack_logo_footer.png" alt=""/>
                <div className='socials'>
                    <a className="twitter" title="apilayer on Twitter" target="_blank"
                       href="https://twitter.com/apilayer"></a>
                    <a className="facebook" title="apilayer on Facebook" target="_blank"
                       href="https://www.facebook.com/apilayer"></a>
                    <a className="linkedin" title="apilayer on Linkedin" target="_blank"
                       href="https://www.linkedin.com/company/apilayer-ltd"></a>
                    <a className="github" title="weatherstack API on Github" target="_blank"
                       href="https://github.com/apilayer/weatherstack"></a>
                </div>
                <div className='footer-text'>© 2021 weatherstack, an <a href='#'>apilayer</a>  product. </div>
                <div className='footer-text'>All rights reserved.</div>
            </div>
        </footer>
    )
}

export default Footer