
import React,{useState, useEffect} from "react"; 

const App = () => {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [hemisphere, setHemisphere] = useState("")
  const [month, setMonth] = useState()

  console.log(month)

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
         let date = new Date()
         setMonth(date.getMonth())
  },[])

  return(
        <div> 
              {/* <h1>Latitude: {latitude}</h1>
              <h1>Longitude: {longitude}</h1>
              <h1>Hemisphere: {hemisphere}</h1>
              <h1>Month: {month}</h1> */}


              {
                 hemisphere && month && (
                  <div>
                     {
                        (hemisphere=="Northen Hemisphere" && 2<=month<=9)||(hemisphere=="Southern Hemisphere" && month<2 || month>9)?(<h1>Summer Season</h1>) : (<h1>Winter Season</h1>)

                     }
                  </div>
                 )

              }
        </div>
  )
}

export default App;



// let date = new Date(); //  date.getMonth() => 0-11