import React from 'react'

const Header = () => {

    return(
        <header>
            <div className="header-left">
                    <img className="header-image" src="https://weatherstack.com/site_images/weatherstack_logo_white.png" alt=""/>
            </div>
            <div className="header-right">
                <nav>
                    <ul>
                        <li><a href='#'>Pricing</a></li>
                        <li><a href='#'>Documentation</a></li>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>Affiliates</a></li>
                        {/*before for status: the dot*/}
                        <li><a href='#' className='li-status'>Status</a></li>
                        <li><button id='btn-log'>Log In</button></li>
                        <li><button id='btn-sign'>SIGN UP FREE</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
