const searchBox = document.querySelector('[data-city-search]')

const search = new google.maps.places.SearchBox(searchBox)
const kms
const latitude 
const longitude
const latitude2
const longitude2

search.addListener('places_changed',()=>{
    const place = search.getPlaces()

    if(place == null) return
    const latitude = place[0].geometry.location.lat()
    const longitude =place[0].geometry.location.lng()
    console.log(latitude,longitude)
 

})

const searchBox1 = document.querySelector('[data-drop-city]')

const search2 = new google.maps.places.SearchBox(searchBox1)

search2.addListener('places_changed',()=>{
    const place2 = search2.getPlaces()
      console.log(search2.getPlaces())
    if(place2 == null) return
    const latitude2 = place2[0].geometry.location.lat()
    const longitude2 =place2[0].geometry.location.lng()
    console.log(latitude2,longitude2)
 

})

console.log(latitude,longitude,latitude2,longitude2)
async function distanceCalculator(){
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${latitude},${longitude}&destinations=${latitude2},${longitude2}&key=AIzaSyBxgaV6J5TXybOy9-ZuyfIv7V_JFM47u-0`;
   const data = await fetch(proxy + url);
   const response = await data.json()
   const kms =await response.rows[0].elements[0].distance.text
} 

distanceCalculator()




