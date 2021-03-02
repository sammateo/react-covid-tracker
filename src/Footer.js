import React from 'react';
import './styles.css';
import ig from './ig.png';
import linkin from './in.png';

function Footer(){
    return(
        <div className="footer-container">
            <div>
                <p>The data on this site is sourced from the disease.sh API</p>
                <p>This API retrieves data from worldometers.info</p>
                <p>The maps and charts found on the site are soruced from ourworldindata.org</p>
            </div>

            <div>
                <p>Created by Mateo Sam</p>
                <a href="https://www.instagram.com/sammateo4/" rel="noreferrer" target="_blank"><img className="ig-icon" src={ig} alt="instagram"></img></a>
                <a href="https://www.linkedin.com/in/mateo-sam-464ab81b2/" rel="noreferrer" target="_blank"><img className="ig-icon" src={linkin} alt="instagram"></img></a>
            </div>
            
        </div>
    )
}

export default Footer;