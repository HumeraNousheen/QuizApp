import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'100px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">React Quiz</div>
                <div className="footer_copyright">
                    Made  
                <span style={{color : 'crimson'}}></span> By 
                <a href="https://github.com/HumeraNousheen" target="_blank"           rel="noopener noreferrer"> Humera Nousheen
                </a>
                
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;