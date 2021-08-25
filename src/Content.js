import React from 'react';
import Input from './Input';
import Global from './Global';
import './styles.css';


function Content(){

    return(
        <div className="content-container">
            
            <Input/>
            <Global/>
            <div className="iframe-container">
            <iframe title="cases-graph" className="confirmed-graph" src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" ></iframe>
            <iframe title="death-graph" className="confirmed-graph death-graph" src="https://ourworldindata.org/grapher/total-deaths-covid-19?tab=map"></iframe>
            </div>
            
        </div>
        
    )
}

export default Content;
