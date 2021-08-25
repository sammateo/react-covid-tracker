import React, {useState, useEffect} from 'react';



function Global(){
    const formatter = new Intl.NumberFormat('en');
    const [data,setData] = useState([]);


    useEffect(()=>{
        loadData();
    },[data.cases]);

    const loadData = async function(){
       let stats = await fetch('https://disease.sh/v3/covid-19/all');
       let dataObj = await stats.json();
       setData(dataObj);
       
    }
    // console.log(data);
    return(
        <div className="global-stats">
            <h3>Global Covid-19 Statistics:</h3>
            <p>Cases: {formatter.format(data.cases)}</p>
            <p>Active: {formatter.format(data.active)}</p>
            <p>Deaths: {formatter.format(data.deaths)}</p>
            <p>Tests: {formatter.format(data.tests)}</p>
            <p>Recovered: {formatter.format(data.recovered)}</p>
            <p>Population: {formatter.format(data.population)}</p>
            <p>Affected countries: {formatter.format(data.affectedCountries)}</p>
        </div>
    )
}

export default Global;