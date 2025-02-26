import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({});

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }

    
    return(
        <div>
            <h2>Weather App By Delta</h2>
             <SearchBox updateInfo={updateInfo} />
             <InfoBox info={weatherInfo}/>
        </div>
        
    )
}