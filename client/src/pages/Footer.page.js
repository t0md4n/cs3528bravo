import React from 'react';
import '../components/css/footer.css';

const Footer = () => {
    return (
        <div className = "footer">
            <div className = "sb__footer section__padding">
                <div className = "sb__footer-below">
                    <div className = "sb__footer-copyright">
                        <p>
                            © Spòrs {new Date().getFullYear()}
                        </p>
                    </div>
                    <div className = "sb__footer-below-links">
                        <a href="/" ><div><p>Contact Us</p></div></a>
                        <a href="/"><div><p>Terms and Conditions</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
