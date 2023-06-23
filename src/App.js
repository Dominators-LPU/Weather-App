
import React,{useState, useEffect} from "react"; 

const App = () => {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [hemisphere, setHemisphere] = useState("")
  const [month, setMonth] = useState(new Date().getMonth())

  useEffect(() => {
         if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((location)=>{
                       setLatitude(location.coords.latitude)
                       setLongitude(location.coords.longitude)

                       if(location.coords.latitude>0){
                              setHemisphere("Northen Hemisphere")
                       }
                       else if(location.coords.latitude<0){
                              setHemisphere("Southern Hemisphere")
                       }
                        else{
                              setHemisphere("Equator")
                        }
                })
         }
  },[])

  return(
        <div> 
              <h1> {latitude}, {longitude}</h1>
              <h2> {hemisphere}</h2>
        </div>
  )
}

export default App;



// let date = new Date(); //  date.getMonth() => 0-11