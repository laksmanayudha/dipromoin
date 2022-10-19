import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa"; 
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer({ children }) {

    return (
        <div className="footer">
            <h4 className="footer-title">Find us on:</h4>
            <div className="footer-lists">
                <span className="footer-lists__icon"> 
                    <a href="https://www.instagram.com/laksmanayudha_/?hl=en" target="_blank"> 
                        <FiInstagram /> 
                    </a> 
                </span>
                <span className="footer-lists__icon"> 
                    <a href="https://www.linkedin.com/in/i-gede-laksmana-yudha-2b61801b9/" target="_blank">
                        <FaLinkedinIn />
                    </a>
                </span>
                <span className="footer-lists__icon"> 
                    <a href="https://adorable-brigadeiros-1777d5.netlify.app/" target="_blank">
                        <BiWorld />
                    </a>
                </span>
                <span className="footer-lists__icon"> 
                    <a href="https://github.com/laksmanayudha" target="_blank">
                        <FaGithub />
                    </a>
                </span>
            </div>
            <p className="footer-copyright">Copyright &#169; YudhaL 2022</p>
        </div>
    );
}

export default Footer;