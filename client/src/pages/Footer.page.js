import React from 'react';
import '../components/css/footer.css';

const Footer = () => {
    return (
        <div className = "footer">
            <div className = "sb__footer section__padding">
                <div className = "sb__footer-below">
                    <div className = "sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Spòrs. All rights reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/ContactUs" ><div><p>Contact Us</p></div></a>
                        <a href="/Policy"><div><p>Terms and Conditions</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;