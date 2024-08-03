import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [err,setErr] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "bf240d3f03ef13b9a31605b016e40eac";

   let getWeatherInfo = async ()=>{
    try{
        //openweathermap.org/current
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result ={
        city:city,
        temp:jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feels_like:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    }
    console.log(result);
    return result ;
    }catch(err){
        throw err;
    }
   }
    let handleInput = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
       try{
        event.preventDefault();
        console.log(city);
        let info= await getWeatherInfo();
        setCity("");
        updateInfo(info);
       }catch(err){
         setErr(true);
       }
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField onChange={handleInput} value={city} id="city" label="City Name" variant="outlined" required />
            <br></br>
            <br></br>
            <Button variant="contained" type='submit'>Search</Button>
            </form>
            {err&& <p style={{color:"red"}}>No Such Place Exists!</p>} 
        </div>
    )
}