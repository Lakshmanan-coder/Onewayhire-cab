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

     var pickupl 
     var pickupd 
     var pickupt
     var dropl 
     var phone 
     var formelements=[]
const car = document.querySelector('#cars');
cartype=car.value
const form = document.querySelector('#pickupform')


form.addEventListener('submit',(e)=>{
      e.preventDefault()
      pickupl = searchBox.value
      pickupd = document.querySelector('.date-start').value
      pickupt = document.querySelector('#time').value
      dropl =searchBox1.value
      phone =document.querySelector('#phone').value

    formelements.push(pickupl)
    formelements.push(dropl)
    formelements.push(phone)
    formelements.push(pickupt)
    formelements.push(pickupd)


     searchBox.value=""
     document.querySelector('.date-start').value=""
     document.querySelector('#time').value=""
    searchBox1.value=""
     document.querySelector('#phone').value=""
     document.querySelector('.date-end').value=""

     return formelements
})

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

  console.log(formelements)
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
  data : { kms : kms, rate : valueint,pickupl:formelements[0],dropl:formelements[1],pickupt:formelements[3],phone:formelements[2],pickupd:formelements[4]},// passing the values
  success: function(res){ 
    alert("Good job!", "We will contact you asap !", "success");
    
                        console.log(res)      }
});

}else{
    console.log("no values")
  }
} 






