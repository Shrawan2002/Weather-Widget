import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox(){
    let [city,setCity] = useState("");
    let [data,setData] = useState();


    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "bf240d3f03ef13b9a31605b016e40eac";

   let getWeatherInfo = async ()=>{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result ={
        temp:jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feels_like:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    }
    console.log(result);
    return result ;
   }
    let handleInput = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        event.preventDefault();
        console.log(city);
        let info= await getWeatherInfo();
        setCity("");
        setData(info);
    }
    return(
        <div className='SearchBox'>
            <h3>Search For the Weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField onChange={handleInput} value={city} id="city" label="City Name" variant="outlined" required />
            <br></br>
            <br></br>
            <Button variant="contained" type='submit'>Search</Button>

            </form>
        
            {data&&<p>{data.temp}</p>}
        </div>
    )
}