const searchBox = document.querySelector('[data-city-search]')

const search = new google.maps.places.SearchBox(searchBox)

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

async function distanceCalculator(){
   const data = await fetch("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=12.951611%2080.14616629999999&destinations=13.1076828%2080.1522449&key=AIzaSyBxgaV6J5TXybOy9-ZuyfIv7V_JFM47u-0",{
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
   const response = await data.json()
   console.log(response)
} 

distanceCalculator();
