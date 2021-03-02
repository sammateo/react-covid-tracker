import React, {useState, useEffect} from 'react';



function Stats(props){
    const formatter = new Intl.NumberFormat('en');
    const [data,setData] = useState([]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       console.log('This will run every second!');
    //     }, 1000);
    //     return () => clearInterval(interval);
    //   }, []);

    useEffect(()=>{
        loadData();
    },[data.cases]);

    const loadData = async function(){
       let stats = await fetch('https://disease.sh/v3/covid-19/countries/'+props.country+'?strict=true');
       let dataObj = await stats.json();
       setData(dataObj);
       
    }
    // console.log(data);
    return(
        <div className="stat-container">
            <h3>{data.country}</h3>
            <p>Cases: {formatter.format(data.cases)}</p>
            <p>Active: {formatter.format(data.active)}</p>
            <p>Deaths: {formatter.format(data.deaths)}</p>
            <p>Tests: {formatter.format(data.tests)}</p>
            <p>Recovered: {formatter.format(data.recovered)}</p>
            <p>Population: {formatter.format(data.population)}</p>
        </div>
    )
}

export default Stats;