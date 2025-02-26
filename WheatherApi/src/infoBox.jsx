import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"

export default function infoBox({info}){
    // const INIT_URL ="data:image/jpeg;base64,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";
    const HOT_URL ="https://media.istockphoto.com/id/1150229690/photo/silhouette-man-is-drinking-water-bottle-on-hot-weather-background-with-summer-season-high.jpg?s=612x612&w=0&k=20&c=IPPIY0enEDgl4nXt6ePap791LjXn0dd4kAinLfiGKKg=";
    const COLD_URL ="https://media.istockphoto.com/id/1152985678/photo/thunderstorm-with-sunrays-shining-through-altocumulus-asperitas-clouds-over.jpg?s=612x612&w=0&k=20&c=3vqQo6-8CdEzvPBt3iX5sS1qMbd7b7wAZkeX-_2yBbQ=";
    const RAIN_URL ="https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=612x612&w=0&k=20&c=rJcjz9o_7spWniAhZ-oFOVQ9gBJCy2tY_s__RqsseVw=";
    return(
        <div>
          <div className='infoBox'>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
          ?RAIN_URL
          :info.temp>25
          ?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Tempareture={info.temp}&deg;c</p>
        <p>Humidity ={info.humidity}&deg;c</p>
        <p>Min Temp ={info.temp_min}&deg;c</p>
        <p>Max Temp ={info.temp_max}&deg;c</p>
        <p>Humidity ={info.humidity}&deg;c</p>
        <p> The weather can be described as <i>{info.weather} </i> and feels like {info.feels_like}</p>
        </Typography>
      </CardContent>
    </Card>
          </div>
      
        </div>
    )
}