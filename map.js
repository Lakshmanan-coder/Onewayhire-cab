const searchBox = document.querySelector('[data-city-search]')

const search = new google.maps.places.SearchBox(searchBox)
var miles
var kms
var value
var valueint
var cartype
var latitude 
var longitude
var latitude2
var longitude2
var destination=[]

const car = document.querySelector('#cars');
cartype=car.value


car.addEventListener('change',()=>{
  console.log(cartype)
  return cartype=car.value;
})
search.addListener('places_changed',()=>{
    const place = search.getPlaces()

    if(place == null) return
    latitude = place[0].geometry.location.lat()
    longitude =place[0].geometry.location.lng()
    console.log(latitude,longitude)
 

})

const searchBox1 = document.querySelector('[data-drop-city]')

const search2 = new google.maps.places.SearchBox(searchBox1)

search2.addListener('places_changed',()=>{
    const place2 = search2.getPlaces()
   
    if(place2 == null) return
   var latitude2 = place2[0].geometry.location.lat()
   var longitude2 =place2[0].geometry.location.lng()
   
    destination.push(latitude2)
    destination.push(longitude2)
    return destination

 

})



async function distanceCalculator(){

  
  if((latitude && longitude && destination) != undefined ){
     const lat2 = destination[0]
     const long2=destination[1]
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${latitude},${longitude}&destinations=${lat2},${long2}&key=AIzaSyBxgaV6J5TXybOy9-ZuyfIv7V_JFM47u-0`;
   const data = await fetch(proxy + url);
   const response = await data.json()
  var miles =await response.rows[0].elements[0].distance.text
  kms = miles.split(/(\s+)/)[0]
  

  if(cartype==="sedan"){
  value = kms*12}else{value = kms*15}
  valueint=parseInt(value)
  console.log(miles)
  console.log(valueint)
console.log(kms)
$.ajax({
  type : "POST",  //type of method
  url  : "sms.php",  //your page
  data : { kms : kms, rate : valueint},// passing the values
  success: function(res){  
                        console.log(res)      }
});

}else{
    console.log("no values")
  }
} 






